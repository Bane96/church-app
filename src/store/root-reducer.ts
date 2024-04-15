import {UsersStateType} from './user/types';
import usersReducer from './user/user.slice';
import {authSlice, IAuthState} from './authentication/auth.slice';

export type StateType = {
    auth: IAuthState
    users: UsersStateType;
};

const rootReducers = {
    users: usersReducer,
    auth: authSlice.reducer
};

export default rootReducers;
