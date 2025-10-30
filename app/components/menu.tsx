"use client"

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Star, Clock, ChefHat, Plus } from 'lucide-react'
import FoodSlider from '../FoodSlider'

const dishVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

const imageVariants = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const contentVariants = {
  rest: {
    y: 0
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.3
    }
  }
}

export default function Menu() {
  const dishes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "Creamy sauce with pancetta, egg, and parmesan.",
      price: "$14.99",
      image: "/dishes/pasta.jpg",
      prepTime: "20 min",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil.",
      price: "$12.99",
      image: "/dishes/pizza.jpg",
      prepTime: "15 min",
      rating: 4.6,
      featured: false
    },
    {
      id: 3,
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers with mascarpone cream.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
      prepTime: "10 min",
      rating: 4.9,
      featured: true
    }
  ]

  const primaryColor = "#482008" // Dark brown
  const accentColor = "#d4a574" // Complementary warm beige

  return (
    <>
    <section id='menu' className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
       
        <h2 
          className="text-5xl font-bold mb-6 font-serif"
          style={{ color: primaryColor }}
        >
          Chef's Picks
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-aos = "fade-up">
          Handcrafted dishes made with passion and the finest ingredients. Each recipe tells a story of tradition and innovation.
        </p>
      </motion.div>

      <motion.div data-aos = "fade-up"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            whileHover={dishVariants}
            className="relative group"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              className="relative bg-white rounded-2xl h-[500px] overflow-hidden cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ borderColor: `${primaryColor}10` }}
            >
              {/* Featured Badge */}
              {dish.featured && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-4 left-4 z-20"
                >
                  <span 
                    className="text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                </motion.div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={imageVariants}
                  className="relative h-64"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                  {/* Dark Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: `${primaryColor}30` }}
                  />
                  
                  {/* Quick Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-20"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </motion.button>
                </motion.div>

                {/* Quick Info Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 flex justify-between items-center"
                >
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full text-white">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs font-medium">{dish.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full text-white">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{dish.rating}</span>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                className="p-6"
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle 
                    className="text-xl font-bold text-left font-serif group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: primaryColor }}
                  >
                    {dish.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <p className="text-gray-600 text-left leading-relaxed text-sm">
                    {dish.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: `${primaryColor}10` }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-bold font-serif"
                      style={{ color: primaryColor }}
                    >
                      {dish.price}
                    </motion.span>
                    
                    <motion.button
                      whileHover={{ 
                        color: "#ffffff", 
                        scale: 1.05,
                        backgroundColor: primaryColor
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 border"
                      style={{ 
                        backgroundColor: "black",
                        color: "white",
                        borderColor: `${primaryColor}20`
                      }}
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </motion.button>
                  </div>
                </CardContent>
              </motion.div>

              {/* Hover Effect Border */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderColor: `${primaryColor}20` }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16 "
      >
        <a href="#home">
        <motion.button
          whileHover={{ 
            scale: 1.05,
            backgroundColor: primaryColor,
            color: "#ffffff", 
          }}
          whileTap={{ scale: 0.95 }}
          className=" px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          style={{ 
            backgroundColor: "black",
            color: "white",
            borderColor: `${primaryColor}20`
          }}
        >
          <ChefHat className="w-5 h-5 " />
          View Full Menu
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.button>
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute left-0 right-0 -z-10 opacity-5 pointer-events-none">
        <div className="flex justify-between max-w-4xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
          ))}
        </div>
      </div>
     
    </section>
    <FoodSlider/>
    </>
  )
}