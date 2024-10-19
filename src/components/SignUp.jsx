import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <h4 className="font-extralight">SIGN UP AND SAVE</h4>
      <p className="font-light">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter your email"
          className="border-2 border-black px-4 py-2 text-left"
        />
        <button className="bg-black text-white px-4 py-[9.9px]">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
