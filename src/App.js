import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JobList from './Components/JobList';
import JobForm from './Components/JobForm';
import JobArchive from './Components/JobArchive';
import JobEdit from './Components/JobEdit';


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
            <Link to="/job_form">Add Job</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/job_list">List Job</Link>
          </li>
          <li className='text-xl px-6 hover:underline'>
            <Link to="/job_archive">Job Archive</Link>
          </li>
        </ul>
        </nav>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/job_form' element={<JobForm />} />
          <Route path='/job_list' element={<JobList />} />
          <Route path='/job_edit' element={<JobEdit />} />
          <Route path='/job_archive' element={<JobArchive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
