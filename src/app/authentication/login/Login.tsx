import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {ILoginRequest} from '../types';
import {UserService} from '../../service';
import {getLoginData} from '../../../store/authentication/auth.slice';
import {useLocation, useNavigate} from 'react-router';
import {refreshPage} from '../../../utils/functions';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';

export function Login() {
    const [state, setState] = useState<ILoginRequest>({
        username: 'banedragic17@gmail.com',
        password: 'Bane12345!',
    })
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        UserService.login(state)
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/')
                refreshPage();
                dispatch(getLoginData(data));
            })
            .catch((e) => {
                console.log(e);
            });

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setState(prevState => ({...prevState, [name]: value}))
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 mb-3">
                    <img height="100" src="/images/pravoslavni-krst.png" alt="pravoslavni-krst"/>
                </div>
                <div className="col-12">
                    <h3 className="font-weight-bold">
                        Prijavite se
                    </h3>
                    <p className="font-weight-normal text-black-50 mb-4">
                        Unesite korisničko ime i lozinku
                    </p>
                </div>
                <div className="col-md-8">
                    <form onSubmit={onSubmit}>
                        <Form.Group className="mb-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Korisničko ime"
                                name="username"
                                value={state.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input type="password"
                                   className="form-control"
                                   minLength={8}
                                   placeholder="Lozinka"
                                   name="password"
                                   value={state.password}
                                   onChange={handleChange}
                            />
                        </Form.Group>
                        <Button className="w-100 mt-4"
                                type="submit">
                            Prijavi se
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}