import {UserType} from '../store/user/types';
import {requests} from '../utils/api.service';
import {USER_URL} from '../utils/endpoints';

export const UserService = {
    getUser: (id?: string): Promise<UserType> => requests.get(`${USER_URL}/${id}`)
}