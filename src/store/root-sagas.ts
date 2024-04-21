import { all, fork } from "redux-saga/effects";
import {watchGetUser, watchGetUsers} from './user/user.saga';

const rootSaga = function* () {
    yield all([
        fork(watchGetUser),
        fork(watchGetUsers),
    ]);
};

export default rootSaga;
