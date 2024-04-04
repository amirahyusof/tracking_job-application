import React from "react";

function JobForm({ onAddJob = () =>{} }){
    const [inputs, setInputs] = React.useState([]);


    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]:value
        }));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(inputs)
        onAddJob(inputs);
    }

    return(
        <div className="w-full py-16 px-6" id="job_form">
            <div>
                <h2 className="text-center text-3xl my-4">Adding Job Application</h2>
            </div>
            <div >
                <form 
                   onSubmit={handleSubmit} 
                   className="flex flex-col p-6 text-lg border-4 border-sky-300">
                    <label>Job Title:</label>
                    <input className="mb-4 w-[500px] rounded-md px-2" type="text" name="title" id="title" onChange={handleChange} required />
                    
                    <label>Company:</label>
                    <input className="mb-4 w-[500px] rounded-md text-md px-2" type="text" name="company" id="company" onChange={handleChange} required />

                    <label>Category:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" name="category" id="category" onChange={handleChange} required>
                        <option value="goverment">Gorvenment</option>
                        <option value="swasta">Swasta</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label>Job Portal:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" name="portal" id="portal" onChange={handleChange}>
                        <option value="jobstreet">Jobstreet</option>
                        <option value="futurejob">myFutureJob</option>
                        <option value="indeed">Indeed</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="upwork">Upwork</option>
                        <option value="fiver">Fiver</option>
                        <option value="others">Others</option>
                    </select>
                    
                    <label>Date Apply:</label>
                    <input className="mb-4 w-[250px]" type="date" name="date" id="date" onChange={handleChange} required />

               <div className="text-center">
                    <button className="w-[100px] text-l rounded-md my-4 py-2 mr-4 border bg-[#91C8E4]" type="submit">Add</button>
                    <button className="w-[100px] text-l rounded-md my-4 py-2 border bg-[#91C8E4]" type="reset">Reset</button>
               </div>
               </form>
            </div>
        </div>
    )
}

export default JobForm;