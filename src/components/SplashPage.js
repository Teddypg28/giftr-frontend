import React from 'react';

import { useMediaQuery } from 'react-responsive';

import '../css/SplashPage.css'

function SplashPage(props) {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})
    const laptopSize = useMediaQuery({query: '(min-width: 900px)'})
    const monitorSize = useMediaQuery({query: '(min-width: 1500px)'})

    return (
        <div className='splashContainer'>
                <h1 className='splashHeading' style={{fontSize: (monitorSize || laptopSize) ? '70px' : mobileSize ? '45px' : '55px' }}>Looking for Gifts?</h1>
                <p className='splashSubheading' style={{fontSize: (monitorSize || laptopSize) ? '20px' : mobileSize ? '16px' : '20px' }}>We are currently working on the app. Come stop by a little later!</p>
                <p className='splashSubheading' style={{fontSize: (monitorSize || laptopSize) ? '20px' : mobileSize ? '16px' : '20px' }}>Need a question answered? <strong>Send us an email at support@usegiftr.com</strong></p>
        </div>
    );
}

export default SplashPage;