import React from "react";

function JobForm(){
    return(
        <div className="w-full py-16 px-6" id="job_form">
            <div>
                <h2 className="text-center text-3xl my-4">Adding Job Application</h2>
            </div>
            <div >
                <form className="flex flex-col p-6 text-lg border-4 border-sky-300">
                    <label className="" for="job-title">Job Title:</label>
                    <input className="mb-4 w-[500px] rounded-md px-2" type="text" id="job-title" name="job-title" required />
                    
                    <label for="job-title">Company:</label>
                    <input className="mb-4 w-[500px] rounded-md text-md px-2" type="text" id="company" name="company" required />

                    <label for="job-category">Category:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" name="job-category" id="category">
                        <option value="goverment">Gorvenment</option>
                        <option value="swasta">Swasta</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label for="job-portal">Job Portal:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" name="job-portal" id="portal">
                        <option value="jobstreet">Jobstreet</option>
                        <option value="futurejob">myFutureJob</option>
                        <option value="indeed">Indeed</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="upwork">Upwork</option>
                        <option value="fiver">Fiver</option>
                        <option value="others">Others</option>
                    </select>
                    
                    <label for="date">Date Apply:</label>
                    <input className="mb-4 w-[250px]" type="date" id="date-apply" name="date-apply" required />


                </form>
               <div className="text-center">
                    <button className="w-[100px] text-l rounded-md my-4 py-2 mr-4 border bg-[#91C8E4]" type="submit">Add</button>
                    <button className="w-[100px] text-l rounded-md my-4 py-2 border bg-[#91C8E4]" type="reset">Reset</button>
               </div>
            </div>
        </div>
    )
}

export default JobForm;