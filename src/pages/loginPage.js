import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const google = () => {

}

const LoginPage = () => (
    <div className='loginPage'>
        <div className='loginBox'>
            This is login loginPage
            <br />
            <a href={'http://localhost:3000/auth/google'}>
                log in with google
            </a>
        </div>
    </div>
);

export default LoginPage;
