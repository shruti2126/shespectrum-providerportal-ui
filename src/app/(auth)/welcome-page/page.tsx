"use client";
import { useRouter } from "next/navigation";
import React from "react";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 px-4">
      <div className=" w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome to SheSpectrum
        </h1>
        <p className="text-gray-600 text-center mb-6">
          We’re excited to have you onboard! Let’s get you set up.
        </p>
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none"
          onClick={() => router.push("/onboarding/contact-info")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
