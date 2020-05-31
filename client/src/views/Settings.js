import React from 'react';
import { Plasephoder } from './plaseholder';
import { Transition } from '../common/Transition/Transition';

const Settings = () => (
  <div className = 'section__plasephoder'>
    <section className="container_transition">
      <h1 className="section__title">Settings Page</h1>
      <Transition>    
        <Plasephoder />
      </Transition>
    </section>
  </div>
);
export default Settings;