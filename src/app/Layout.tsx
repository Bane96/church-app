import {Container} from 'react-bootstrap';

interface ILayoutProps {
    children: JSX.Element;
}
export function Layout({children}: ILayoutProps) {
    return (
        <>
            <Container fluid className="d-flex pl-0 pr-0">
                {children}
            </Container>
        </>
    )
}