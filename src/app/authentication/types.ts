import {AdminRoleEnum} from '../../enum/AdminRoleEnum';

export interface ILoginRequest {
    username: string;
    password: string;
}

export interface ILoginData {
    token: string;
    user: Admin
}

export interface Admin {
    id: number;
    role: AdminRoleEnum;
    createdAt: string;
    email: string;
}
