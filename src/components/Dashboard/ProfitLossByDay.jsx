import React from 'react'

const profitLossByDayData = [
    { label: "Mon", value: "+£45", height: "h-[60%]", positive: true },
    { label: "Tue", value: "-£20", height: "h-[30%]", negative: true },
    { label: "Wed", value: "+£65", height: "h-[80%]", positive: true },
    { label: "Thu", value: "+£30", height: "h-[40%]", positive: true },
    { label: "Fri", value: "-£15", height: "h-[20%]", negative: true },
]

const ProfitLossByDay = () => {
    return (
        <div className='col-span-2 bg-background shadow-md h-40 md:h-full rounded-xl w-full p-4'>
            <h3 className="text-lg font-semibold text-foreground mb-4">Profit/Loss by Day</h3>
            <div className="flex items-end justify-between h-[70%] gap-6">
                {profitLossByDayData.map((day, index) => (
                    <div key={index} className={`flex flex-col items-center relative justify-end flex-1 ${day.height} ${day.positive ? "bg-green-400" : "bg-red-400"} rounded-md`}>
                        <span className="text-xs font-semibold text-white absolute -top-5">{day.value}</span>
                        <span className="text-xs text-background font-medium">{day.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfitLossByDay