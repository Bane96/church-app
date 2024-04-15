import {shallowEqual, useSelector} from 'react-redux';
import {AuthPage} from './authentication/AuthPage';
import {StateType} from '../store/root-reducer';

interface IProtectProps {
    children: JSX.Element;
}

export const ProtectedRoute = ({children}: IProtectProps) => {
    // const {user} = useSelector((state: StateType) => state.auth, shallowEqual);
    const user = (localStorage.getItem('user'));

    if (!user) {
        return (
                <AuthPage/>
        );
    }
    return children;
};
