import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JobList from './Components/JobList';
import JobForm from './Components/JobForm';
import JobArchive from './Components/JobArchive';

const App = () => {
  return (
    <div className="w-full my-12 py-16 px-4 bg-[#4682A9]">
      <BrowserRouter>
      <nav>
      <ul className="flex flex-row list-none py-8 px-10 text-lg text-white">
          <li className='text-xl px-6 hover:underline'>
            <Link to="/home">Home</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/jobform">Adding Job</Link>
          </li>
          <li className='text-xl hover:underline'>
            <Link to="/joblist">List Job</Link>
          </li>
          <li className='text-xl hover:underline'>
            <Link to="/jobarchive">Job Archive</Link>
          </li>
        </ul>

        <Routes>
          <Route index path='/home' element={<Home />} />
          <Route path='/jobform' element={<JobForm />} />
          <Route path='/joblist' element={<JobList />} />
          <Route path='/jobarchive' element={<JobArchive />} />
        </Routes>
      </nav>
      </BrowserRouter>
    </div>
  );
};

export default App;
