import Image from 'next/image'
import React from 'react'
import ss1 from '../../public/ss1.png'
import ss2 from '../../public/ss2.png'
import ss3 from '../../public/ss3.png'



const MockupCarousel = () => {
    return (
        <div className=' w-full pt-20 relative px-4 h-full overflow-hidden'>
            <span className='absolute top-20 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10' />
            <span className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10' />
            <div className="grid grid-cols-2 gap-6 w-fit mx-auto overflow-hidden rotate-4 py-4">
                <Image src={ss1} className="w-40 rounded-3xl border border-foreground" />
                <Image src={ss3} className="w-40 rounded-3xl border border-foreground -translate-y-50" />
                <Image src={ss3} className="w-40 rounded-3xl border border-foreground " />
                <Image src={ss2} className="w-40 rounded-3xl border border-foreground -translate-y-50" />
                <Image src={ss2} className="w-40 rounded-3xl border border-foreground" />
                <Image src={ss1} className="w-40 rounded-3xl border border-foreground -translate-y-50" />
            </div>
        </div>
    )
}

export default MockupCarousel