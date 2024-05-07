import { createSlice } from "@reduxjs/toolkit";
import { dataList } from "./DummyData";

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
}


const jobSlice = createSlice({
    name:"jobs",
    initialState: dataList,
    reducers: {
        addJob: (state, action) => {
            const { id, title, company, category, portal, date} = action.payload;
            const formattedDate = formatDate(date);
            state.push({id, title, company, category, portal, date: formattedDate });
         }, 
 
        editJob: (state, action) => {
            const { id, title, company, category, portal, date} = action.payload;
            const editJobs = state.find(job => job.id == id);
            if(editJobs){
                const formattedDate = formatDate(date);
                 editJobs.title = title;
                 editJobs.company = company;
                 editJobs.category = category;
                 editJobs.portal = portal;
                 editJobs.date = formattedDate;
             };
         },
 
         deleteJob: (state, action) => {
             const {id} = action.payload;
             const deleteJob = state.find(job => job.id == id);
             if(deleteJob){
               return state.filter( f => f.id !== id);
             };
         },
 

    }
})


export const {addJob, editJob, deleteJob} = jobSlice.actions;
export default jobSlice.reducer;
