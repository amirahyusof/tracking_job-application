import React from "react";

function JobList(){
    return(
        <div className="w-full py-16 px-6 bg-[#749BC2]" id="job_list">
            <div>
                <h2 className="text-center text-2xl my-4">My Job Applications</h2>
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

                        <tr>
                            <td className="border border-slate-100">Front-End Engineer</td>
                            <td className="border border-slate-100">SwiftLab</td>
                            <td className="border border-slate-100">Swasta</td>
                            <td className="border border-slate-100">02-01-2024</td>
                            <td className="border border-slate-100">Appending</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobList;