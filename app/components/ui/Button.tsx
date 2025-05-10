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
      className={`bg-[#fc5b37] text-white py-2 px-4 rounded text-md cursor-pointe ${className}`}
    >
      {text}
    </button>
  );
}
