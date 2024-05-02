import {Button, Form, Row} from 'react-bootstrap';
import {gender} from '../../../shared/model/SharedArrays';
import {IUsersFilter} from '../../../store/user/types';

interface IUserListFilterProps {
    filters: IUsersFilter;
    setFilterParams: React.Dispatch<React.SetStateAction<IUsersFilter>>;
}

export function UserListFilter({setFilterParams, filters}: IUserListFilterProps) {
    const handleChanges = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        const {name, value} = event.target;
        const copyFilterArr = filters.filters
        const index = copyFilterArr.findIndex((filter) => filter.property === name);
        if (index !== -1) {
            const updatedFilters = [...copyFilterArr];
            updatedFilters[index] = {
                ...updatedFilters[index], // Keep existing properties unchanged
                value: value !== undefined ? value : '', // Update the value based on input change
            };
            setFilterParams(prevState => ({...prevState, page: 1, filters: updatedFilters}))
        }
    };


    return (
        <>
            <Form className="mb-4">
                <Row style={{rowGap: '18px'}}>
                    <div className="col-md-3 col-6">
                        <Form.Control placeholder="Id korisnika" className="form-control-solid" name="id"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Control placeholder="Ime" className="form-control-solid" name="firstName"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Control placeholder="Prezime" className="form-control-solid" name="firstName"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Control placeholder="Pol" className="form-control-solid" name="gender"
                                      onChange={handleChanges} as="select">
                            <option value="">Svi polovi</option>
                            {gender.map((type: string) => <option key={type}
                                                                  value={type}>{type}</option>)}
                        </Form.Control>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Label>Datum rodjenja</Form.Label>
                        <Form.Control type="date" placeholder="Datum rodjenja" className="form-control-solid"
                                      name="birthdate"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Label>Datum smrti</Form.Label>
                        <Form.Control type="date" placeholder="Datum smrti" className="form-control-solid"
                                      name="deadDate"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <Form.Label>Datum vjencanja</Form.Label>
                        <Form.Control type="date" placeholder="Datum vjencanja" className="form-control-solid"
                                      name="weddingDate"
                                      onChange={handleChanges}/>
                    </div>
                </Row>
                {/*<Button className="mt-2 mb-4" variant="primary" onClick={() => handleClick()}>*/}
                {/*    Search*/}
                {/*</Button>*/}
            </Form>

        </>
    )
}