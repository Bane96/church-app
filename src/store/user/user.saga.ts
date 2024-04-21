import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, call } from "redux-saga/effects";
import {UserType, GET_USER_BY_ID, GET_USER_LIST, IUsersFilter} from "./types";
import {getUserErrorAction, getUserListErrorAction, getUserListSuccessAction, getUserSuccessAction} from './user.slice';
import {UserService} from '../../app/user/service';
import {BaseModel} from '../../shared/BaseModel';

function* getUserSaga({ payload: id }: PayloadAction<string>) {
    try {
        const response: UserType = yield UserService.getUser(id)
        // const user: Promise<UserType> = yield call(UserService.getUser);

        yield put(getUserSuccessAction(response));
    } catch (error) {
        yield put(getUserErrorAction(error));
    }
}
function* getUserListSaga({payload: filterParams}: PayloadAction<IUsersFilter>) {
    try {
        // const response: UserType[] = yield UserService.getUsers()
        const users: BaseModel<UserType[]> = yield UserService.getUsers(filterParams);

        yield put(getUserListSuccessAction(users));
    } catch (error) {
        yield put(getUserListErrorAction(error));
    }
}

export function* watchGetUser() {
    yield takeLatest(GET_USER_BY_ID, getUserSaga);
}
export function* watchGetUsers() {
    yield takeLatest(GET_USER_LIST, getUserListSaga);
}
