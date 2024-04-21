import {Button, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';

export function UserList() {
    const navigate = useNavigate();
    return(
        <>
            <div className="d-flex justify-content-between">
            <h3>Lista svih parohijana</h3>
                <Button onClick={() => navigate(InternalRoutesEnum.CREATE_USER)} variant="outline-primary">+ Dodaj novog</Button>
            </div>
            <Table responsive>

            </Table>
        </>
    )
}