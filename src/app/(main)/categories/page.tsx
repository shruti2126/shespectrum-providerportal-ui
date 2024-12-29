import CreateCategoryForm from "@/components/categories/CreateCategoryForm";
import { Button } from "@/components/ui/button";
import React from "react";

const CategoryPage = () => {
  const categories = [
    "Educational",
    "Medical Research",
    "Personal Story",
    "Patient Testimonials",
    "Health Tips",
    "Health News",
    "Health Resources",
  ];
  return (
    <>
      {" "}
      <div className="flex flex-wrap justify-center items-center mx-10 p-10">
        {categories.map((category, index) => (
          <Button key={index} className="mx-2 my-2">
            {category}
          </Button>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {/* Create Category Form */}
        <CreateCategoryForm />
      </div>
    </>
  );
};

export default CategoryPage;
