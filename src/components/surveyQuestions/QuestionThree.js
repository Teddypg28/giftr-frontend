import React from 'react';

function QuestionThree({windowSizeQuery, interests, setInterests}) {

    const handleInterestsChange = (e) => {
        setInterests(e.target.value.replace(/\n/, ""))
    }

    return (
        <>
            <div className='interestSubheadingContainer' style={{width: windowSizeQuery && '395px'}}>
                <h3 className='interestSubheading'>
                    Try to come up with at least 3 - 5 interests, or more if you can. Make sure to <strong>separate each one with a comma.</strong>
                </h3>
            </div>
            <textarea className={windowSizeQuery ? 'interestTextAreaMobile' : 'interestTextArea'} value={interests} autoCorrect='on' onChange={handleInterestsChange} placeholder={`Example: working out, bedroom decor, home appliances`}/>
        </>
    );
}

export default QuestionThree;