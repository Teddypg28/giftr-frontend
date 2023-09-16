import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import LoadingIcons from 'react-loading-icons'

function WaitingScreen({setIsDoneWaiting, isRequestSuccessful}) {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    const messageArray = ['Searching Now...', 'Finding the Best Gifts...', 'Almost Done...', 'Finished!']

    const [currentRender, setCurrentRender] = useState(0)

    if (currentRender === 0) {
        setTimeout(() => {
            setCurrentRender(currentRender + 1)
        }, 10000);
    } else if (currentRender === 1) {
        setTimeout(() => {
            setCurrentRender(currentRender + 1)
        }, 5000);
    } else if (currentRender === 2) {
        if (isRequestSuccessful) { 
            setTimeout(() => {
                setCurrentRender(currentRender + 1)
                setIsDoneWaiting(true)
            }, 1000);
        }
    }

    return (

        isRequestSuccessful === false ? 
         
        <div className={mobileSize ? 'waitingMobile' : 'waiting'}>
            <h1 className='waitingSubheading'>Sorry, something went wrong on our end. Please try again in a bit!</h1>
        </div>

        :

        <div className='waiting'>
            <h1 style={{fontSize: '25px', width: '95%'}}>{messageArray[currentRender]}</h1>
            <LoadingIcons.ThreeDots stroke='#38B6FF' />
        </div>

    );
}

export default WaitingScreen;