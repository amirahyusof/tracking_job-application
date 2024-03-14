import React from 'react';
import Home from './Components/Home';
import JobForm from './Components/JobAddForm';
import JobList from './Components/JobApply';


const App = () => {
  return (
     <div>
      <Home />
      <JobForm />
      <JobList />
     </div>
  
  );
};
export default App;