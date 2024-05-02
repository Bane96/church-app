import {Route, Routes} from 'react-router';
import {NoPage} from '../shared/NoPage';
import React from 'react';
import {UserProfile} from './user/components/UserProfile';
import {UserList} from './user/components/UserList';
import {Dashboard} from './dashboard';
import {UserForm} from './user/components/UserForm';
import {HomeList} from './home/components/HomeList';
import {HomeForm} from './home/components/HomeForm';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" Component={Dashboard}/>
            <Route path="/users" Component={UserList}/>
            <Route path="/users/:id" Component={UserProfile}/>
            <Route path="/users/create" Component={UserForm}/>
            <Route path="/home" Component={HomeList}/>
            <Route path="/home/create" Component={HomeForm}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    )
}