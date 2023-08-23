import React from 'react';

import '../../Survey.css'

function QuestionTwo({windowSizeQuery, interests, setInterests}) {

    const handleInterestsChange = (e) => {
        setInterests(e.target.value)
    }

    return (
        <>
            <div className='interestSubheadingContainer'>
                <h3 className='interestSubheading'>Try to think of at least 3-5 and enter them in the text box below.</h3>
                <h3 className='interestSubheading'>Make sure to <strong>separate each one with a comma.</strong></h3>
            </div>
            <textarea className={windowSizeQuery ? 'interestTextAreaMobile' : 'interestTextArea'} value={interests} onChange={handleInterestsChange} placeholder={`Example: home decor, working out, cooking`}/>
        </>
    );
}

export default QuestionTwo;