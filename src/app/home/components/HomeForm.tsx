import {Button, Col, Form, Row} from 'react-bootstrap';
import {FormEvent, useState} from 'react';
import {ICreateHome} from '../types';
import {InternalRoutesEnum} from '../../../enum/InternalRoutesEnum';
import {useNavigate} from 'react-router';
import {HomeService} from '../service';
import {ErrorToast, SuccessToast} from '../../../utils/toasters';

export function HomeForm() {
    const [home, setHome] = useState<ICreateHome | undefined>();
    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isNumber?: boolean) {
        const {value, name} = event.target
        setHome(prevState => ({...prevState, [name]: isNumber ? +value : value}))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        HomeService.createHome(home)
            .then((response) => {
                SuccessToast('Uspjesno ste kreirali novi dom')
                navigate(InternalRoutesEnum.HOME)
            }).catch((error) => ErrorToast(error));
    }

    return (
        <>
            <Form onSubmit={(event) => onSubmit(event)}>
                <Form as={Row} className="mb-3">
                    <Form.Group aria-required={true} as={Col}>
                        <Form.Label>Ime</Form.Label>
                        <Form.Control required={true} name="name" onChange={handleChange}
                                      defaultValue={home?.name}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Grad/mjesto</Form.Label>
                        <Form.Control required={true} name="city" onChange={handleChange} defaultValue={home?.city}/>
                    </Form.Group>
                </Form>
                <Form as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Ulica</Form.Label>
                        <Form.Control required={true} name="street" onChange={handleChange}
                                      defaultValue={home?.street}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Broj ulice</Form.Label>
                        <Form.Control required={true} name="streetNumber" onChange={handleChange}
                                      defaultValue={home?.streetNumber}/>
                    </Form.Group>
                </Form>
                <Form as={Row}>
                    <Form.Group as={Col}>
                        <Form.Label>Dodatne informacije</Form.Label>
                        <Form.Control as="textarea" rows={3} name="about" onChange={handleChange}
                                      defaultValue={home?.about}/>
                    </Form.Group>
                </Form>

                <div className="d-flex justify-content-between">
                    <Button variant="outline-primary"
                            type="submit">{'Dodajte novi dom'}</Button>
                    <Button variant="outline-secondary" onClick={() => navigate(InternalRoutesEnum.HOME)}>Nazad</Button>
                </div>

            </Form>
        </>
    )
}