import React from "react";
import { GiBrainFreeze } from "react-icons/gi";
import { LiaDollyFlatbedSolid } from "react-icons/lia";
import { FaBedPulse } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Whykey = () => {
  return (
    <div>
      <div className="hidden md:block h-60 w-100 bg-blue-400 my-10 ">
        <h1 className="flex items-center text-4xl font-bold text-[#ffffff] my-2 justify-center">
          Key Highlights
        </h1>

        <div className="h-44 w-100 my-8 flex items-center   justify-evenly ">
          <div className="h-28 rounded-md w-60 hover:border-2 hover:border-[#ffffff]">
            <div className="h-20 w-24  mx-4 my-4 bg-[#ffffff]  hover:bg-inherit rounded-md border-solid border-2 border-[#ffffff] ">
              <h1 className="flex item-center justify-center  my-2 text-6xl text-blue-900">
                <GiBrainFreeze />
              </h1>
              <h1 className="relative left-24 mx-4 text-[#ffffff] bottom-16 text-xl font-bold">
                50+
              </h1>
              <h1 className="relative left-24 mx-4 text-[#ffffff] bottom-14 text-xl font-bold">
                Doctor
              </h1>
            </div>
          </div>

          <div className="h-28 rounded-md w-60 hover:border-2 hover:border-[#ffffff]">
            <div className="h-20 w-20 mx-4 my-4 bg-[#ffffff] hover:bg-transparent rounded-md border-solid border-2 border-[#ffffff] ">
              <h1 className="flex item-center justify-center my-2 text-6xl text-blue-900">
                <FaBedPulse />
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-16 text-xl font-bold">
                220+
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-14 text-xl font-bold">
                Beds
              </h1>
            </div>
          </div>

          <div className="h-28 rounded-md w-60 hover:border-2 hover:border-[#ffffff]">
            <div className="h-20 w-20 mx-4 my-4 bg-[#ffffff] hover:bg-transparent rounded-md border-solid border-2 border-[#ffffff] ">
              <h1 className="flex item-center justify-center my-2 text-6xl text-blue-900">
                <IoPersonSharp />
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-16 text-xl font-bold">
                50+
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-14 text-xl font-bold">
                Patients
              </h1>
            </div>
          </div>

          <div className="h-28 rounded-md w-60 hover:border-2 hover:border-[#ffffff]">
            <div className="h-20 w-20 mx-4 my-4 bg-[#ffffff] hover:bg-transparent rounded-md border-solid border-2 border-[#ffffff] ">
              <h1 className="flex item-center justify-center my-2 text-6xl text-blue-900">
                <LiaDollyFlatbedSolid />
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-16 text-xl font-bold">
                50+
              </h1>
              <h1 className="relative left-20 mx-4 text-[#ffffff] bottom-14 text-xl font-bold">
                Patients
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-60 md:w-4/5  mx-20 my-28 ">
        <h1 className="text-3xl my-2 text-blue-900 font-bold">
          Where Quality Care Meets Affordability, & Saving Lives is Our
          Commitment!
        </h1>
        <h1 className="text-sm  font-semibold ">
          At Capital Hospital, we're not just another healthcare provider. We're
          your dedicated partner on your journey to well-being.
        </h1>
        <h1 className="text-sm font-semibold py-2">
          What makes Capital Hospital stand out? Our commitment to quality care
          at an affordable rate sets us apart, making us the choice of
          discerning patients looking for premium healthcare without breaking
          the bank.
        </h1>
        <h1 className="text-sm py-2 font-semibold">Our comprehensive range of medical services encompasses various specialties and includes Cardiology and Cardiac Surgery, Neurology and Neurosurgery, Hematology and bone Marrow Transplants, Organ Transplants, Oncology, Orthopedics', IVF, Urology, Endocrinology and Gastroenterology to name a few.</h1>

        <h1 className="text-sm  font-semibold">At Capital Hospitals, our constant endeavor is to stay at the forefront of medical advancements and we continuously strive to adapt to the latest technologies and treatment modalities. Our hunger for research, innovation, and clinical excellence has earned us accolades and recognition in the medical fraternity and we believe in fostering a compassionate and caring environment for our patients and their family members.</h1>
        <h1  className="text-sm  font-semibold">Our patient-centric approach ensures that each individual receives personalized attention and that their family’s emotional and psychological well-being is taken care of during the entire healing process. We invite you to experience our world-class healthcare services with compassion in your health journey.</h1>
      </div>
    </div>
  );
};

export default Whykey;
