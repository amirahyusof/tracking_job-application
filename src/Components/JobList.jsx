import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link }  from "react-router-dom";
import { addJob, deleteJob } from "./JobApplicationReducer";


function JobList(){
    const dispatch = useDispatch();
    const jobs = useSelector((state)=>state.jobs);

    useEffect( ()=> {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
     savedJobs.forEach(job => {
        dispatch(addJob(job));
     })
    }, [dispatch]);

    
    const handleDelete = (id) => {
        dispatch(deleteJob({id}));
        const updatedJobs = jobs.filter(job => job.id !== id);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    }


    return(
        <div className="w-full my-16 py-10 px-4 bg-[#91C8E4]" id="job_list">
            <div className="flex justify-center">
                <h2 className="my-4 text-2xl font-bold text-[#0F1035]">My Job Applications</h2>
            </div>
            <div>
                <table className="table-fixed mx-auto">
                    <thead>
                        <tr>
                        <th className="border border-slate-100 w-[60px] md:w-[60px]">ID</th>
                            <th className="border border-slate-100 w-[200px] md:w-[210px]">Job Title</th>
                            <th className="border border-slate-100  w-[200px] md:w-[200px]">Company</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Category</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Portal</th>
                            <th className="border border-slate-100 w-[140px] lg:w-[150px]">Date</th>
                            <th className="border border-slate-100 w-[180px] lg:w-[200px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index}>
                                <td className="border border-slate-100 text-center">{job.id}</td>
                                <td className="border border-slate-100 px-2">{job.title}</td>
                                <td className="border border-slate-100 px-2">{job.company}</td>
                                <td className="border border-slate-100 text-center">{job.category}</td>
                                <td className="border border-slate-100 text-center">{job.portal}</td>
                                <td className="border border-slate-100 text-center">{job.date}</td>
                                <td className="border border-slate-100 text-center">
                                    <Link  className="border w-[100px] p-2 md:mx-2 rounded-md bg-[#365486] text-[#DCF2F1] hover:bg-[#0F1035]" to={`/job_edit/${job.id}`}>Edit</Link>
                                    <button  className="border w-[80px] p-2 rounded-md bg-[#A91D3A] text-[#DCF2F1] hover:bg-[#F6F5F2] hover:text-black" onClick={() => handleDelete(job.id)}>Delete</button>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobList;