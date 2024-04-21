import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUsersFilter, USERS, UsersStateType, UserType} from "./types";
import {BaseModel} from '../../shared/BaseModel';

const usersInitialState: UsersStateType = {
    user: {
        data: null,
        isLoading: false,
        errors: '',
    },
    userList: {
        data: {
            totalItems: 0,
            data: [],
            page: 1,
            size: 10,
        },
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
            state.user.isLoading = false;
            state.user.data = user;
        },
        getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<any>) => {
            state.user.isLoading = false;
            state.user.errors = error;
        },
        getUserListAction: (state: UsersStateType, {payload: filterParams}: PayloadAction<IUsersFilter>) => {
            state.userList.isLoading = true;
            state.userList.errors = '';
        },
        getUserListSuccessAction: (state: UsersStateType, { payload: user }: PayloadAction<BaseModel<UserType[]>>) => {
            state.userList.isLoading = false;
            state.userList.data = user;
        },
        getUserListErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<any>) => {
            state.userList.isLoading = false;
            state.userList.errors = error;
        },
        // setUsersFilterParam: (state: UsersStateType, { payload: filterParams }: PayloadAction<IUsersFilter>) => {
        //     state.userList.filterUsers = filterParams;
        // },
    }
});
export const {
    getUserAction,
    getUserSuccessAction,
    getUserErrorAction,
    getUserListSuccessAction, getUserListErrorAction, getUserListAction
} = usersSlice.actions;
export default usersSlice.reducer;
