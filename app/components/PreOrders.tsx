"use client";
import { Star } from "lucide-react"; 

import React from "react";
import Button from "./ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PreOrders = () => {
  const PreOrder = [
    {
      image: "/images/Screenshot from 2025-05-10 01-11-43.png",
      title: "GONG MERY",
      price: 30.98,
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-11-53.png",
      title: "GONG MERY",
      price: 30.98,
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-11-59.png",
      title: "GONG MERY",
      price: 30.98,
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-12-04.png",
      title: "GONG MERY",
      price: 30.98,
    },
    {
        image: "/images/Screenshot from 2025-05-10 01-11-53.png",
        title: "GONG MERY",
        price: 30.98,
      },
      {
        image: "/images/Screenshot from 2025-05-10 01-12-04.png",
        title: "GONG MERY",
        price: 30.98,
      },
  ];

  return (
    <div className="px-6 md:px-32 mt-16 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">🔥 Pre-Order Now</h2>
      <Carousel className="w-full">
        <CarouselPrevious />
        <CarouselContent>
          {PreOrder.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
         
              <div className=" p-4 flex flex-col items-center">
              <div className="bg-gray-50 py-6 px-10">
                    <img
                  src={item.image}
                  alt={item.title}
                  width={100}
                  className=" mb-4  rounded-md"
                />
              </div>
             
               <div className="text-md shadow-md py-10 px-11 text-black font-bold">
             <div className=" flex items-center justify-between gap-16">
             <h3>{item.title}</h3>
             <p>${item.price.toFixed(2)}</p>
             </div>
                <div className="flex items-center mt-4">
                {[...Array(5)].map((item, i) => (
                <Star
                size={20}
                key={i}
                 className="text-amber-200 fill-amber-300"/>
                ))}
                </div>
               <Button 
               className="w-full mt-6"
               text="Pre-Order"
               />
               </div>
              
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PreOrders;
