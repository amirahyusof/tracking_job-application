import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

function Home(){
    return(
       <div className="w-full my-16 py-10 px-4 bg-[#91C8E4]" id="home">
           <div className="w-full mx-auto text-center">
           <h1 className="my-4 text-4xl font-bold text-[#0F1035]">Welcome to Job Application Tracker</h1>
            <p className="text-lg py-4">Job hunting can sometimes feel like a daunting journey, filled with uncertainties and rejections. 
               However, it's essential to stay motivated and focused on your goals.</p>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay:2500, 
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable:true,
                }} 
                modules={[Pagination, Autoplay]}
                className="mySwiper">
                <SwiperSlide className="my-4 mb-6">Each job application you submit brings you one step closer to your dream job. Stay persistent and keep applying, even if you face setbacks along the way.</SwiperSlide>
                <SwiperSlide className="my-4 mb-6">Use each job application as an opportunity to learn and improve. Reflect on your experiences, gather feedback, and refine your approach to increase your chances of success.</SwiperSlide>
                <SwiperSlide className="my-4 mb-6">Maintaining a positive mindset is key to navigating the ups and downs of job hunting. Celebrate your achievements, no matter how small, and believe in your abilities to land the right job.</SwiperSlide>
            </Swiper>
            <button className="border w-[120px] mb-4 rounded-full p-2 bg-[#365486] text-[#DCF2F1] hover:bg-[#0F1035] mt-8">
                <Link to="/job_form">Add Job</Link>
            </button>
           </div>
        </div>
    )
}

export default Home;