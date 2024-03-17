"use client";

import Image from "next/image";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const defaultErrorState = {
  title: "",
  imageA: "",
  imageB: "",
};

export default function CreatePage() {
  const generateUploadUrl = "";
  const [imageA, setImageA] = useState("");
  const [imageB, setImageB] = useState("");
  const [errors, setErrors] = useState(defaultErrorState);
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="mt-16 ml-4 flex flex-col items-center">
      <div >

      
      <h1 className="text-4xl font-bold mb-6  ">upload your beautiful pic</h1>

      <p className="text-xl max-w-md  mb-10 ml-2 ">
        Upload your pic so that other people can vote on their favorite
        pic and help you redesign or pick the best options.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const title = formData.get("title") as string;
          let newErrors = {
            ...defaultErrorState,
          };

          if (!title) {
            newErrors = {
              ...newErrors,
              title: "please fill in this required field",
            };
          }

          if (!imageA) {
            newErrors = {
              ...newErrors,
              imageA: "please fill in this required field",
            };
          }

          if (!imageB) {
            newErrors = {
              ...newErrors,
              imageB: "please fill in this required field",
            };
          }

          setErrors(newErrors);
          const hasErrors = Object.values(newErrors).some(Boolean);

          if (hasErrors) {
            toast({
              title: "Form Errors",
              description: "Please fill fields on the page",
              variant: "destructive",
            });
            return;
          }

          //   router.push(`/thumbnails/${thumbnailId}`);
        }}
      >
        <div className="flex flex-col gap-2 mb-16 w-6/12 md:w-6/12 ">
          <Label className="text-lg" htmlFor="title">
            Your Name
          </Label>
          <Input
            id="title"
            type="text"
            name="title"
           
            placeholder="please enter your good name"
          />
          {errors.title && <div className="text-red-500">{errors.title}</div>}
        </div>
        <div className="flex flex-col gap-2 mb-16 w-6/12 md:w-6/12 ">
          <Label className="text-lg" htmlFor="pic">
            Your Pic
          </Label>
          <Input
            id="pic"
            type="file"
            name="pic"
           
           
          />
          {errors.title && <div className="text-red-500">{errors.title}</div>}
        </div>

        <Button>Upload</Button>
       
      </form>
      </div>
    </div>
  );
}
