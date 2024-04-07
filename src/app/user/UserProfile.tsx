import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {StateType} from '../../store/root-reducer';
import {useEffect} from 'react';
import {getUserAction} from '../../store/user/user.slice';

export function UserProfile() {
    const { data, isLoading } = useSelector((state: StateType) => state.users.user);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAction('12'));
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
                        (<div>Hi, I'm {data.firstName}</div>)
                        :
                        (<span>No user found!</span>)
            }
            {console.log(data)}
        </>
    );
};