import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import {ChangeEvent, ChangeEventHandler, FormEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import {StateType} from '../../../store/root-reducer';
import {UserType} from '../../../store/user/types';
import {UserService} from '../service';
import {ErrorToast, SuccessToast} from '../../../utils/toasters';
import {useNavigate} from 'react-router';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';

interface IUserFormProps {
    userForEdit?: UserType;
}

export function UserForm({userForEdit}: IUserFormProps) {
    const [user, setUser] = useState<UserType | undefined>(userForEdit);
    const navigate = useNavigate();
    const isEditScreen = !userForEdit
    const gender = ['male', 'female'];

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isNumber?: boolean) {
        const {value, name} = event.target
        setUser(prevState => ({...prevState, [name]: isNumber ? +value : value}))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        isEditScreen ? UserService.createUser(user)
                .then((response) => {
                    SuccessToast('Uspjesno ste kreirali novog usera')
                }).catch((error) => ErrorToast(error)) :
            UserService.editUser(user)
                .then((response) => {
                    SuccessToast('Uspjesno ste unijeli izmjene')
                }).catch((error) => ErrorToast(error))
    }

    return (
        <>
            <Form onSubmit={(event) => onSubmit(event)}>
                <Form as={Row} className="mb-3">
                    <Form.Group aria-required={true} as={Col}>
                        <Form.Label>Ime</Form.Label>
                        <Form.Control required={true} name="firstName" onChange={handleChange}
                                      defaultValue={user?.firstName}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Prezime</Form.Label>
                        <Form.Control required={true} name="lastName" onChange={handleChange}
                                      defaultValue={user?.lastName}/>
                    </Form.Group>
                </Form>
                <Form as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Grad/mjesto</Form.Label>
                        <Form.Control required={true} name="city" onChange={handleChange} defaultValue={user?.city}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Datum rodjenja</Form.Label>
                        <Form.Control required={true} type="date" name="birthdate" onChange={handleChange}
                                      defaultValue={user?.birthdate?.substring(0, 10)}/>
                    </Form.Group>
                </Form>
                <Form as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Pol</Form.Label>
                        <Form.Control required={true} name="gender" onChange={e => (handleChange(e))} as="select"
                                      value={user?.gender}>
                            {gender?.map((item: string) => <option selected={item === user?.gender ? true : false}
                                                                   key={item}>{item}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Broj kuce</Form.Label>
                        <Form.Control name="houseNumber" onChange={(event) => handleChange(event, true)}
                                      defaultValue={user?.houseNumber}/>
                    </Form.Group>
                </Form>
                <Form as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Datum vjencanja</Form.Label>
                        <Form.Control type="date" name="weddingDate" onChange={handleChange}
                                      defaultValue={user?.weddingDate?.substring(0, 10)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Datum smrti</Form.Label>
                        <Form.Control type="date" name="deadDate" onChange={handleChange}
                                      defaultValue={user?.deadDate?.substring(0, 10)}/>
                    </Form.Group>
                </Form>
                <Form as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Slava</Form.Label>
                        <Form.Control name="christianGlory" onChange={handleChange}
                                      defaultValue={user?.christianGlory}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Napomena/primjedba</Form.Label>
                        <Form.Control as="textarea" rows={3} name="remark" onChange={handleChange}
                                      defaultValue={user?.remark}/>
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-between">
                    <Button variant="outline-primary"
                            type="submit">{userForEdit ? 'Edit' : 'Dodajte novog usera'}</Button>
                    <Button variant="outline-secondary" onClick={() => navigate(InternalRoutesEnum.USERS)}>Nazad</Button>
                </div>
            </Form>
        </>
    )
}