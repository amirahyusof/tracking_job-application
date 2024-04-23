// JobApplicationContainer.js

import React, { useState } from 'react';
import JobForm from './Components/JobForm';
import JobList from './Components/JobList';
import JobApplicationSystem from './Components/JobApplicationReducer';

function JobApplicationContainer() {
  const [jobDataArray, setJobDataArray] = useState([]);

  return (
    <div>
      <JobApplicationSystem jobDataArray={jobDataArray} />
      <JobForm jobDataArray={jobDataArray} setJobDataArray={setJobDataArray} />
      <JobList jobDataArray={jobDataArray} />
    </div>
  );
}

export default JobApplicationContainer;
