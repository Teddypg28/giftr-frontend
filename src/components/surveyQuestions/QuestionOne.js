import React from 'react';

import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'

function QuestionOne({handleGenderClick, gender, isFirstGenderRender}) {

    return (
        <div className='questionTwoContainer'>
            <div onClick={() => handleGenderClick('male')} className='male' style={{backgroundColor: '#C4E8FD', opacity: gender === 'male' || isFirstGenderRender ? null : '20%'}}>
                <FaMale size={100} color='white' />
            </div>
            <div onClick={() => handleGenderClick('female')} className='female' style={{backgroundColor: '#FDE4F3', opacity: gender === 'female' || isFirstGenderRender ? null : '20%'}}>
                <FaFemale size={100} color='white' />
            </div>
        </div>
    );
}

export default QuestionOne;