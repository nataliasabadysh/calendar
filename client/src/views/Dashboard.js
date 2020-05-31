import React from 'react';
import Itunes from './Itunes';
import { Notes } from '../components/NotesManagement';

const Dashboard = () => (
  <>
  <div className = 'section__plasephoder'>
    <section>
      <h1 className="section__title">Dashboard Page</h1>

      <Itunes />

    </section>
  </div>
  <hr />
  <Notes />
  <hr />
  </>
);
  
export default Dashboard;