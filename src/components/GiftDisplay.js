import React from 'react';

import '../GiftDisplay.css'

function GiftDisplay(props) {
    return (
        <div>
            <h1 className='giftDisplayHeader'>Here's What We Found...</h1>
            <h3 className='giftDisplayEmailHeader'>Want this list emailed to you?</h3>
            <div className='giftDisplayEmailInputContainer'>
                <input className='giftDisplayEmailInput' placeholder='Enter your email here' />
            </div>
            <div className='giftDisplayContainer'>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <div className='productContainer'></div>
                    <div className='productContainer'></div>
                    <div className='productContainer'></div>
                    <div className='productContainer'></div>
                    <div className='productContainer'></div>                
                </div>
            </div>
        </div>
    );
}

export default GiftDisplay;