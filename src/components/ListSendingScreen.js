import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { MdMarkEmailRead } from 'react-icons/md'

function ListSendingScreen() {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    const message = 'We are working on your gift list now!'
    const submessage = "You'll receive an email from us within the next couple of minutes"

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