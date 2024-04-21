import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white w-100">
                <div className="container">
                    <a className="navbar-brand" href="#">Crkveni panel</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                    {/*    <ul className="navbar-nav ml-auto">*/}
                    {/*        <li className="nav-item active">*/}
                    {/*            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">About</a>*/}
                    {/*        </li>*/}
                    {/*        /!* Add more navigation links as needed *!/*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </header>
    );
};

export default Header;
