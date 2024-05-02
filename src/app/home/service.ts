import {requests} from '../../utils/api.service';
import {HOME_URL} from '../../utils/endpoints';
import {BaseModel} from '../../shared/model/BaseModel';
import {IHome, IHomeFilters} from './types';
import {constructFilterString} from '../../utils/functions';

export const HomeService = {
    getHomes: (params: IHomeFilters): Promise<BaseModel<IHome[]>> => requests.get(`${HOME_URL}/?size=${params?.perPage}&page=${params?.page ?? 1}&filter=${constructFilterString(params.filters)}`),
    getHome: (id?: string): Promise<IHome> => requests.get(`${HOME_URL}/${id}`),
    createHome: (body?:IHome) => requests.post(`${HOME_URL}`, body ?? {}),
}