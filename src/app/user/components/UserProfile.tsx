import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {StateType} from '../../../store/root-reducer';
import {useEffect} from 'react';
import {getUserAction} from '../../../store/user/user.slice';
import {UserForm} from './UserForm';

export function UserProfile() {
    const { data, isLoading } = useSelector((state: StateType) => state.users.user);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAction(id ?? ''));
    }, [id]);

    return(
        <>
            {
                isLoading
                    ?
                    (<span>Loading...</span>)
                    :
                    data
                        ?
                        <UserForm userForEdit={data}/>
                        :
                        (<span>No user found!</span>)
            }
        </>
    );
};