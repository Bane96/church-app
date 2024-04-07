import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, call } from "redux-saga/effects";
import { UserType, GET_USER_BY_ID } from "./types";
import {getUserErrorAction, getUserSuccessAction} from './user.slice';
import {UserService} from '../../app/service';

function* getUserSaga({ payload: id }: PayloadAction<string>) {
    try {
        const response: UserType = yield UserService.getUser(id)
        // const user: Promise<UserType> = yield call(UserService.getUser);

        yield put(getUserSuccessAction(response));
    } catch (error) {
        yield put(getUserErrorAction(error));
    }
}

export function* watchGetUser() {
    yield takeLatest(GET_USER_BY_ID, getUserSaga);
}
