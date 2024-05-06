import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link }  from "react-router-dom";
import { deleteJob } from "./JobApplicationReducer";


function JobList(){
    const dispatch = useDispatch();
    const jobs = useSelector((state)=>state.jobs);

    
    const handleDelete = (id) => {
        dispatch(deleteJob({id:id}));
    }


    return(
        <div className="w-full my-16 py-10 px-4 bg-[#91C8E4]" id="job_list">
            <div className="flex justify-center">
                <h2 className="my-4 text-2xl font-bold text-[#F6F4EB]">My Job Applications</h2>
            </div>
            <div>
                <table className="table-fixed mx-auto">
                    <thead>
                        <tr>
                        <th className="border border-slate-100 w-[60px] md:w-[120px]">ID</th>
                            <th className="border border-slate-100 w-[200px] md:w-[120px]">Job Title</th>
                            <th className="border border-slate-100  w-[200px] md:w-[120px]">Company</th>
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
                                <td className="border border-slate-100">{job.title}</td>
                                <td className="border border-slate-100">{job.company}</td>
                                <td className="border border-slate-100 text-center">{job.category}</td>
                                <td className="border border-slate-100 text-center">{job.portal}</td>
                                <td className="border border-slate-100 text-center">{job.date}</td>
                                <td className="border border-slate-100 text-center">
                                    <Link className="p-4" to={`/job_edit/${job.id}`}>Edit</Link>
                                    <button className="p-2" onClick={() => handleDelete(job.id)}>Delete</button>
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