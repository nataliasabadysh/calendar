// Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { Navigation } from './components/Navigation';
import { routers, routers_nav, router_root, AsyncNotFound } from './utils/routes';
import { Bar } from './components/Bar';
import { useSetTimeout } from './hooks/useSetTimeout';

const { ClickJSX } = useSetTimeout();

function App() {
  return (
    <div className='wrapper'> 
      <Navigation />
      <ClickJSX/>
        <div className="main_content"> 
          <Bar/>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              { routers.map(route => <Route key={route.path} {...route} /> ) }
              { routers_nav.map(route => <Route key={route.path} {...route} /> ) }
              { router_root.map(route => <Route key={route.path} {...route} /> ) }
              <Route component={AsyncNotFound} />
            </Switch>
          </Suspense>          
        </div>
    </div>
  );
}
export default App;