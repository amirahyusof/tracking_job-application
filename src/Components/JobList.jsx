import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link }  from "react-router-dom";


function JobList(){
    const dispatch = useDispatch();
    const jobs = useSelector((state)=>state.jobs);

    



    return(
        <div className="w-full my-16 py-10 px-4 bg-[#91C8E4]" id="job_list">
            <div className="flex justify-center">
                <h2 className="my-4 text-2xl font-bold text-[#F6F4EB]">My Job Applications</h2>
            </div>
            <div>
                <table className="table-fixed mx-auto">
                    <thead>
                        <tr>
                        <th className="border border-slate-100 w-[100px] md:w-[120px]">ID</th>
                            <th className="border border-slate-100 w-[200px] md:w-[120px]">Job Title</th>
                            <th className="border border-slate-100  w-[200px] md:w-[120px]">Company</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Category</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Portal</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Date</th>
                            <th className="border border-slate-100 w-[200px] md:w-[120px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index}>
                                <td className="border border-slate-100 text-center">{job.id}</td>
                                <td className="border border-slate-100">{job.title}</td>
                                <td className="border border-slate-100">{job.company}</td>
                                <td className="border border-slate-100">{job.category}</td>
                                <td className="border border-slate-100">{job.portal}</td>
                                <td className="border border-slate-100">{job.date}</td>
                                <td className="border border-slate-100">
                                    <Link className="p-4" to={`/job_edit/${job.id}`}>Edit</Link>
                                    <button className="">Archive</button>
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