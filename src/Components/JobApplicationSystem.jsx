import React, { useState } from "react";
import JobForm from "./JobForm"
import JobList from "./JobList";

function JobApplicationSystem() {
    const [jobDataArray, setJobDataArray] = useState([]);

    return (
        <div>
            <h1>Job Application System</h1>
            <JobForm jobDataArray={jobDataArray} setJobDataArray={setJobDataArray} />
            <JobList jobDataArray={jobDataArray} />
        </div>
    );
}

export default JobApplicationSystem;
