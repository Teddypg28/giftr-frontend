import React from 'react';
import { useMediaQuery } from 'react-responsive';

import '../css/GiftDisplay.css'

import ProductCard from './ProductCard';

function GiftDisplay({productsObject}) {

    console.log(productsObject)

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    const productCards = []
    const generateProductCards = () => {
        for (let i = 1; i<Object.keys(productsObject).length + 1; i++) {
            productCards.push(<ProductCard mobileSize={mobileSize} cardData={productsObject[i]} />)
        }

        return productCards
    }

    return (
        <div className='mainGiftDisplayContainer'>
            <div className='giftDisplayHeaderContainer'>
                <h1 className='giftDisplayHeader'>We've got some ideas for you...</h1>
                <p className='giftDisplaySubheader'>We sent this entire list to your email, too, in case you want to look back at it!</p>
            </div>
            <div className={mobileSize ? 'giftDisplayContainerMobile' : 'giftDisplayContainer'}>
                {generateProductCards()}
                <div className={mobileSize ? 'thankYouMessageContainerMobile' : 'thankYouMessageContainer'}>
                    <p className='thankYouMessage'>
                        Thank you for using Giftr! Feel free to use it as many times as you wish to get <strong>as many ideas as possible.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GiftDisplay;