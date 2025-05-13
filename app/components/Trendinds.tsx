"use client";

import React from "react";
import Button from "./ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};


import { useState, useEffect } from "react";



const Trendinds = () => {


  const [PreOrders, setPreOrders] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPreOrders(data.slice(10, 14)))
      .catch((err) => console.error("Error fetching PreOrders:", err));
  }, [5000]);

  const trends = ["Manufacturer: Megahouse"];

  

  return (
    <div>
      <div 
        data-aos="zoom-in"
      className="text-center mx-auto mt-10">
        <h2 className="text-xl sm:text-2xl mb-2 md:text-3xl font-bold">
          Trending this Month 🔥
        </h2>
        <p className="text-gray-500">
          Save you time, money and energy and start to washing with us
        </p>
      </div>

      <div 
        
      className="px-4 sm:px-6 md:px-16 lg:px-32 mt-10 py-10">
        <Carousel className="w-full">
          <CarouselContent 
          
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PreOrders.map((item, index) => (
              <CarouselItem
            
  key={index}
  className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
>
  <div 
  data-aos="fade-left"
  className="bg-white gap-10 items-center rounded-xl shadow-md p-4 flex">
    <img 
      data-aos="fade-left"

      src={item.image}
      alt={item.title}
      width={200}
      className="w-[200px] h-[100px] object-contain"
    />
    <div className="flex flex-col gap-5 py-10">
    <h3 className="text-sm font-semibold">{item.title}</h3>
    <p className="text-xs text-gray-500">
      {trends.map((trending, index) => (
        <span>{trending}</span>
      ))}
    </p>
    <div className="flex items-center text-left justify-start gap-2">
      <Button text="Pre-Order" className="text-xs px-3 py-1" />
      <span className="text-sm font-bold">${item.price.toFixed(2)}</span>
    </div>
    </div>
  </div>
</CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center mt-6 justify-between">
            <CarouselPrevious className="relative left-4" />
            <CarouselNext className="relative right-4" />
          </div>
        </Carousel>
        
      </div>
    </div>
  );
};

export default Trendinds;
