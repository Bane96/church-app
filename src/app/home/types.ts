import {UserType} from '../../store/user/types';
import {IFilter} from '../../shared/model/Filter';

export interface IHome {
    id: string;
    createdAt: string;
    name: string;
    city: string;
    street: string;
    streetNumber: string;
    about: string;
    users?: UserType[];
}

export interface ICreateHome {
    name?: string;
    city?: string;
    street?: string;
    streetNumber?: string;
    about?: string;
}
export interface IHomeFilters {
    page: number;
    perPage: number;
    filters: IFilter[];
}
