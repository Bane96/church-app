import {BaseModel} from '../../shared/model/BaseModel';
import {IFilter, IFilterComponentProps} from '../../shared/model/Filter';

export type UserType = {
    id?: string;
    firstName?: string;
    lastName?: string;
    birthdate?: string;
    christianGlory?: string;
    city?: string;
    deadDate?: string;
    weddingDate?: string;
    createdAt?: string;
    updatedAt?: string;
    gender?: string;
    houseNumber?: number;
    remark?: string;
}

export type IUserState = {
    data: UserType | null;
    isLoading: boolean;
    errors: string;
}
export type IUserListState = {
    data: BaseModel<UserType[]>;
    isLoading: boolean;
    errors: string;
}

export type UsersStateType = {
    user: IUserState,
    userList: IUserListState
    // Later, we can add other sub-states like:
    // create,
    // update,
    // remove
}

export interface IUsersFilter {
    page: number;
    filters: IFilter[];
}

export const USERS = "users";
export type USERS = typeof USERS;

export const GET_USER_BY_ID = `${USERS}/getUserAction`;
export type GET_USER_BY_ID = typeof GET_USER_BY_ID;

export const GET_USER_LIST = `${USERS}/getUserListAction`;
export type GET_USER_LIST = typeof GET_USER_BY_ID;
