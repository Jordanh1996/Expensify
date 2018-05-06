import React from 'react';

const GoogleButton = () => (
    <a
        href={`${process.env.URL}/auth/google`}
        className='googleButton'
    >
        <div className='googleButton-inner'>
            <img
                src='/images/google.png'
                className='google-image'
            />
            <div className='google-text'>
                Sign in with Google
            </div>
        </div>
    </a>
);

export default GoogleButton;
