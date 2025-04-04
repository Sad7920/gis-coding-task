import React from 'react'

// Reusable component to display a feature with an icon, header, and description
const FeatureBox = ({ icon, header, para }) => {
    return (
        // Outer container with padding, spacing, and rounded corners
        <div className='w-full p-6 flex flex-col gap-6 rounded-lg'>

            {/* Icon wrapper - centered on mobile, aligned left on larger screens */}
            <div className='p-4 rounded-full w-fit mx-auto sm:mx-0 border border-foreground/8'>
                {icon}
            </div>

            {/* Text content: header and paragraph */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>{header}</h2>
                <p className='text-sm text-foreground/80'>{para}</p>
            </div>
        </div>
    )
}

export default FeatureBox
