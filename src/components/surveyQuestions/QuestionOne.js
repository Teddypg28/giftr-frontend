import React from 'react';

import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'

function QuestionOne({handleGenderClick, gender}) {

    return (
        <div className='questionTwoContainer'>
            <div onClick={() => handleGenderClick('male')} className='male' style={{backgroundColor: '#9ADAFF', opacity: gender === 'female' && '20%'}}>
                <FaMale size={100} color='white' />
            </div>
            <div onClick={() => handleGenderClick('female')} className='female' style={{backgroundColor: '#F4CFE5', opacity: gender === 'male' && '20%'}}>
                <FaFemale size={100} color='white' />
            </div>
        </div>
    );
}

export default QuestionOne;