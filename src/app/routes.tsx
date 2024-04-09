import {Route, Routes} from 'react-router';
import {AuthPage} from './authentication/AuthPage';
import {NoPage} from '../shared/NoPage';
import React from 'react';
import {UserProfile} from './user/UserProfile';
import {UserList} from './user/UserList';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" Component={AuthPage}/>
            <Route path="/users" Component={UserList}/>
            <Route path="/users/:id" Component={UserProfile}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    )
}