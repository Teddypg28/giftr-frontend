import React from 'react';

import { useMediaQuery } from 'react-responsive';

function QuestionThree({interests, setInterests}) {

    const handleInterestsChange = (e) => {
        setInterests(e.target.value.replace(/\n/, ""))
    }

    const tabletSize = useMediaQuery({query: '(min-width: 501px)'})
    const laptopSize = useMediaQuery({query: '(min-width: 931px)'})
    const monitorSize = useMediaQuery({query: '(min-width: 1500px)'})

    return (
        <>
            <div className='interestSubheadingContainer'>
                <h3 className={(monitorSize || laptopSize ) ? 'interestSubheading' : tabletSize ? 'interestSubheadingTablet' : 'interestSubheadingMobile'}>
                    Try to come up with at least 3 - 5 interests. Make sure to <strong>separate each one with a comma.</strong>
                </h3>
                <textarea className={(monitorSize || laptopSize ) ? 'interestTextArea' : tabletSize ? 'interestTextAreaTablet' : 'interestTextAreaMobile'} value={interests} autoCorrect='on' onChange={handleInterestsChange} placeholder={`Example: working out, bedroom decor, listening to music`}/>
            </div>
        </>
    );
}

export default QuestionThree;