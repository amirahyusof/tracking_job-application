import React from "react";

function JobList({ jobApplications }){
    console.log(jobApplications);

    return(
        <div className="w-full my-16 py-10 px-4 bg-[#91C8E4]" id="job_list">
            <div className="flex justify-center">
                <h2 className="my-4 text-2xl font-bold text-[#F6F4EB]">My Job Applications</h2>
            </div>
            <div>
                <table className="table-fixed mx-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-100 w-[200px] md:w-[120px]" >Job Title</th>
                            <th className="border border-slate-100  w-[200px] md:w-[120px]">Company</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Category</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Date</th>
                            <th className="border border-slate-100 w-[100px] md:w-[120px]">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { jobApplications.map( (job,index) =>
                            <tr key={index}>
                                <td className="border border-slate-100">{job.title}</td>
                                <td className="border border-slate-100">{job.company}</td>
                                <td className="border border-slate-100">{job.category}</td>
                                <td className="border border-slate-100">{job.portal}</td>
                                <td className="border border-slate-100">{job.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobList;