import React from 'react';

import '../../Survey.css'

function QuestionFour({budget, isFirstBudgetRender, handleBudgetClick}) {
    return (
        <div className='outerRangeContainer'>
                <div className='innerRangeContainer'>
                    <div style={{opacity: budget !== 50 && !isFirstBudgetRender && '20%'}} onClick={() => handleBudgetClick(50)} className='rangeContainer'>$0-$50</div>
                    <div style={{opacity: budget !== 100 && !isFirstBudgetRender && '20%'}} onClick={() => handleBudgetClick(100)} className='rangeContainer'>$50-$100</div>
                </div>
                <div className='innerRangeContainer'>
                    <div style={{opacity: budget !== 150 && !isFirstBudgetRender && '20%'}} onClick={() => handleBudgetClick(150)} className='rangeContainer'>$100-$150</div>
                    <div style={{opacity: budget !== 151 && !isFirstBudgetRender && '20%'}} onClick={() => handleBudgetClick(151)} className='rangeContainer'>$150+</div>
                </div>
        </div>
    );
}

export default QuestionFour;