import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { addJob } from "./JobApplicationReducer";

function JobForm(){
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [portal, setPortal] = useState('');
    const [date, setDate] = useState('');

    const jobs = useSelector((state)=>state.jobs);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const nextId = jobs.length === 0 ? 1 : jobs[jobs.length - 1].id + 1;
        dispatch(addJob({ id: nextId, title, company, category, portal, date }));
        navigate('/job_list');
    };
    

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
                        placeholder="Enter job title"
                        onChange={event => setTitle(event.target.value)} 
                        required />
                    
                    <label>Company:</label>
                    <input className="mb-4 w-[500px] rounded-md text-md px-2" 
                        type="text" 
                        name="company" 
                        placeholder="Enter company name"
                        onChange={event => setCompany(event.target.value)} 
                        required />

                    <label>Category:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="category" 
                        onChange={event => setCategory(event.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="government" >Government</option>
                        <option value="swasta">Swasta</option>
                        <option value="freelance">Freelance</option>
                    </select>

                    <label>Job Portal:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="portal" 
                        onChange={event => setPortal(event.target.value)}>
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
                        onChange={event => setDate(event.target.value)} 
                        required />

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