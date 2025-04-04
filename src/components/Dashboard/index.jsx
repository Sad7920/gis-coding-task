import React from 'react'
import BettingStatsCard from './BettingStatsCard'
import DailySummary from './DailySummary'
import MonthlySummary from './MonthlySummary'
import ProfitLossByDay from './ProfitLossByDay'
import TotalBalance from './TotalBalance'

const index = () => {
    return (
        // Main container with padding and full height for large screens
        <div className='w-full p-8 h-full lg:h-screen py-20 '>

            {/* Wrapper to center content and manage layout */}
            <div className='max-w-6xl w-full mx-auto flex flex-col gap-12'>

                {/* Header Section */}
                <div className='text-center w-full flex flex-col gap-2'>
                    <h4 className='uppercase text-sm text-secondary font-semibold'>Unlocking Value</h4>
                    <h1 className=' text-4xl font-semibold '>Real-Time Analytics Dashboards</h1>
                </div>

                {/* Dashboard Grid Layout */}
                <div className="rounded-xl bg-foreground/5 grid md:mx-8 grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-2 lg:gap-4 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">

                    {/* Monthly Summary Section (Occupies one column in large screens) */}
                    <MonthlySummary />

                    {/* Right Section: Grid layout for multiple components */}
                    <div className='grid-rows-2 grid gap-2 lg:gap-4 col-span-2 w-full'>

                        {/* First Row: Total Balance & Profit/Loss Chart */}
                        <div className='grid-cols-1 md:grid-cols-3 w-full grid gap-y-2 md:gap-2 lg:gap-4'>
                            <TotalBalance />
                            <ProfitLossByDay />
                        </div>

                        {/* Second Row: Betting Stats & Daily Summary */}
                        <div className='grid-cols-1 md:grid-cols-3 w-full grid gap-2 lg:gap-4'>
                            <BettingStatsCard />
                            <DailySummary />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default index
