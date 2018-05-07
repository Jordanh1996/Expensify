import React from 'react';

const LinkedinButton = () => (
    <a
        href={`${process.env.URL}/auth/linkedin`}
        className='linkedinButton'
    >
        <div className='linkedinButton-inner'>
            <p className='linkedin-icon'>
                in
            </p>
            <div className='linkedin-text'>
                Sign in with Linkedin
            </div>
        </div>
    </a>
);

export default LinkedinButton;
