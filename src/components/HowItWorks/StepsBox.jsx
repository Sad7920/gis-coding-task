import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const StepsBox = ({ header, para, number }) => {
    return (
        <div className='w-full rounded-xl p-6 bg-[#d9e1fa] space-y-5 group transition-shadow hover:shadow-md'>

            {/* Top Row: Step Label + Arrow Icon */}
            <div className='flex justify-between items-center'>
                <span className='rounded-full px-4 py-0.5 text-sm border'>Step</span>
                <ArrowUpRight
                    size={30}
                    className="text-background group-hover:text-primary transition-colors duration-300"
                />
            </div>

            {/* Step Title */}
            <h1 className='text-2xl font-medium group-hover:text-primary transition-colors duration-300'>
                {header}
            </h1>

            {/* Step Number + Description */}
            <div className='flex justify-between items-end overflow-hidden h-fit'>
                <h1 className='text-7xl text-primary font-mono font-medium translate-y-7'>
                    {number}
                </h1>
                <p className='text-xs w-36 text-background/60 text-right'>
                    {para}
                </p>
            </div>
        </div>
    )
}

export default StepsBox
