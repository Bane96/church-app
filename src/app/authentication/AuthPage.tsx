import {Login} from './login/Login';

export function AuthPage() {
    return(
        <>
            <div className="ps-md-0">
                <div className="row g-0">
                    <div
                        className={`d-none max-height-100vh d-md-flex col-md-4 col-lg-6 flex-column justify-content-between auth-bg-image`}
                        style={{backgroundImage: `url('/images/crkva.png')`}}
                    >
                    </div>
                    <div className="col-md-8 col-lg-6 max-height-100vh overflow-auto">
                        <div className={`login d-flex py-5`}>
                            <div className="row">
                                <div className={`col-md-9 col-lg-10 mx-auto text-center px-0`}>
                                    <Login/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}