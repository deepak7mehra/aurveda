"use client"

import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [value,setValue] =  useState(0);
  console.log(value)
  return (
    <div className="h-screen bg-[#f5f8ff]">
      <div className="text-4xl text-center">assignment </div>
      <div className="max-w-[400px] mx-auto mt-10">
        <Form/>


      </div>
    </div>
  );
}
