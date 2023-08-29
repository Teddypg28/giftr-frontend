import React from 'react';

import { FaDollarSign } from 'react-icons/fa'
import { FaAmazon } from 'react-icons/fa'

function ProductCard({cardData}) {

    const handleGoToWebsiteClick = (productAsin) => {
       window.open(`http://www.amazon.com/dp/${productAsin}/ref=nosim?tag=giftr05c-20`)
    }

    return (
        <div className='productCardContainer'>
            <div className='mainPrimeContainer'>
               { cardData.productInfo.is_prime ? 
                <div className='primeEligibleContainer'> 
                    <FaAmazon className='amazonPrimeLogo' /> 
                    <h2 className='primeEligibleText'>Prime Eligible</h2> 
                </div> :
                <div className='primeEligibleContainer'> 
                    <h2 className='primeEligibleText'>Not Currently Prime Eligible</h2>
                </div> 
                }
            </div>
            <div className='productContainer'>
                <div className='productImageContainer'>
                    <img className='productImage' alt='' src={cardData.productInfo.image} /> 
                </div>
                <div className='priceContainer'>
                    <FaDollarSign color='#373737' size={30} />
                    <h1 className='price'>{cardData.productInfo.price.value}</h1>
                </div>
                <div className='productInfoContainer'>
                    <div className='productHeadingContainer'>
                        <h2 className='productHeading'>{cardData.productName}</h2> 
                    </div>
                </div>
                <div className='productDescriptionContainer'>
                    <p className='productDescription'>{cardData.productDescription}</p>
                </div>
                <div onClick={() => handleGoToWebsiteClick(cardData.productInfo.asin)} className='goToWebsiteBtn'>
                    <h1 className='goToWebsiteBtnText'>Shop Now</h1>
                </div>
            </div>  
        </div>
    );
}

export default ProductCard;