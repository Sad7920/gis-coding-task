import React from 'react'
import { faqData } from '../../../constants'
import Faq from './Faq'

// Main FAQ page component
const index = () => {
    return (
        // Outer container with padding and background styling
        <div className='w-full p-4 h-full py-20 bg-foreground text-background'>
            {/* Centered content wrapper */}
            <div className='max-w-3xl w-full mx-auto flex flex-col gap-12'>

                {/* Section header */}
                <div className='text-center w-full flex flex-col gap-2 max-w-3xl mx-auto'>
                    <h4 className='uppercase text-sm text-primary font-semibold'>FAQ</h4>
                    <h1 className='text-4xl font-semibold'>
                        Your Questions, <span className='text-primary'>Answered</span>
                    </h1>
                    <p className='text-sm text-background/70'>
                        Got Questions? We've got answers. Explore our FAQ section to find quick solutions and insights about our services, processes and more.
                    </p>
                </div>

                {/* FAQ List */}
                <div className='w-full flex flex-col gap-4'>
                    {/* Loop over FAQ data and render individual Faq components */}
                    {faqData.map((faq, index) => {
                        return <Faq key={index} question={faq.question} answer={faq.answer} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default index
