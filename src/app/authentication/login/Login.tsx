import React, {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';

interface ILogin {
    username: string;
    password: string;
}

export function Login() {
    const [state, setState] = useState<ILogin>({
        password: '',
        username: ''
    })
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const enableLoading = () => {
        setLoading(true);
    };
    const disableLoading = () => {
        setLoading(false);
    };

    function onSubmit() {
        // AuthService.login(values.username, values.password)
        //     .then((data) => {
        //         if (data.userData.userType === 'internal') { // if someone try to login with office acc / internal on app
        //             ErrorToast({response: {data: {message: 'This is internal user, please use Admin panel!'}}})
        //         } else {
        //             localStorage.setItem('token', JSON.stringify(data.token));
        //             localStorage.setItem('refreshToken', data.refreshToken);
        //             localStorage.setItem('appVersion', data?.userData.appVersion);
        //             gtmService('login');
        //             disableLoading();
        //             dispatch(actions.login(data.token));
        //             dispatch(actions.setUser(data.userData));
        //         }
        //     })
        //     .catch((e) => {
        //         disableLoading();
        //         setSubmitting(false);
        //         setStatus('The login detail is incorrect');
        //         ErrorToast(e);
        //     });

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