"use client";
import { useState } from "react";
export default function FormInput({ type, placeholder }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        className=" active:border-blue-500 visited:border-blue-500 focus:border-indigo-300 outline-none border-2 border-gray-500 text-indigo-400 border-opacity-10 rounded-lg w-full p-6 mt-6"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
}
