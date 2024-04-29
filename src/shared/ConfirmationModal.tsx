import {Button, Modal} from 'react-bootstrap';

interface IConfirmationModalProps {
    title: string;
    description: string;
    htmlDescription?: any;
    iconUrl?: string;
    action?: any;
    show: boolean;
    showSuccessButton?: boolean;
    closeModal: () => void;
}

export function ConfirmationModal({
                                      action,
                                      description,
                                      title,
                                      show,
                                      closeModal,
                                      htmlDescription,
                                      iconUrl,
                                      showSuccessButton = true,
                                  }: IConfirmationModalProps) {

    return (
        <>
            <Modal show={show}
                   onHide={closeModal}
                   className="modal-dark"
                   size="sm"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered={true}
            >
                <Modal.Body>
                    <div className="m-2 mt-4 d-flex align-items-center justify-content-center flex-column">
                        {!!iconUrl?.length && <div>
                            <img src={iconUrl} className="mb-3" alt="Icon placeholder"/>
                        </div>}
                        <h4 className="text-center">{title}</h4>
                    </div>
                    <div className="m-2 text-center text-muted">
                        <p dangerouslySetInnerHTML={{__html: description}}/>
                        {htmlDescription}
                    </div>

                    <div className="text-center my-3 mb-4">
                        <Button onClick={closeModal} variant="outline-primary" className="btn-sm mx-2">
                            Ne
                        </Button>
                        {showSuccessButton && <Button variant="primary" className="btn-sm mx-2" onClick={(e) => {
                            action();
                            closeModal();
                        }}>
                            Da
                        </Button>}
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}
