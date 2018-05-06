import React from 'react';

const GithubButton = () => (
    <a
        href={`${process.env.URL}/auth/github`}
        className='githubButton'
    >
        <div className='githubButton-inner'>
            <img
                src='/images/github.svg'
                className='github-image'
            />
            <div className='github-text'>
                Sign in with Github
            </div>
        </div>
    </a>
);

export default GithubButton;
