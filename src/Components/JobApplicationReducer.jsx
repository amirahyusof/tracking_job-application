import { createSlice } from "@reduxjs/toolkit";
import { dataList } from "./DummyData";


const jobSlice = createSlice({
    name:"jobs",
    initialState: dataList,
    reducers: {
        addJob: (state, action) => {
            state.push(action.payload);
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
             };
         },
 
         deleteJob: (state, action) => {
             const {id} = action.payload;
             const deleteJob = state.find(job => job.id == id);
             if(deleteJob){
               return state.filter( f => f.id !== id);
             };
         },
 
        resetJobs:(state) => {
            state = [];
        }
    

    }
})


export const {addJob, editJob, deleteJob} = jobSlice.actions;
export default jobSlice.reducer;
