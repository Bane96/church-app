import LeftMenu from './LeftSideMeny';
import Header from './Header';
import Container from './Container';

interface ILayoutProps {
    children: JSX.Element;
}
export const Layout = ({children}: ILayoutProps) => {
    return (
        <body>
            <Header />
            <div className="main-content">
                <LeftMenu />
                <Container>
                    {children}
                </Container>
            </div>
        </body>
    );
};