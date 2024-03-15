import React from "react";

function JobForm(){
    return(
        <div className="w-full py-16 px-6" id="job_form">
            <div>
                <h2 className="text-center text-2xl my-4">Adding Job Application</h2>
            </div>
            <div >
                <form className="flex flex-col p-6">
                    <label className="" for="job-title">Job Title:</label>
                    <input className="mb-4 w-[500px]" type="text" id="job-title" name="job-title" required />
                    
                    <label for="job-title">Company:</label>
                    <input className="mb-4 w-[500px]" type="text" id="company" name="company" required />

                    <label for="job-title">Category:</label>
                    <input className="mb-4 left-0" type="checkbox" id="goverment" name="category" value="Goverment" required /> 
                    <label for="goverment">Goverment</label><br />
                    <input className="mb-4 left-0" type="checkbox" id="swasta" name="category" value="Swasta" required />
                    <label for="swasta">Swasta</label><br />
                    
                    <label for="job-title">Date Apply:</label>
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