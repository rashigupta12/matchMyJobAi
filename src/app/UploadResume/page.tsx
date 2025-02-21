'use client'
import React from 'react'
import Footer from '~/components/footer'
import Navbar from '~/components/navbar'
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"

interface FormValues {
  name: string;
  contact: string;
  email: string;
  resume: File | null;
}

const UploadResume: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      resume: null,
    },
  });

  const { setValue } = form;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
    <div className="min-h-screen w-full bg-gray-50 overflow-hidden">
      <Navbar />
      <div className="mt-32 mb-32 bg-white p-6 max-w-7xl mx-auto shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-6 text-center">Upload Your Resume</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="h-16" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input className="h-16" type="tel" placeholder="123-456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="h-16" type="email" placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Upload Resume</FormLabel>
                <FormControl>
                  <Input
                    className="h-16 text-sm"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      setValue("resume", file); // Manually set the value
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            <div className="col-span-1 md:col-span-2">
              <Button type="submit" className="w-full bg-gray-100 text-black hover:bg-gray-800 hover:text-white">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default UploadResume;
