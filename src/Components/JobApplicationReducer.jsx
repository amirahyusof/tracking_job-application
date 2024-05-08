import { createSlice } from "@reduxjs/toolkit";
import { dataList } from "./DummyData";

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
}


const jobSlice = createSlice({
    name:"jobs",
    initialState: dataList,
    reducers: {
        addJob: (state, action) => {
            const { id, title, company, category, portal, date} = action.payload;
            const formattedDate = formatDate(date);
            state.push({ id, title, company, category, portal, date: formattedDate });
         }, 
 
        editJob: (state, action) => {
            const { id, title, company, category, portal, date} = action.payload;
            const jobToEdit = state.find(job => job.id === id);
            if(jobToEdit){
                const formattedDate = formatDate(date);
                jobToEdit.title = title;
                jobToEdit.company = company;
                jobToEdit.category = category;
                jobToEdit.portal = portal;
                jobToEdit.date = formattedDate;
            };
         },
 
         deleteJob: (state, action) => {
             const {id} = action.payload;
             return state.filter(job => job.id !== id);
            
         },
 

    }
})


export const {addJob, editJob, deleteJob} = jobSlice.actions;
export default jobSlice.reducer;
