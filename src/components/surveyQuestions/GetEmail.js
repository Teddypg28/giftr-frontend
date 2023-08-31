import React from 'react';

function GetEmail({handleFirstNameInputChange, handleEmailInputChange}) {
    return (
        <div className='emailNameContainer'>
            <input onChange={e => handleFirstNameInputChange(e)} className='nameInput' autoComplete='given-name' placeholder='First Name' />
            <input onChange={e => handleEmailInputChange(e)} className='emailInput' autoComplete='email' placeholder='Email Address' />
        </div>
    );
}

export default GetEmail;