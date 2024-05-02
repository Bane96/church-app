import {Button, Table} from 'react-bootstrap';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';
import {useNavigate} from 'react-router';
import {useEffect, useState} from 'react';
import {IUsersFilter} from '../../../store/user/types';
import {formatDate} from '../../../utils/functions';
import {Pagination} from '../../../shared/Pagination';
import {IHome, IHomeFilters} from '../types';
import {HomeService} from '../service';
import {FilterRule} from '../../../enum/FilterRule';
import {ErrorToast} from '../../../utils/toasters';
import {HomeFilter} from './HomeFilter';

export function HomeList() {
    const [homes, setHomes] = useState<IHome[]>([])
    const [filterParams, setFilterParams] = useState<IHomeFilters>({
        page: 1,
        perPage: 10,
        filters: [
            {property: 'name', rule: FilterRule.LIKE, value: ''},
            {property: 'id', rule: FilterRule.EQUALS, value: ''},
            {property: 'city', rule: FilterRule.LIKE, value: ''},
        ]
    });
    const [totalItems, setTotalItems] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        HomeService.getHomes(filterParams)
            .then((response) => {
                setHomes(response?.data)
                setTotalItems(response.totalItems)
            }).catch((err) => ErrorToast(err))
    }, [filterParams]);
    const handlePages = (updatePage: number) => {
        setFilterParams(prevState => ({...prevState, page: updatePage}))
    };

    const showModalAction = (id: string) => {
        setShowModal(true)
        setUserId(id)
    }

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h3 className="mb-0">Lista svih domova</h3>
                <Button onClick={() => navigate(InternalRoutesEnum.CREATE_HOME)} variant="outline-primary">+ Kreiraj
                    novi</Button>
            </div>
            <div>
                <HomeFilter setFilterParams={setFilterParams} filters={filterParams}/>
            </div>
            <div className="card card-custom mb-5 p-4">
                <Table responsive className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                    <thead>
                    <tr className="even">
                        <th>ID</th>
                        <th>Ime i Prezime</th>
                        <th>Mjesto/grad</th>
                        <th>Broj ukucana</th>
                        <th className="text-end">Akcija</th>
                    </tr>
                    </thead>
                    <tbody>
                    {homes?.map((item) => (
                        <tr key={item?.id}>
                            <td>{item?.id}</td>
                            <td>{item?.name}</td>
                            <td>{item.city} {item.street}</td>
                            <td>{item?.users?.length ?? 0}</td>
                            <td className="text-end">
                                <Button className="me-2"
                                        onClick={() => navigate(`${InternalRoutesEnum.USERS}/${item?.id}`)}
                                        variant="outline-primary" size="sm">Urediti</Button>
                                <Button onClick={() => showModalAction(item?.id ?? '')} variant="outline-danger"
                                        size="sm">Obrisite</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                {totalItems > filterParams.perPage &&
                    <div className="w-100">
                        <Pagination
                            page={filterParams.page}
                            totalPages={Math.ceil(totalItems / filterParams.perPage)}
                            handlePagination={handlePages}
                        />
                    </div>
                }
            </div>
        </>
    )
}