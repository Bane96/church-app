import {UserType} from '../store/user/types';
import {requests} from '../utils/api.service';
import {LOGIN_URL, USER_URL} from '../utils/endpoints';
import {ILoginData, ILoginRequest} from './authentication/types';

export const UserService = {
    login: (body: ILoginRequest): Promise<ILoginData> => requests.post(LOGIN_URL, body),
    getUser: (id?: string): Promise<UserType> => requests.get(`${USER_URL}/${id}`)
}