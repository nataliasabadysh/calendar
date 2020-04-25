// Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { Navigation } from './components/Navigation';
import { routers } from './utils/routes';

function App() {
  return (
    <div className="wrapper"> 
    
     <Navigation />

     <div className="main_content">
      <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                {routers.map(route => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
