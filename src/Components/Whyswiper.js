import React from "react";

const Whyswiper = () => {
  return (
    <div className="flex my-4 gap-20 justify-around">
       <div>
        <h1 className="lg:text-4xl text-xl font-bold">All the tools you need</h1>
        <h1 className="lg:text-4xl text-xl font-bold">to grow your business</h1>
        <h1 className="lg:text-xl text-sm font-semibold my-2 font-serif ">
        Get secure payments
          </h1>
          <h1>With free web hosting, your site is automatically </h1>
          <h1>backed up and ready to handle any situation.</h1>

          <h1 className="lg:text-xl font-semibold my-2 font-serif ">
          Reach your audience
          </h1>
          <h1 className="font-serif">
            Look professional online with a custom domain name.
          </h1>
          <h1 className="font-serif">
            Check out the Business Name Generator for inspiration.
          </h1>

          <h1 className="lg:text-xl font-semibold my-2 font-serif ">
            Custom business email
          </h1>
          <h1 className="font-serif">
            Gain client trust and strengthen your brand with your
          </h1>
          <h1 className="font-serif">
            own business email that matches your domain.
          </h1>

          <button className="bg-blue-900 lg:px-10 lg:py-4 text-white rounded-full my-4">
            Get Started
          </button>
        </div>
      <div>
        <img style={{height:"400px",width:"900px"}}
          src="https://img.freepik.com/premium-photo/serious-business-group-presentation_13339-233708.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Whyswiper;
