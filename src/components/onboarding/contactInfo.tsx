"use client";
import { useProviderContext } from "@/context/providerContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";

interface ContactInfoProps {
  name: string;
  mobileNumber: string;
  email: string;
}
const contactInfo = () => {
  const { state, dispatch } = useProviderContext();
  const providerDetails = state?.providerDetails;

  const [contactDetails, setContactDetails] = useState<ContactInfoProps>({
    name: providerDetails.username,
    mobileNumber: providerDetails.mobileNumber,
    email: providerDetails.email,
  });
  const [address, setAddress] = useState("");
  
  
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please verify your contact details and provide your address.
        </p>
        <form className="space-y-4">
          {/* Full Name (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value="Dr. John Doe" // Replace with dynamic data
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Mobile Number (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              value="+91-9876543210" // Replace with dynamic data
              readOnly
              className="w-full px-3 py-2 border  text-gray-500 border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Email Address (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value="john.doe@example.com" // Replace with dynamic data
              readOnly
              className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Address (Editable) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            {/* <textarea
              placeholder="Enter your address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea> */}
            <AddressForm />
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none"
            onClick={() => router.push("/onboarding/identity-verification")}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default contactInfo;
