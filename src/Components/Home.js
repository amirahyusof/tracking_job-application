import React from "react";

function Home(){
    return(
        <div className="w-full py-16 px-4 mx-auto" id="home">
           <div>
           <h1 className="text-2xl font-bold py-2">Welcome to Job Application Tracker</h1>
            <p>Job hunting can sometimes feel like a daunting journey, filled with uncertainties and rejections. 
               However, it's essential to stay motivated and focused on your goals.</p>
            <div>
                <li>Each job application you submit brings you one step closer to your dream job. Stay persistent and keep applying, even if you face setbacks along the way.</li>
                <li>Use each job application as an opportunity to learn and improve. Reflect on your experiences, gather feedback, and refine your approach to increase your chances of success.</li>
                <li>Maintaining a positive mindset is key to navigating the ups and downs of job hunting. Celebrate your achievements, no matter how small, and believe in your abilities to land the right job.</li>
            </div>
            <button>Add Job Application</button>
           </div>
        </div>
    )
}

export default Home;