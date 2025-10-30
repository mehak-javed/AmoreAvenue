"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecipeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recipes = [
    {
      name: "The Coffee Break",
      price: "$50",
      image:
        "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    },
    {
      name: "Homemade",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1602541770236-d2b65f51202c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974",
    },
    {
      name: "Noodles",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2132",
    },
    {
      name: "Egg",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Sushi Dizzy",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1761315412187-1d3b5f327d01?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Fresh Salad",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Pizza Night",
      price: "$35",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    },
    {
      name: "Burger Classic",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1624233245379-611368d902ad?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    },
  ];

  const primaryColor = "#482008"; // Dark brown
  const accentColor = "#d4a574"; // Warm beige

  // Adjust how many items to show per screen size
  const itemsPerPage = 5;
  const maxIndex = Math.max(0, recipes.length - itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visibleRecipes = recipes.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="text-white" style={{ backgroundColor: primaryColor }}>
      <main className="px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-14 text-center md:text-left">
          Our Menu
        </h2>

        <div className="relative">
          {/* Recipe Cards Container */}
          <div
            className="
              flex flex-wrap justify-center md:justify-between
              gap-6 sm:gap-8 md:gap-10
            "
          >
            {visibleRecipes.map((recipe, idx) => (
              <div
                key={currentIndex + idx}
                className="flex flex-col items-center group cursor-pointer w-36 sm:w-44 md:w-48 lg:w-52"
              >
                {/* Circular Image Container */}
                <div className="relative mb-4 sm:mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
                  <div
                    className="rounded-full shadow-inner w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${recipe.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>

                {/* Recipe Info */}
                <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-[#d4a574] transition">
                  {recipe.name}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-[#d4a574]">
                  {recipe.price}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="
              absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
              bg-white text-black p-2 sm:p-3 md:p-4
              hover:bg-[#d4a574] transition disabled:opacity-30
              disabled:cursor-not-allowed rounded-full shadow-lg
            "
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="
              absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
              bg-white text-black p-2 sm:p-3 md:p-4
              hover:bg-[#d4a574] transition disabled:opacity-30
              disabled:cursor-not-allowed rounded-full shadow-lg
            "
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 sm:h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-[#d4a574] w-6 sm:w-8"
                  : "bg-black hover:bg-gray-400 w-2 sm:w-3"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
