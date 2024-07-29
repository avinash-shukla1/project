import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";

const Aboutepage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex gap-10 justify-center items-center my-2">
        <div className="border-2 border-black h-80 w-80 rounded-lg flex items-center flex-col justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-3xl font-bold">Development</h1>
          <h1 className="flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            nemo.
          </h1>
          <h1 className="flex items-center justify-center">
            
          </h1>
        </div>
        <div className="border-2 border-black h-80 w-80 rounded-lg flex items-center flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-3xl font-bold">Game App</h1>
          <h1 className="flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            nemo.
          </h1>
        </div>
        <div className="border-2 border-black h-80 w-80 rounded-lg flex items-center flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-3xl font-bold">Web Design</h1>
          <h1 className="flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            nemo.
          </h1>
        </div>
        <div className="border-2 border-black h-80 w-80 rounded-lg flex items-center flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1504270856906-58da8a7e7102?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-3xl font-bold">App Design</h1>
          <h1 className="flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            nemo.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Aboutepage;
