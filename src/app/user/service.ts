import {IUsersFilter, UserType} from '../../store/user/types';
import {requests} from '../../utils/api.service';
import {LOGIN_URL, USER_URL} from '../../utils/endpoints';
import {ILoginData, ILoginRequest} from '../authentication/types';
import {BaseModel} from '../../shared/BaseModel';

export const UserService = {
    login: (body: ILoginRequest): Promise<ILoginData> => requests.post(LOGIN_URL, body),
    getUser: (id?: string): Promise<UserType> => requests.get(`${USER_URL}/${id}`),
    getUsers: (params?: IUsersFilter): Promise<BaseModel<UserType[]>> => requests.get(`${USER_URL}/?size=10&page=${params?.page ?? 1}`),
    createUser: (body?:UserType): Promise<UserType> => requests.post(`${USER_URL}`, body ?? {}),
    editUser: (user?:UserType): Promise<UserType> => requests.put(`${USER_URL}/${user?.id}`, user ?? {}),
}