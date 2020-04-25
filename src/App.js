// Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { Navigation } from './components/Navigation';
import { routers, routers_nav } from './utils/routes';
import { Bar } from './components/Bar';

function App() {
  return (
    <div className="wrapper"> 
      <Navigation />
      <div className="main_content"> 
        <Bar/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            { routers.map(route => <Route key={route.path} {...route} /> ) }
            { routers_nav.map(route => <Route key={route.path} {...route} /> ) }
          </Switch>
        </Suspense>          
      </div>
    </div>
  );
}

export default App;
