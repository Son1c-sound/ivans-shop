"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    content: "I've noticed a huge difference in my skin after just a few weeks. It's clearer, smoother, and has a healthier glow. My confidence is through the roof!",
    author: "Jake",
    age: 23,
  },
  {
    id: 2,
    content: "Get Attractive has worked wonders for my hair. It's thicker and shinier than ever, and even my barber noticed the change!",
    author: "Ryan",
    age: 21,
  },
  {
    id: 3,
    content: "Get Attractive has worked wonders for my hair. It's thicker and shinier than ever, and even my barber noticed the change!",
    author: "Ryan",
    age: 21,
  },
];

const TestimonialSlider = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-10xl mx-auto p-12">
        <h2 className="text-2xl font-bold mb-8">In Your Own Words —</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#40B7C8] h-80">
            <img
              src="https://getsupplements.com/cdn/shop/files/getsupp_herosproduct_banner.jpg?v=1726233020"
              alt="Product bottles pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 h-80">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full h-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 h-full">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="basis-full h-full">
                    <div className="bg-white rounded-2xl p-14 shadow-sm border border-gray-400 h-full flex flex-col justify-between">
                      <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                        {testimonial.content}
                      </p>
                      <div className="text-gray-600">
                        — {testimonial.author}, {testimonial.age}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      current === index ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
