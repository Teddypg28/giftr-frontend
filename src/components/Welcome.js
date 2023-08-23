import React from 'react';
import '../Welcome.css'

import { useMediaQuery } from 'react-responsive';

function Welcome({setStartSurvey}) {

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

    return (
        <>
            <div className='container'>
                <div className='cornerPicOne'></div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img className='logo' alt='gift logo' src={require('../giftr-logo.png')} />
                </div>
                <h2 className={windowSizeQuery ? 'headingMobile' : 'heading'}>Find the Best Gifts with AI-Powered Gift Shopping.</h2>
                <h3 style={{textAlign: 'center', color: 'white', fontWeight: 200}}>Generate quick gift ideas for any occassion.</h3>
                <div className={windowSizeQuery ? 'stepsContainerMobile' : 'stepsContainer'}>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step1.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Tell us a bit about the person you are shopping for.</h1>
                        </div>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step2.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Wait a few seconds.</h1>
                        </div>
                        <div className={windowSizeQuery ? 'stepContainerMobile' : 'stepContainer'}>
                            <img className='steps' alt='step 1' src={require('../step3.png')} />
                            <h1 className={windowSizeQuery? 'stepTextMobile' : 'stepText'}>Ta-da! Dozens of gift ideas at your fingertips!</h1>
                        </div>
                </div>
                <div onClick={() => setStartSurvey(true)} className='button'>
                        <h1>Find Gift Ideas</h1>
                </div>
            </div>
        </>

    );
}

export default Welcome;