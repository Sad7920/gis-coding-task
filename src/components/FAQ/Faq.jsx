import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react'

// Reusable FAQ item component that toggles visibility of the answer on click
const Faq = ({ question, answer }) => {
    // State to track whether the current FAQ item is open or closed
    const [openIndex, setOpenIndex] = useState(false);

    return (
        // Wrapper div with click toggle and conditional bottom border when collapsed
        <div
            onClick={() => setOpenIndex(!openIndex)}
            className={`w-full space-y-4 cursor-pointer ${!openIndex && 'border-b border-background/10'}`}
        >
            {/* Inner container with conditional background when open */}
            <div className={`p-4 rounded-2xl ${openIndex && "bg-[#d9e1fa]"}`}>

                {/* Top row: question text + icon toggle */}
                <div className="w-full flex justify-between gap-3 font-medium">
                    <span className='text-base'>{question}</span>
                    {/* Show minus icon if open, plus if closed */}
                    {openIndex ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
                </div>

                {/* Collapsible answer with smooth height and opacity transition */}
                <p
                    className={`text-background/70 text-xs pr-4 transition-all duration-500 ${openIndex ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default Faq;
