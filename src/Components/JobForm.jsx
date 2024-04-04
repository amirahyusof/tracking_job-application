import React from "react";
import { useNavigate } from "react-router-dom";

function JobForm({ jobDataArray, setJobDataArray }){
    const [inputs, setInputs] = React.useState({
        title: "",
        company:"",
        category:"",
        portal: "",
        date:""
    })


    const navigate = useNavigate();


    const handleInput=(event)=>{
       const {name, value} = event.target;
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]:value
        }));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        const newJobData = {...inputs};
        setJobDataArray([...jobDataArray, newJobData]);
        setInputs({  // Reset inputs after adding the job
            title: "",
            company: "",
            category: "",
            portal: "",
            date: ""
        });

        console.log(inputs)

        navigate('/joblist');
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
                    <input className="mb-4 w-[500px] rounded-md px-2" 
                        type="text" 
                        name="title"
                        value={inputs.title} 
                        id="title" 
                        onChange={handleInput} required />
                    
                    <label>Company:</label>
                    <input className="mb-4 w-[500px] rounded-md text-md px-2" 
                        type="text" 
                        name="company" 
                        value={inputs.company} 
                        id="company" 
                        onChange={handleInput} required />

                    <label>Category:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="category" 
                        value={inputs.category}
                        id="category" 
                        onChange={handleInput} required>
                        <option value="">Select Category</option>
                        <option value="government" >Government</option>
                        <option value="swasta">Swasta</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label>Job Portal:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="portal" 
                        value={inputs.portal}
                        id="portal" 
                        onChange={handleInput}>
                        <option value="">Select Job Portal</option>
                        <option value="jobstreet">Jobstreet</option>
                        <option value="futurejob">myFutureJob</option>
                        <option value="indeed">Indeed</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="upwork">Upwork</option>
                        <option value="fiver">Fiver</option>
                        <option value="others">Others</option>
                    </select>
                    
                    <label>Date Apply:</label>
                    <input className="mb-4 w-[250px]" 
                        type="date" 
                        name="date" 
                        value={inputs.date} 
                        id="date" 
                        onChange={handleInput} required />

               <div className="text-center">
                    <button className="w-[100px] text-l rounded-md my-4 py-2 mr-4 border bg-[#91C8E4]" 
                    type="submit">
                        Add
                    </button>
                    <button className="w-[100px] text-l rounded-md my-4 py-2 border bg-[#91C8E4]" 
                    type="reset">
                        Reset
                    </button>
               </div>
               </form>
            </div>
        </div>
    )
}

export default JobForm;