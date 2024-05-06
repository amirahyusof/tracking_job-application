import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJob } from "./JobApplicationReducer";

function JobEdit(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    
    const jobs = useSelector((state) => state.jobs)
    const existJob = jobs.filter(f => f.id == id);
    const {title, company,category, portal, date} = existJob[0];
    const [editTitle, setTitle] = useState(title);
    const [editCompany, setCompany] = useState(company);
    const [editCategory, setCategory] = useState(category);
    const [editPortal, setPortal] = useState(portal);
    const [editDate, setDate] = useState(date);

    const handleSave = (event) => {
        event.preventDefault();
        dispatch(editJob({
            title: editTitle,
            company: editCategory,
            category: editCategory,
            portal: editPortal,
            date: editDate
        }))
        navigate('/job_list')
    }



    return(
        <div className="w-full py-16 px-6" id="job_edit">
            <div>
                <h2 className="text-center text-3xl my-4">Edit Job Application</h2>
            </div>
            <div >
                <form 
                   onSubmit={handleSave}
                   className="flex flex-col p-6 text-lg border-4 border-sky-300">
                    <label>Job Title:</label>
                    <input className="mb-4 w-[500px] rounded-md px-2" 
                        type="text" 
                        name="title"
                        value={editTitle}
                        placeholder="Enter job title"
                        onChange={event => setTitle(event.target.value)} 
                        required />
                    
                    <label>Company:</label>
                    <input className="mb-4 w-[500px] rounded-md text-md px-2" 
                        type="text" 
                        name="company" 
                        value={editCompany}
                        placeholder="Enter company name"
                        onChange={event => setCompany(event.target.value)} 
                        required />

                    <label>Category:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="category" 
                        value={editCategory}
                        onChange={event => setCategory(event.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="Government" >Government</option>
                        <option value="Swasta">Swasta</option>
                        <option value="Freelance">Freelance</option>
                    </select>

                    <label>Job Portal:</label>
                    <select className="mb-4 w-[250px] rounded-md text-md px-2" 
                        name="portal" 
                        value={editPortal}
                        onChange={event => setPortal(event.target.value)}>
                        <option value="">Select Job Portal</option>
                        <option value="Jobstreet">Jobstreet</option>
                        <option value="MyFuturejob">MyFutureJob</option>
                        <option value="Indeed">Indeed</option>
                        <option value="Linkedin">LinkedIn</option>
                        <option value="Upwork">Upwork</option>
                        <option value="Fiver">Fiver</option>
                        <option value="Others">Others</option>
                    </select>
                    
                    <label>Date Apply:</label>
                    <input className="mb-4 w-[250px]" 
                        type="date" 
                        name="date" 
                        pattern="\d{2}-\d{2}-\d{4}"
                        value={editDate}
                        onChange={event => setDate(event.target.value)} 
                        required />

                    <div className="text-center">
                    <button className="w-[100px] text-l rounded-md my-4 py-2 mr-4 border bg-[#91C8E4]" 
                    type="submits">
                        Update
                    </button>
                    </div>
               </form>
            </div>
        </div>
    )
}

export default JobEdit;