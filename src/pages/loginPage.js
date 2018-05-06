import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GoogleButton from '../components/buttons/googleButton';
import GithubButton from '../components/buttons/githubButton';


const LoginPage = () => (
    <div className='loginPage'>
        <div className='loginBox'>
            <GoogleButton />
            <br />
            <GithubButton />
        </div>
    </div >
);

export default LoginPage;
