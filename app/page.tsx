"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedFood from './_components/Home/FeaturedFood'
import FoodSlider from './_components/FoodSlider'
import { motion, scale } from "framer-motion";
import Navbar from "./_components/Navbar";
import About from './_components/About'
import Contact from "./_components/Contact";
export default function HomePage() {
  const primaryColor = "#482008" // Dark brown
  const accentColor = "#d4a574"
  return (
    <main className="min-h-screen bg-background">
    
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="">
            <Navbar/>
        </div>
        
        <Image
          src="/hero.jpg"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 ">Authentic Italian Flavors Since 1998</h1>
          <p className="text-lg mb-8 max-w-xl text-[#d4a574]">
            Experience the taste of Italy with our handmade pastas, wood-fired pizzas, and fine wines.
          </p>
          <div
           
            className="flex gap-4"
          >
            <Button size="lg" className="bg-black hover:bg-[#482008]" variant="default">
              Book a Table
            </Button>
            <Button size="lg" className="bg-black hover:bg-[#482008]" variant="secondary">
              Order Now
            </Button>
          </div>
        </div>
      </section>

      <FeaturedFood />
      <FoodSlider />
      <About/>
      <Contact/>
    </main>
  );
}
