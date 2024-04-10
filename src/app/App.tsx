import React, {useEffect} from 'react';
import {AppRoutes} from './routes';
import {Layout} from './Layout';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="App" >
        <AppRoutes/>
      {/*<Layout>*/}
      {/*</Layout>*/}
    </div>
  );
}

export default App;