"use client";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button";
}

export default function Button({
  text,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
    type={type}
    className={`bg-[#fc5b37] text-white py-2 px-4 rounded text-sm sm:text-base md:text-md lg:text-lg cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 ${className}`}
  >
    {text}
  </button>
  
  );
}
