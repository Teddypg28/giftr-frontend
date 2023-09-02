import React from 'react';

function QuestionFour({handleOccasionIconClick, handleOccasionInputChange, occasionInputValue, occasion, isFirstOccasionRender}) {

    return (
        <>
        <div className='mainContainer'>
            <div className='occasionsRow'>
                <div style={{opacity: occasion !== 'birthday' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('birthday')} className='occasionContainer'>
                    <img className='occasionIcon' alt='birthday icon' src={require('../../occasion-icons/birthday.png')} />
                    <h3 className='occasionName'>Birthday</h3>
                </div>
                <div style={{opacity: occasion !== 'christmas' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('christmas')} className='occasionContainer'>
                    <img className='occasionIcon' alt='christmas icon' src={require('../../occasion-icons/christmas.png')} />
                    <h3 className='occasionName'>Christmas</h3>
                </div>
                <div style={{opacity: occasion !== 'anniversary' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('anniversary')} className='occasionContainer'>
                    <img className='occasionIcon' alt='anniversary icon' src={require('../../occasion-icons/anniversary.png')} />
                    <h3 className='occasionName'>Anniversary</h3>
                </div>
                <div style={{opacity: occasion !== 'baby shower' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('baby shower')} className='occasionContainer'>
                    <img className='occasionIcon' alt='baby shower icon' src={require('../../occasion-icons/baby-shower.png')} />
                    <h3 className='occasionName'>Baby Shower</h3>
                </div>
                <div style={{opacity: occasion !== 'appreciation' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('appreciation')} className='occasionContainer'>
                    <img className='occasionIcon' alt='appreciation icon' src={require('../../occasion-icons/appreciation.png')} />
                    <h3 className='occasionName'>Appreciation</h3>
                </div>
            </div> 
            <div className='occasionsRow'>
                <div style={{opacity: occasion !== 'baptism' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('baptism')} className='occasionContainer'>
                    <img className='occasionIcon' alt='baptism icon' src={require('../../occasion-icons/baptism.png')} />
                    <h3 className='occasionName'>Baptism</h3>
                </div>
                <div style={{opacity: occasion !== 'bridal shower' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('bridal shower')} className='occasionContainer'>
                    <img className='occasionIcon' alt='bridal shower icon' src={require('../../occasion-icons/bridal-shower.png')} />
                    <h3 className='occasionName'>Bridal Shower</h3>
                </div>
                <div style={{opacity: occasion !== 'easter' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('easter')} className='occasionContainer'>
                    <img className='occasionIcon' alt='easter icon' src={require('../../occasion-icons/easter.png')} />
                    <h3 className='occasionName'>Easter</h3>
                </div>
                <div style={{opacity: occasion !== "father's day" && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick("father's day")} className='occasionContainer'>
                    <img className='occasionIcon' alt='fathers day icon' src={require('../../occasion-icons/fathers-day.png')} />
                    <h3 className='occasionName'>Father's Day</h3>
                </div>
                <div style={{opacity: occasion !== "mother's day" && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick("mother's day")} className='occasionContainer'>
                    <img className='occasionIcon' alt='mothers day icon' src={require('../../occasion-icons/mothers-day.png')} />
                    <h3 className='occasionName'>Mother's Day</h3>
                </div>
            </div> 
            <div className='occasionsRow'>
                <div style={{opacity: occasion !== 'hannukah' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('hannukah')} className='occasionContainer'>
                    <img className='occasionIcon' alt='hannukah icon' src={require('../../occasion-icons/hanukkah.png')} />
                    <h3 className='occasionName'>Hanukkah</h3>
                </div>
                <div style={{opacity: occasion !== 'graduation' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('graduation')} className='occasionContainer'>
                    <img className='occasionIcon' alt='graduation icon' src={require('../../occasion-icons/graduation.png')} />
                    <h3 className='occasionName'>Graduation</h3>
                </div>
                <div style={{opacity: occasion !==  "new year's" && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick("new year's")} className='occasionContainer'>
                    <img className='occasionIcon' alt="new year's icon" src={require('../../occasion-icons/new-years.png')} />
                    <h3 className='occasionName'>New Year's</h3>
                </div>
                <div style={{opacity: occasion !== "valentine's day" && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick("valentine's day")} className='occasionContainer'>
                    <img className='occasionIcon' alt='valentines day icon' src={require('../../occasion-icons/valentines-day.png')} />
                    <h3 className='occasionName'>Valentine's Day</h3>
                </div>
                <div style={{opacity: occasion !== 'wedding' && !isFirstOccasionRender && '20%'}} onClick={() => handleOccasionIconClick('wedding')} className='occasionContainer'>
                    <img className='occasionIcon' alt='wedding icon' src={require('../../occasion-icons/wedding.png')} />
                    <h3 className='occasionName'>Wedding</h3>
                </div>
            </div>
        </div>
        <input onChange={(e) => handleOccasionInputChange(e)} value={occasionInputValue} className='occasionInput' placeholder="Don't see it listed? Enter it here!" />
    </>
    );
}

export default QuestionFour;