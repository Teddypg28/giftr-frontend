import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { MdMarkEmailRead } from 'react-icons/md'

function ListSendingScreen() {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    const message = 'Your gift list is on its way!'
    const submessage = "You'll receive an email from us within the next minute."

    return (

        <div className='waiting'>
            {!mobileSize && <div className='cornerPicOne'></div>}
            <img alt='' src={require('../images/giftr-logo.png')} className='messageContainerLogo' />
            <div className='messageContainer'>
                <h1 className={mobileSize ? 'messageContainerHeadingMobile' : 'messageContainerHeading'}>{message}</h1>
                <p className={mobileSize ? 'messageContainerSubheadingMobile' : 'messageContainerSubheading'}>{submessage}</p>
                <MdMarkEmailRead size={mobileSize ? 120 : 150} color='white' style={{marginTop: '20px'}} />
            </div>
        </div>

    );
}

export default ListSendingScreen;