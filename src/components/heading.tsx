import React from "react";

const heading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center mt-5 text-3xl font-bold ">
      {heading}
    </div>
  );
};

export default heading;
