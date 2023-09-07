import React from 'react';

function GetEmail({handleFirstNameInputChange, handleEmailInputChange}) {
    return (
        <div className='emailNameContainer'>
            <input onChange={e => handleFirstNameInputChange(e)} style={{marginBottom: '15px', marginTop: '-40px'}} className='input' autoComplete='given-name' placeholder='First Name' />
            <input onChange={e => handleEmailInputChange(e)} className='input' autoComplete='email' placeholder='Email Address' />
        </div>
    );
}

export default GetEmail;