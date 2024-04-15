import React from 'react';
import {Route, Routes} from 'react-router';
import {Login} from './login/Login';

export function AuthRoutes() {
    return (
            <Routes>
                <Route path="/" Component={Login}/>
            </Routes>
    );
}

