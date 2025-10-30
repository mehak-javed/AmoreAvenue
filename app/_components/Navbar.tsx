import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

function Navbar() {
    return (
        <div className='flex flex-col '>

            <div className="fixed backdrop-blur-sm bg-[white] flex top-0 left-0 right-0 z-50 px-5 py-2 items-center justify-between text-white">
                <Image
                    src="/removedbg.png"
                    alt="logo"
                    width={85}
                    height={85}
                />


                <div className="flex gap-8 text-md">
                    <a href="#" className=" hover:text-[#d4a574] hover:bg-black px-3 py-2 rounded-md text-[#482008]">Home</a>
                    <a href="#" className="hover:text-[#d4a574] hover:bg-black px-3 py-2 rounded-md text-[#482008]">Menu</a>
                    <a href="#" className="hover:text-[#d4a574] hover:bg-black px-3 py-2 rounded-md text-[#482008]">About</a>
                    <a href="#" className="hover:text-[#d4a574] hover:bg-black px-3 py-2 rounded-md text-[#482008]">Contact</a>
                </div>


                <Button size="lg" className="bg-black hover:bg-[#482008]" variant="default">
                    Order Now
                </Button>
            </div>
        </div>
    );
}
export default Navbar;