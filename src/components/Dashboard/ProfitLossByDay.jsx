import React from 'react'
import { profitLossByDayData } from '../../../constants'

const ProfitLossByDay = () => {
    return (
        // Card container for the bar chart
        <div className='col-span-2 bg-background shadow-md h-40 md:h-full rounded-xl w-full p-4'>

            {/* Section title */}
            <h3 className="text-lg font-semibold text-foreground mb-4">Profit/Loss by Day</h3>

            {/* Bar chart container */}
            <div className="flex items-end justify-between h-[70%] gap-6">
                {profitLossByDayData.map((day, index) => (
                    // Bar for each day
                    <div
                        key={index}
                        className={`flex flex-col items-center relative justify-end flex-1 
                            ${day.height} 
                            ${day.positive ? "bg-green-400" : "bg-red-400"} 
                            rounded-md`
                        }
                    >
                        {/* Value displayed above the bar */}
                        <span className="text-xs font-semibold text-white absolute -top-5">
                            {day.value}
                        </span>

                        {/* Label (day name) under the bar */}
                        <span className="text-xs text-background font-medium">
                            {day.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfitLossByDay
