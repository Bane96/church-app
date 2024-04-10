import {Login} from './login/Login';

export function AuthPage() {
    return (
        <>
            <div className="ps-md-0">
                <div className="row g-0">
                    <div
                        className="d-none max-height-100vh d-md-flex col-md-4 col-lg-6 flex-column justify-content-between auth-bg-image"/>
                    <div className="col-md-8 col-lg-6 max-height-100vh overflow-auto">
                        <div className="login d-flex py-5 justify-content-center">
                            <div className="mx-auto my-auto text-center px-0">
                                <Login/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}