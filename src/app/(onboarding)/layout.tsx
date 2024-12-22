"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const OnboardingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const steps = [
    "contact-info",
    "expertise",
    "qualifications",
    "identity-verification",
  ];

  const pathname = usePathname();
  const currentStep = steps.findIndex((step) => pathname.includes(step));

  const isCompleteStep = pathname.includes("complete");
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      {!isCompleteStep && (
        <header className="py-4 px-6 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold text-gray-700 dark:text-white">
            Provider Onboarding
          </h1>
        </header>
      )}

      {/* Progress Bar */}
      {!isCompleteStep && (
        <div className="py-4 px-6">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full ${
                  index <= currentStep
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
          <div className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 container mx-auto px-6 py-4">{children}</main>

      {currentStep === steps.length - 1 && (
        <div className="flex justify-center">
          <Button
            className="align-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/onboarding/complete")}
          >
            Complete
          </Button>
        </div>
      )}
      {/* Navigation */}
      <footer className="py-4 px-6 bg-white dark:bg-gray-800 shadow-md flex justify-between">
        {currentStep < steps.length - 1 && !isCompleteStep && (
          <>
            <Button
              disabled={currentStep === 0}
              onClick={() =>
                router.push(
                  `/onboarding/${steps[currentStep - 1]
                    .toLowerCase()
                    .replace(" ", "")}`
                )
              }
            >
              Back
            </Button>
            <Button
              disabled={currentStep === steps.length - 1}
              onClick={() =>
                router.push(
                  `/onboarding/${steps[currentStep + 1]
                    .toLowerCase()
                    .replace(" ", "")}`
                )
              }
            >
              Next
            </Button>
          </>
        )}
      </footer>
    </div>
  );
};

export default OnboardingLayout;
