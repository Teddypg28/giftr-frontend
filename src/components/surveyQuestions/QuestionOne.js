import React from 'react';

import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'

import { useMediaQuery } from 'react-responsive';

function QuestionOne({handleGenderClick, gender}) {

    const mobileSize = useMediaQuery({query: '(max-width: 500px)'})

    return (
        <div className='questionOneContainer' style={{width: mobileSize && '360px'}}>
            <div onClick={() => handleGenderClick('male')} className='male' style={{backgroundColor: '#9ADAFF', opacity: gender === 'female' && '20%', height: mobileSize ? '125px' : '155px', width:  mobileSize ? '125px' : '155px'}}>
                <FaMale size={mobileSize ? 80 : 100} color='white' />
            </div>
            <div onClick={() => handleGenderClick('female')} className='female' style={{backgroundColor: '#F4CFE5', opacity: gender === 'male' && '20%', height: mobileSize ? '125px' : '155px', width:  mobileSize ? '125px' : '155px'}}>
                <FaFemale size={mobileSize ? 80 : 100} color='white' />
            </div>
        </div>
    );
}

export default QuestionOne;