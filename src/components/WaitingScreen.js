import React, { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import LoadingIcons from 'react-loading-icons'

function WaitingScreen({setIsDoneWaiting, isRequestSuccessful}) {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    const messageArray = ['Searching Now...', 'Almost Done...', 'Finished!']

    const [currentRender, setCurrentRender] = useState(0)

    const currentMessage = useRef(messageArray[0])

    return (

        isRequestSuccessful === false ? 
         
        <div className={mobileSize ? 'waitingMobile' : 'waiting'}>
            <h1 className='waitingSubheading'>Sorry, something went wrong on our end. Please try again in a bit!</h1>
        </div>

        :

        <div className='waiting'>
            <h1 style={{fontSize: '25px', width: '95%'}}>{currentMessage.current}</h1>
            <LoadingIcons.ThreeDots stroke='#38B6FF' />
        </div>

    );
}

export default WaitingScreen;