"use client";

import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-black p-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
