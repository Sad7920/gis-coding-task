import React from 'react'

const Footer = () => {
    return (
        <div className='px-4 w-full py-6'>
            {/* Container for the footer content */}
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-6'>

                {/* Social icons */}
                <div className='flex w-fit gap-4 mx-auto'>
                    {/* Instagram link */}
                    <a
                        href='https://www.instagram.com/zorthq/?igsh=MXA5bWE2dDQ0dHQyMw%3D%3D#'
                        target='_blank'
                        className='p-3 border border-foreground/10 hover:bg-foreground/10 transition-all focus:ring ring-secondary/50 rounded-full cursor-pointer'
                    >
                        {/* Instagram icon (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                            <path d="..."></path>
                        </svg>
                    </a>

                    {/* TikTok link */}
                    <a
                        href='https://www.tiktok.com/@zortapp'
                        target='_blank'
                        className='p-3 border border-foreground/10 hover:bg-foreground/10 transition-all focus:ring ring-secondary/50 rounded-full cursor-pointer'
                    >
                        {/* TikTok icon (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                            <path d="..."></path>
                        </svg>
                    </a>
                </div>

                {/* Divider line */}
                <hr className='text-foreground/10' />

                {/* Copyright and footer links */}
                <div className='flex flex-col sm:flex-row gap-4 text-center sm:text-start justify-between text-xs text-foreground/70'>
                    {/* Copyright notice */}
                    <h3>© 2025 Copyright ZORT - All rights reserved.</h3>

                    {/* Terms and privacy links */}
                    <div className='flex w-fit mx-auto sm:mx-0'>
                        <button className='cursor-pointer hover:text-foreground/90 transition-all px-3 border-r'>
                            Terms & Conditions
                        </button>
                        <button className='cursor-pointer hover:text-foreground/90 transition-all px-3'>
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
