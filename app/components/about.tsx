import React from 'react'
import Image from 'next/image'
import owner from './../../public/own.jpg'

function About() {
  return (
    <div id= "about" className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-20 gap-8">
      {/* Text Section */}
      <div className="space-y-6" data-aos="fade-right">
        <h2 className="text-lg text-[#482008] font-bold">CEO Message</h2>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#482008] font-bold">
          Dear Valued Guests,
        </h1>

        <p className="text-black font-light text-base sm:text-lg leading-relaxed">
          At Amore Avenue, our story has always been about more than just great food — it’s about connection, passion, and community. From the moment you walk through our doors, we want you to feel at home, surrounded by the warmth of good company and the comfort of a meal made with care.
        </p>

        <p className="text-black font-light text-base sm:text-lg leading-relaxed">
          Our team works tirelessly to ensure every dish reflects our commitment to quality, authenticity, and innovation. We take pride in sourcing the freshest ingredients, supporting local producers, and crafting flavors that celebrate both tradition and creativity.
        </p>

        <p className="text-black font-light text-base sm:text-lg leading-relaxed">
          As we continue to grow, our mission remains the same: to create memorable dining experiences that bring people together. Every visit, every meal, and every smile remind us why we do what we do.
        </p>

        <p className="text-black font-light text-base sm:text-lg leading-relaxed">
          Thank you for being part of our journey. Your trust and loyalty inspire us to keep raising the bar and to continue serving you with excellence. We look forward to welcoming you again soon — because at Amore Avenue, you’re not just our guest, you’re part of our family.
        </p>

        <div>
          <p className="text-lg text-[#482008] font-bold">Maria Xibli Longo</p>
          <p className="text-md text-[#d4a574] font-light">CEO, Amore Avenue</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center" data-aos="fade-left">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image
            src={owner}
            alt="Restaurant Owner"
            className="rounded-lg object-cover w-full h-auto shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default About
