import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react'

const Faq = ({ question, answer }) => {
    const [openIndex, setOpenIndex] = useState(false);

    return (
        <div onClick={() => setOpenIndex(!openIndex)} className={`w-full space-y-4 cursor-pointer ${!openIndex && 'border-b border-background/10'}`}>
            <div className={`p-4 rounded-2xl ${openIndex && "bg-[#d9e1fa]"}`}>
                <div className="w-full flex justify-between  gap-3 font-medium"  >
                    <span className='text-base'>{question}</span>
                    {openIndex ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
                </div>
                <p className={` text-background/70 text-xs pr-4 transition-all duration-500 ${openIndex ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>{answer}</p>
            </div>
        </div >
    );
}

export default Faq