import React, {useEffect} from 'react';
import {AppRoutes} from './routes';
import {Layout} from './Layout';
import {ProtectedRoute} from './ProtectedRoute';

function App() {
    useEffect(() => {
    }, []);

    return (
        <div className="App">
            <ProtectedRoute>
                <Layout>
                    <AppRoutes/>
                </Layout>
            </ProtectedRoute>
        </div>
    );
}

export default App;