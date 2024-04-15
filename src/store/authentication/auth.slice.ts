import {createSlice} from '@reduxjs/toolkit';
import {Admin} from '../../app/authentication/types';

export interface IAuthState {
    token: string;
    user: Admin

}

const initialAuthState = {
    user: undefined,
    token: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        getLoginData: (state, action) => {
            const {token, user} = action.payload;
            console.log(action.payload)
            return {...state, token, user};
        }
    }
});

export const {
    getLoginData
} = authSlice.actions
