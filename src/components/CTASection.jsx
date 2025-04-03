import React from 'react'

const CTASection = () => {
    return (
        <div className='px-4 py-20 w-full'>
            <div className='max-w-5xl mx-auto w-full px-4 py-8  md:py-16 cta-bg-dashed text-center bg-secondary rounded-4xl'>
                <div className='w-full max-w-xl mx-auto flex flex-col gap-6'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-background'>Bet Smarter, Win Bigger</h1>
                    <p className='text-sm text-background/60'>Leverage AI-driven insights to make informed bets. Whether you're a casual bettor or a pro, our real-time analytics and predictions give you the edge. Join now and start making smarter decisions!</p>
                    <button className='px-10  cursor-pointer py-3 bg-white w-full sm:w-fit mx-auto text-background font-medium text-base rounded-full shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg focus:ring-2 focus:ring-gray-300 focus:outline-none active:scale-95'>Try for Free</button>
                </div>
            </div>
        </div>
    )
}

export default CTASection