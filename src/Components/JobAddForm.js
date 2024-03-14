import React from "react";

function JobForm(){
    return(
        <div>
            <div>
                <h2>Add Job Application</h2>
            </div>
            <div>
                <form>
                    <label for="job-title">Job Title:</label>
                    <input type="text" id="job-title" name="job-title" required></input>
                    
                    <label for="job-title">Company:</label>
                    <input type="text" id="company" name="company" required></input>

                    <label for="job-title">Category:</label>
                    <input type="checkbox" id="goverment" name="category" value="Kerajaan" required></input>
                    <input type="checkbox" id="swasta" name="category" value="Swasta" required></input>
                    
                    <label for="job-title">Date:</label>
                    <input type="date" id="date-apply" name="date-apply" required></input>

                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>


                </form>
            </div>
        </div>
    )
}

export default JobForm;