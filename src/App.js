import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JobList from './Components/JobList';
import JobForm from './Components/JobForm';
import JobArchive from './Components/JobArchive';
import JobApplicationContainer from './FormData';


const App = () => {
  return (
    <div className="w-full py-8 bg-[#4682A9]">
      <BrowserRouter>
      <nav className="flex justify-center items-center">
      <ul className="flex flex-row space-x-4 list-none  text-lg text-white">
          <li className='text-xl px-6 hover:underline'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/jobform">Add Job</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/joblist">List Job</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/jobarchive">Job Archive</Link>
          </li>
        </ul>
        </nav>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/jobform' element={<JobForm />} />
          <Route path='/joblist' element={<JobList />} />
          <Route path='/jobarchive' element={<JobArchive />} />
        </Routes>
      </BrowserRouter>

      <JobApplicationContainer />
    </div>
  );
};

export default App;
