import React, { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import LoadingIcons from 'react-loading-icons'

import '../Survey.css'

function WaitingScreen({setIsDoneWaiting, isRequestSuccessful}) {

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

    const messageArray = ['Searching Now...This May Take A Minute', 'Almost Done...', 'Finished!']

    const [currentRender, setCurrentRender] = useState(0)

    const currentMessage = useRef(messageArray[0])

   if (currentRender === 1) {
        setTimeout(() => {
            currentMessage.current = messageArray[currentRender]
            setCurrentRender(2)
        }, 30000)
    } else if (currentRender === 2 && isRequestSuccessful) {
        setTimeout(() => {
            currentMessage.current = messageArray[currentRender]
            setCurrentRender(3)
        }, 5000)
    } else if (currentRender === 3 && isRequestSuccessful) {
        setTimeout(() => { setIsDoneWaiting(true) }, 1000) 
    } 
    
    useEffect(() => setCurrentRender(1), [])

    return (

        isRequestSuccessful === false ? 
         
        <div className={windowSizeQuery ? 'waitingMobile' : 'waiting'}>
            <h1>Sorry, something went wrong on our end. Please try again in a bit!</h1>
        </div>

        :

        <div className='waiting'>
            <h1>{currentMessage.current}</h1>
            <LoadingIcons.ThreeDots stroke='#38B6FF' />
        </div>

    );
}

export default WaitingScreen;