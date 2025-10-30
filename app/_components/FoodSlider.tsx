"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RecipeSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const recipes = [
        {
            name: "The Coffee Break",
            price: "$50",
            image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",

        },
        {
            name: "Homemade",
            price: "$10",
            image: "http://images.unsplash.com/photo-1602541770236-d2b65f51202c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",

        },
        {
            name: "Noodles",
            price: "$20",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2132",

        },
        {
            name: "Egg",
            price: "$30",
            image: "https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",

        },
        {
            name: "Sushi Dizzy",
            price: "$40",
            image: "https://images.unsplash.com/photo-1761315412187-1d3b5f327d01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXRhbGlhbiUyMHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",

        },
        {
            name: "Fresh Salad",
            price: "$25",
            image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMHNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",

        },
        {
            name: "Pizza Night",
            price: "$35",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",

        },
        {
            name: "Burger Classic",
            price: "$28",
            image: "https://images.unsplash.com/photo-1624233245379-611368d902ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbGlhbiUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
        }
    ];
    const primaryColor = "#482008" // Dark brown
    const accentColor = "#d4a574" // Complementary warm beige
    const itemsPerPage = 5;
    const maxIndex = Math.max(0, recipes.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const visibleRecipes = recipes.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="h-auto text-white" style={{ backgroundColor: `${primaryColor}` }}>


            {/* Main Content */}
            <main className="px-16 py-20">
                <h2 className="text-5xl font-bold mb-16">Our Recipes</h2>

                <div className="relative">
                    {/* Recipe Cards Container */}
                    <div className="flex items-center justify-center gap-8">
                        {visibleRecipes.map((recipe, idx) => (
                            <div key={currentIndex + idx} className="flex flex-col items-center group cursor-pointer">
                                {/* Circular Image Container */}
                                <div className="relative mb-6">
                                    <div
                                        className="w-50 h-50 rounded-full shadow-inner"
                                        style={{
                                            backgroundImage: `url(${recipe.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                    </div>
                                </div>

                                {/* Recipe Info */}
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-bg-[#d4a574] transition">{recipe.name}</h3>
                                <p className="text-2xl font-bold text-[#d4a574]">{recipe.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-4 hover:bg-[#d4a574] transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-4 hover:bg-[#d4a574] transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-[#d4a574] w-8' : 'bg-gray-500 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}