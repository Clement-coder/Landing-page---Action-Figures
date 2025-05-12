"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

  const populars = [
    {
      image: "/images/Screenshot from 2025-05-10 01-11-43.png",
      title: "Naruto",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-11-53.png",
      title: "One Piece",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-11-59.png",
      title: "Dragon Ball",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-12-04.png",
      title: "Naruto",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-11-53.png",
      title: "One Piece",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
    {
      image: "/images/Screenshot from 2025-05-10 01-12-04.png",
      title: "Dragon Ball",
      narate: "PVC is a action figure that is about 20cm high, PVc has very, "
    },
  ];
const MostPopular = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-6 md:px-16 lg:px-32 mt-10 py-10'>
      <h2 
      data-aos="fade-left"
      className="text-xl max-w-md sm:text-2xl mb-2 md:text-3xl font-bold">
      Most Popular action figures this Week
        </h2>

        <p 
        data-aos="fade-right"
        className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint recusandae exercitationem magni accusantium unde ad animi at non praesentium! Dolorem culpa expedita, error quod ab atque! Facere placeat maxime, minima, tenetur, est quod sint voluptate quos laborum architecto quaerat! Mollitia nesciunt molestias nisi. Sed nesciunt fugit molestiae quibusdam eaque.</p>
      </div>


      <div className="px-4 sm:px-6 md:px-16 lg:px-32 mt-16 py-10">
      <Carousel className="w-full">
        <CarouselContent>
          {populars.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
            >
              <div 
              data-aos="fade-right"
              className="p-4 flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-md w-full flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={100}
                    className="mb-4  flex justify-center object-contain"
                  />
                </div>

                <div className="w-full bg-white shadow-md py-6 px-5 mt-4 rounded-lg text-center">
                  <div className="flex flex-col text-left justify-between ">
                    <h3 className="text-sm md:text-xl sm:text-base font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.narate}</p>
                  </div>

                </div>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
        
        <div className="flex items-center mt-4 justify-between">
        <CarouselPrevious className="relative left-16" />

        <CarouselNext className="relative right-16"/>
        </div>
      </Carousel>
    </div>
   
    
    <img 
    data-aos="fade-down"
    className="object-contain w-full px-4 sm:px-6 md:px-16 lg:px-32 mt-4 py-10"
    src="/images/frame.png"
    alt="" 
     />
    </div>
  )
}

export default MostPopular
