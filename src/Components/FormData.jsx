import React, {useState} from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function FormData(){
    const [data, setData] = useState([]);

    const handleAddJob = (jobData) => {
        setData([...data, jobData])
    };


    return (
        <div>
            <JobForm onAddJob={handleAddJob} />
            <JobList jobApplications={data} />
        </div>

    );
}

export default FormData;