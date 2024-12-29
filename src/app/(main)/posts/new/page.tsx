"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  file: z
    .any()
    .refine((files) => files?.length === 1, { message: "File is required" }),
});

type FormData = z.infer<typeof schema>;

const NewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]); // Get the file from the input

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload the post");
      }

      alert("Post uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to upload the post");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h1 className="text-3xl font-bold">Add New Post</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md rounded-lg bg-slate-100 mt-5 p-5 w-full max-w-lg"
      >
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="title" className="text-black p-3">
              Title:
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full rounded-sm border border-gray-300 p-2"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="text-black p-3">
              Description:
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="w-full rounded-sm border border-gray-300 p-2"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="file" className="text-black p-3">
              Upload Media:
            </label>
            <input
              type="file"
              id="file"
              {...register("file")}
              className="w-full rounded-sm border border-gray-300 p-2"
            />
            {errors.file && (
              <p className="text-red-500 text-sm">{errors.file.message}</p>
            )}
          </div>
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
