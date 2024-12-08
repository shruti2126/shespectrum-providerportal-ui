"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
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
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstname: z.string().min(3, { message: "First name is required" }),
  lastname: z.string().min(3, { message: "Last name is required" }),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  service: z.string().min(1, { message: "Service is required" }),
  experienceInYears: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: "Experience must be a number" }),
  calendarType: z.enum(["Calendly", "Google", "Outlook", "Manual"], {
    required_error: "Calendar type is required",
  }),
  calendlyLink: z.string().optional(),
  googleCalendarId: z.string().optional(),
  outlookCalendarId: z.string().optional(),
});

const RegisterForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      mobileNumber: "",
      email: "",
      password: "",
      service: "",
      experienceInYears: undefined,
      calendarType: "Manual",
      calendlyLink: "",
      googleCalendarId: "",
      outlookCalendarId: "",
    },
  });

  // Watch for changes in the calendarType field
  const selectedCalendarType = form.watch("calendarType");

  useEffect(() => {
    console.log("Selected Calendar Type:", selectedCalendarType);
    switch (selectedCalendarType) {
      case "Calendly":
    }
  }, [selectedCalendarType]);

  function handleSubmit(data: z.infer<typeof formSchema>) {
    router.push("/");
    toast({
      title: "Registered successfully",
    });
    console.log(data);
  }

  return (
    <Card className="w-full h-[80vh]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Fill in the form below to register</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your 10-digit mobile number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your service (e.g., Family Medicine)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experienceInYears"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience (Years)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter years of experience"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="calendarType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm mr-3">Calendar Type</FormLabel>
                  <FormControl className="border p-2 text-sm font-bold text-zinc-500 mr-3">
                    <select {...field}>
                      <option value="Select a calendar type">
                        Select a calendar type
                      </option>
                      <option value="Calendly">Calendly</option>
                      <option value="Google">Google</option>
                      <option value="Outlook">Outlook</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedCalendarType === "Calendly" && (
              <FormField
                control={form.control}
                name="calendlyLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calendly Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Calendly link (if applicable)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedCalendarType === "Google" && (
              <FormField
                control={form.control}
                name="googleCalendarId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Calendar ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Google Calendar ID (if applicable)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedCalendarType === "Outlook" && (
              <FormField
                control={form.control}
                name="outlookCalendarId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outlook Calendar ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Outlook Calendar ID (if applicable)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit">Register</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
