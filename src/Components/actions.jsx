import { type } from "@testing-library/user-event/dist/type";
import { archieve_job } from "./actionType";

const archiveJob = (jobId) => ({
    type: archieve_job, 
    payload: jobId
});

export default archiveJob;