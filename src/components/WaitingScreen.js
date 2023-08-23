import React, { useEffect, useRef, useState } from 'react';

import LoadingIcons from 'react-loading-icons'

import '../Survey.css'

function WaitingScreen({setIsDoneWaiting}) {

    const messageArray = ['Searching Now...', 'Almost Done...', 'Finished!']

    const [currentRender, setCurrentRender] = useState(0)

    const currentMessage = useRef(messageArray[0])

   if (currentRender === 1) {
        setTimeout(() => {
            currentMessage.current = messageArray[currentRender]
            setCurrentRender(2)
        }, 5000)
    } else if (currentRender === 2) {
        setTimeout(() => {
            currentMessage.current = messageArray[currentRender]
            setCurrentRender(3)
        }, 5000)
    } else if (currentRender === 3) {
        setTimeout(() => { setIsDoneWaiting(true) }, 1000) 
    }

    useEffect(() => setCurrentRender(1), [])

    return (

        <div className='waiting'>
            <h1>{currentMessage.current}</h1>
            <LoadingIcons.ThreeDots stroke='#38B6FF' />
        </div>

    );
}

export default WaitingScreen;