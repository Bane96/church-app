import React from 'react';
import {AppRoutes} from './routes';
import {Layout} from './layout/Layout';
import {ProtectedRoute} from './ProtectedRoute';

function App() {

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