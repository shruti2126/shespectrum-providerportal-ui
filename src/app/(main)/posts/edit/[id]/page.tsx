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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import React, { Usable } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  body: z.string().min(1, {
    message: "body is required",
  }),
  author: z.string().min(1, {
    message: "author is required",
  }),
  date: z.string().min(1, {
    message: "date is required",
  }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast();
  const { id } = params;
  const post = posts.find((post: Post) => post.id === id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });
  function handleSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Post has been updated successfully",
      description: `Updated by ${data.author}`,
    });
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-around  sm:w-[400px] md:w-[600px] lg:w-[800px] p-4">
      <BackButton text="Back to Posts" link="/posts" />
      <h3 className="text 2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="title"
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
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="body"
                    {...field}
                    className="bg-slate-200 border-0 text-black focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="author"
                    {...field}
                    className="bg-slate-200 border-0 text-black focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="date"
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
            Update Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;
