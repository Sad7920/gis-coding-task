import { ScanQrCode } from 'lucide-react'
import React from 'react'


const FeatureBox = ({ icon, header, para }) => {
    return (
        <div className='w-full p-6 flex flex-col gap-6 rounded-lg '>
            <div className='p-4 rounded-full w-fit mx-auto sm:mx-0 border border-foreground/8'>
                {icon}
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>{header}</h2>
                <p className='text-sm text-foreground/80'>{para}</p>
            </div>
        </div>
    )
}

export default FeatureBox