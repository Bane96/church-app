import {useNavigate} from 'react-router';

export const NoPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex align-items-center flex-column justify-content-center h-60vh ">
            {/*<Lottie animationData={errorIcon} loop={true} style={{width: '50%'}} className="my-2"/>*/}
            <h6>Ooops! You have an error, please contact support!</h6>
            <p className="text-muted"></p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>back</button>
        </div>
    );
};

