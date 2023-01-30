import React from "react";
import studentCouncil from "../../../Assets/about/student_council.png"



const VolunteerDetails = () => {



  return (
    <div className="w-[90%] flex gap-10 mx-auto mt-14 justify-center pb-10">
      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl">
        <div className="lg:text-2xl md:text-xl text-sm text-[#FE420B] font-semibold lg:gap-4 md:gap-5 w-[100%] flex justify-evenly">
        <span>Volunteer</span>  Aug 2019 - Oct 2019
    
        </div>
        <p className=" lg:text-2xl md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-black" style={{color:"rgba(0, 0, 0, 0.6)"}}>
          {/* The Social Impact Student chapter of our University had a Serve Out
          Smiles campaign wherein the objective was to help underprivileged
          students social skills and communication. <br /> <br /> As a{" "} */}
{/* <span className="font-semibold text-[#FE420B]"></span> */}

         Volunteered at NGOs under the Students Council, where I <b className="text-black">interacted with underprivileged kids</b> & 
         taught them basic arithmetic & grammar.

          <div className="flex justify-center mx-auto mt-12">
            <img src={studentCouncil}/>
          </div>

        </p>
      </div>
      <div className="w-[45%] shadow-2xl rounded-3xl bg-gradient-to-b from-[#FAAF40] to-[#FF6D76] flex">
        <p className="text-white font-bold lg:text-7xl md:text-5xl text-3xl lg:px-20 mt-80">
          For the greater good <br />
          and better <br />
          tomorrows.
        </p>
      </div>
    </div>
  );
};

export default VolunteerDetails;
