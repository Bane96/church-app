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

export type UsersStateType = {
    user: IUserState,
    // Later, we can add other sub-states like:
    // list,
    // create,
    // update,
    // remove
}

export const USERS = "users";
export type USERS = typeof USERS;

export const GET_USER_BY_ID = `${USERS}/getUserAction`;
export type GET_USER_BY_ID = typeof GET_USER_BY_ID;
