import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERS, UsersStateType, UserType } from "./types";

const usersInitialState: UsersStateType = {
    user: {
        data: null,
        isLoading: false,
        errors: '',
    }
}

export const usersSlice = createSlice({
    name: USERS,
    initialState: usersInitialState,
    reducers: {
        /* This action will trigger our saga middleware
           and set the loader to true and reset error message.
        */
        getUserAction: (state: UsersStateType, { payload: id }: PayloadAction<string>) => {
            state.user.isLoading = true;
            state.user.errors = '';
        },
        getUserSuccessAction: (state: UsersStateType, { payload: user }: PayloadAction<UserType>) => {
            // console.log('usao sam ovdje', user)
            state.user.isLoading = false;
            state.user.data = user;
            console.log('usao sam ovdje', state.user.data)
        },
        getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<any>) => {
            state.user.isLoading = false;
            state.user.errors = error;
        },
    }
});
export const {
    getUserAction,
    getUserSuccessAction,
    getUserErrorAction
} = usersSlice.actions;
export default usersSlice.reducer;
