import React from 'react';
import {Nav} from 'react-bootstrap';
import {InternalRoutesEnum} from '../../enum/InternalRoutesEnum';
import {useNavigate} from 'react-router';

const LeftMenu = () => {
    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route)
    }
    return (
        <aside className="left-menu">
            <Nav defaultActiveKey="link-1" className="flex-column">
                <Nav.Link onClick={() => handleClick('/')}>Pocetna</Nav.Link>
                <Nav.Link onClick={() => handleClick(InternalRoutesEnum.USERS)} eventKey="/users">Users</Nav.Link>
                <Nav.Link onClick={() => handleClick(InternalRoutesEnum.HOME)} eventKey="link-2">Domovi</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </aside>
    );
};

export default LeftMenu;
