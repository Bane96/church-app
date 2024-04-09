import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';

interface Values {
    username: string;
    password: string;
}

export function Login() {
    const [loading, setLoading] = useState(false);
    const initialValues = {
        username: '',
        password: '',
    };
    const [isTypePassword, setIsTypePassword] = useState(true);
    const dispatch = useDispatch();
    const enableLoading = () => {
        setLoading(true);
    };
    const disableLoading = () => {
        setLoading(false);
    };

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required(
                'Required field',
            ),
        password: Yup.string()
            .min(8, 'Minimum 8 symbols')
            .max(50, 'Maximum 50 symbols')
            .required(
                'Required field',
            ),
    });
    const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values: Values, {setSubmitting, setStatus}) => {
            enableLoading();
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
        },
    });

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 mb-3">
                    <img src="/icons/profile/id-card.png" alt="id-card icon"/>
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
                    <form onSubmit={formik.handleSubmit}>
                        {formik.status ? (
                            <div className="mb-10 alert alert-danger">
                                <div className="font-weight-normal">{formik.status}</div>
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                        <Form.Group>
                            <label htmlFor="exampleInputEmail1">Email adresa</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputPassword1">Lozinka</label>
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   name="password"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <Button className="w-100" disabled={formik.isSubmitting}
                                type="submit">
                            Prijavi se
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}