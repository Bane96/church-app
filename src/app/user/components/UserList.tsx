import {Button, DropdownButton, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';
import {useEffect, useState} from 'react';
import {getUserListAction} from '../../../store/user/user.slice';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../store/root-reducer';
import {formatDate} from '../../../utils/functions';
import {Pagination} from '../../../shared/Pagination';
import {IUsersFilter} from '../../../store/user/types';
import {UserService} from '../service';
import {SuccessToast} from '../../../utils/toasters';
import {ConfirmationModal} from '../../../shared/ConfirmationModal';
import {UserListFilter} from './UserListFilter';
import {FilterRule} from '../../../enum/FilterRule';

export function UserList() {
    const {data: users, isLoading} = useSelector((state: StateType) => state.users.userList);
    const [filterParams, setFilterParams] = useState<IUsersFilter>({
        page: 1,
        filters: [
            {property: 'firstName', rule: FilterRule.LIKE, value: ''},
            {property: 'id', rule: FilterRule.EQUALS, value: ''},
            {property: 'gender', rule: FilterRule.EQUALS, value: ''},
            {property: 'birthdate', rule: FilterRule.EQUALS, value: undefined},
            {property: 'weddingDate', rule: FilterRule.EQUALS, value: undefined},
            {property: 'deadDate', rule: FilterRule.EQUALS, value: undefined},
        ]
    });
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState('');
    const [updateList, setUpdateList] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserListAction(filterParams));
    }, [filterParams, updateList]);

    const deleteUser = () => {
        UserService.deleteUser(userId)
            .then((response) => {
                SuccessToast('Uspjesno ste ubrisali usera')
                setUpdateList(prevState => !prevState)
            })
    }

    const showModalAction = (id: string) => {
        setShowModal(true)
        setUserId(id)
    }

    const handlePages = (updatePage: number) => {
        setFilterParams(prevState => ({...prevState, page: updatePage}))
    };

    return (
        <>
            <ConfirmationModal
                title="Da li ste sigurni da zelite da obrisete ovog korisnika?"
                description=""
                action={deleteUser}
                closeModal={() => setShowModal(false)}
                show={showModal}
            />
            <div className="d-flex justify-content-between mb-3">
                <h3 className="mb-0">Lista svih parohijana</h3>
                <Button onClick={() => navigate(InternalRoutesEnum.CREATE_USER)} variant="outline-primary">+ Kreiraj
                    novog</Button>
            </div>
            <div>
                <UserListFilter filters={filterParams} setFilterParams={setFilterParams}/>
            </div>
            <div className="card card-custom mb-5 p-4">
                <Table responsive className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                    <thead>
                    <tr className="even">
                        <th>ID</th>
                        <th>Ime i Prezime</th>
                        <th>Datum rodjenja</th>
                        <th>Pol</th>
                        <th>Mjesto/grad</th>
                        <th>Slava</th>
                        <th className="text-end">Akcija</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users?.data.map((item) => (
                        <tr key={item?.id}>
                            <td>{item?.id}</td>
                            <td>{item?.firstName} {item?.lastName}</td>
                            <td>{formatDate(item.birthdate as string) ?? '-'}</td>
                            <td>{item?.gender}</td>
                            <td>{item?.city}</td>
                            <td>{item?.christianGlory}</td>
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
                {users.totalItems > 1 &&
                    <div className="w-100">
                        <Pagination
                            page={users.page}
                            totalPages={Math.ceil(users.totalItems / users.size)}
                            handlePagination={handlePages}
                        />
                    </div>
                }
            </div>
        </>
    )
}