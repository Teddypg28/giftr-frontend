import React from 'react';

function GetEmail({handleFirstNameInputChange, handleEmailInputChange}) {
    return (
        <div className='emailNameContainer'>
            <input onChange={e => handleFirstNameInputChange(e)} className='nameInput' placeholder='First Name' />
            <input onChange={e => handleEmailInputChange(e)} className='emailInput' placeholder='Email Address' />
        </div>
    );
}

export default GetEmail;