import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Login(){
    return <>
    <Helmet>
        <title>Login</title>
        <meta name='description' content='This is the login page'/>
        <link rel='canonical' href='/login'/>
    </Helmet>
    <h1>Login</h1>
    </>
}