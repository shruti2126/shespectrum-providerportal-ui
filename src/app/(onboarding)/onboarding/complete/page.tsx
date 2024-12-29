"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WelcomeOnboard = () => {
  const router = useRouter();
  const [name, setName] = useState("Dr. first last");
  const provider = JSON.parse(localStorage.getItem("provider")!);
  useEffect(() => {
    if (provider) {
      setName(provider.username);
    }
  });
  return (
    <div className="flex flex-col justify-center items-center text-3xl font-bold">
      Welcome Onboard {name} !
      <div>
        <Button
          className="ml-2 bg-emerald-500 text-white hover:bg-emerald-600 mt-10"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Continue to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default WelcomeOnboard;
