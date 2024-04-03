import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
       <div className="w-full my-12 py-16 px-4 bg-[#4682A9]" id="home">
           <div className="w-full mx-auto text-center">
           <h1 className="text-4xl font-bold">Welcome to Job Application Tracker</h1>
            <p className="text-medium py-4">Job hunting can sometimes feel like a daunting journey, filled with uncertainties and rejections. 
               However, it's essential to stay motivated and focused on your goals.</p>
            <div>
                <li>Each job application you submit brings you one step closer to your dream job. Stay persistent and keep applying, even if you face setbacks along the way.</li>
                <li>Use each job application as an opportunity to learn and improve. Reflect on your experiences, gather feedback, and refine your approach to increase your chances of success.</li>
                <li>Maintaining a positive mindset is key to navigating the ups and downs of job hunting. Celebrate your achievements, no matter how small, and believe in your abilities to land the right job.</li>
            </div>
            <button className="border w-[100px] mb-4 rounded-full p-2 bg-[#EAD7BB] text-black hover:bg-[#FFF2D8] mt-8">
                <Link to="addjob">Add Job</Link>
            </button>
           </div>
        </div>
    )
}

export default Home;