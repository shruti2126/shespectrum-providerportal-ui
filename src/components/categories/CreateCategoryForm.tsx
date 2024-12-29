"use client";
import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import CategoryPage from "../../app/(main)/categories/page";

const formSchema = z.object({
  categoryTitle: z.string().min(1, {
    message: "category title is required",
  }),
  categoryDescription: z.string().min(1, {
    message: "category description is required",
  }),
});

const CreateCategoryForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryTitle: "",
      categoryDescription: "",
    },
  });
  async function handleSubmit(data: z.infer<typeof formSchema>) {
    axios
      .post("http://localhost:5000/api/providers/login", data)
      .then((res) => {
        console.log("res => ", res.data);
        localStorage.setItem("provider", JSON.stringify(res.data) || "{}");
        router.push("/dashboard");
        toast({
          title: "Logged in successfully",
        });
      })
      .catch((err) => console.log(err));

    console.log(data);
  }

  return (
    <Card className="md:w-[400px]">
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
        <CardDescription>Create a new category for your posts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {" "}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8 "
          >
            <FormField
              control={form.control}
              name="categoryTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Category Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the new category title"
                      {...field}
                      className=" bg-slate-200 border-0 text-black focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                    Category Description
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the new category description"
                      {...field}
                      className="bg-slate-200 border-0 text-black focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-white"
            >
              Create
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateCategoryForm;
