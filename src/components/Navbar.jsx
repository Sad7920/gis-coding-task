import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className="fixed z-50 w-full h-20 px-4">
            <div className="w-full max-w-5xl mx-auto mt-4 h-[60px] p-3 flex items-center justify-between bg-background/60 backdrop-blur-[10px] rounded-full">
                {/* Logo */}
                <span className="px-4 cursor-pointer">
                    <Image src={logo} alt="Zort Logo" className="h-[30px] w-fit mb-1" />
                </span>

                {/* Navigation Links + CTA */}
                <div className="flex items-center gap-5">
                    {/* Desktop links */}
                    <div className="hidden md:flex gap-8 text-gray-400">
                        <a href="#features" className="hover:opacity-80 transition">Features</a>
                        <a href="#how-it-works" className="hover:opacity-80 transition">How it Works</a>
                        <a href="#support" className="hover:opacity-80 transition">Support</a>
                    </div>

                    {/* CTA Button */}
                    <Button className="text-sm h-10">Download App</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
