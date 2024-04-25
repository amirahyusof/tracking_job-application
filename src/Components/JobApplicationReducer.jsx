import { createSlice } from "@reduxjs/toolkit";
import { dataList } from "./DummyData";

const jobSlice = createSlice({
    name:"jobs",
    initialState: dataList, 
    reducers: {
        addJob: (state, action) => {
            state.push(action.payload)
        }, 

        editJob: (state, action) => {
            const {id, title, company, category, portal, date} = action.payload;
            const editJobs = state.find(job => job.id == id);
            if(editJobs){
                editJobs.title = title;
                editJobs.company = company;
                editJobs.category = category;
                editJobs.portal = portal;
                editJobs.date = date;
            }
        }


    }
})


export const {addJob, editJob} = jobSlice.actions;
export default jobSlice.reducer;
