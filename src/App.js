import React from 'react';
import Home from './Components/Home';
import JobForm from './Components/JobAddForm';
import JobList from './Components/JobList';
import JobArchieve from './Components/JobArchieve';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
     <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="add">Adding Job</Link>
          </li>
          <li>
            <Link to="list">Job Listing</Link>
          </li>
          <li>
            <Link to="archieve">Job Archieve</Link>
          </li>
        </ul>
      
      <Routes>
        <Route index path='/home' element={<Home />} />
        <Route index path='/addjob' element={<JobForm />} />
        <Route index path='/joblist' element={<JobList />} />
        <Route index path='/jobarchieve' element={<JobArchieve />} />

      </Routes>
      </nav>
      </BrowserRouter>
      <Home />
     </div>
  
  );
};
export default App;