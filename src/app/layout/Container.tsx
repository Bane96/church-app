import React from 'react';

interface IContainerProps {
    children: JSX.Element
}
const Container = ({ children }: IContainerProps) => {
    return (
        <div className="container p-md-4">
            {children}
        </div>
    );
};

export default Container;
