import React from 'react';

function QuestionThree({windowSizeQuery, interests, setInterests}) {

    const handleInterestsChange = (e) => {
        setInterests(e.target.value.replace(/\n/, ""))
    }

    return (
        <>
            <div className='interestSubheadingContainer'>
                <h3 className='interestSubheading'>The more specific = the better gift ideas we can come up with!</h3>
                <h3 className='interestSubheading'>Make sure to <strong>separate each one with a comma.</strong></h3>
            </div>
            <textarea className={windowSizeQuery ? 'interestTextAreaMobile' : 'interestTextArea'} value={interests} onChange={handleInterestsChange} placeholder={`Example: bedroom decor, listening to music, cooking at home`}/>
        </>
    );
}

export default QuestionThree;