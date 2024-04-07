import {UsersStateType} from './user/types';
import usersReducer from './user/user.slice';

export type StateType = {
    users: UsersStateType;
};

const rootReducers = {
    users: usersReducer,
};

export default rootReducers;
