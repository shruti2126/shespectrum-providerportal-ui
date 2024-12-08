"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "next-themes";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const currTheme = useTheme().theme;
  console.log(currTheme);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-black p-4">{children}</div>
      <div
        className={`absolute top-5 right-0 ${
          currTheme === "light"
            ? "text-white "
            : "text-white"
        }`}
      >
        <ModeToggle />
      </div>
    </div>
  );
};

export default AuthLayout;
