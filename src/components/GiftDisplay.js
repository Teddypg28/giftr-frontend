import React from 'react';
import { useMediaQuery } from 'react-responsive';

import '../GiftDisplay.css'

import ProductCard from './ProductCard';

function GiftDisplay({productsObject}) {

    console.log(productsObject)

    const windowSizeQuery = useMediaQuery({query: '(max-width: 500px)'})

    const productCards = []
    const generateProductCards = () => {
        for (let i = 1; i<Object.keys(productsObject).length + 1; i++) {
            productCards.push(<ProductCard cardData={productsObject[i]} />)
        }

        return productCards
    }

    return (
        <div className='mainGiftDisplayContainer'>
            <div className='giftDisplayHeaderContainer'>
                <h1 className='giftDisplayHeader'>We've got some ideas for you...</h1>
            </div>
            <div className={windowSizeQuery ? 'giftDisplayContainerMobile' : 'giftDisplayContainer'}>
                {generateProductCards()}
            </div>
        </div>
    );
}

export default GiftDisplay;