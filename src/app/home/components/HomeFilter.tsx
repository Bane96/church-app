import {IUsersFilter} from '../../../store/user/types';
import {IHomeFilters} from '../types';
import {Form, Row} from 'react-bootstrap';

interface IUserListFilterProps {
    filters: IHomeFilters;
    setFilterParams: React.Dispatch<React.SetStateAction<IHomeFilters>>;
}

export function HomeFilter({filters, setFilterParams}: IUserListFilterProps) {
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
                    <div className="col-md-4 col-6">
                        <Form.Control placeholder="Id korisnika" className="form-control-solid" name="id"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-4 col-6">
                        <Form.Control placeholder="Ime" className="form-control-solid" name="name"
                                      onChange={handleChanges}/>
                    </div>
                    <div className="col-md-4 col-6">
                        <Form.Control placeholder="Mjesto/grad" className="form-control-solid" name="city"
                                      onChange={handleChanges}/>
                    </div>
                </Row>
            </Form>
        </>
    )
}