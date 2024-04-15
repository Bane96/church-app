import {Route, Routes} from 'react-router';
import {NoPage} from '../shared/NoPage';
import React from 'react';
import {UserProfile} from './user/UserProfile';
import {UserList} from './user/UserList';
import {Dashboard} from './dashboard';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" Component={Dashboard}/>
            <Route path="/users" Component={UserList}/>
            <Route path="/users/:id" Component={UserProfile}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    )
}