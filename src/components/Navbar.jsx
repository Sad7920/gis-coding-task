import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='fixed z-50 w-full h-20 px-4 '>
            <div className='w-full bg-background/60 backdrop-blur-[10px]  h-[60px] max-w-5xl mx-auto p-3 mt-4 flex items-center rounded-full justify-between '>
                <span className='w-fit rounded-full px-4 cursor-pointer'><Image src={logo} className="h-[30px] w-fit mb-1" /></span>
                <div className='w-fit h-full flex items-center gap-5'>
                    <div className='hidden md:flex gap-8 text-gray-400 transition'>
                        <a href='#features' className='hover:opacity-80'>Features</a>
                        <a href='#how-it-works' className='hover:opacity-80'>How it Works</a>
                        <a href='#support' className='hover:opacity-80'>Support</a>
                    </div>
                    <Button text="Download App" className="h-10" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar