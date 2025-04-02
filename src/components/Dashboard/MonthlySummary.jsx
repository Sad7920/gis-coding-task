import React from 'react'

const januarySummaryData = [
    { label: 'Total Profit', value: '£309.15', icon: '📈', positive: true },
    { label: 'Win Rate', value: '32.0%', icon: '%' },
    { label: 'Biggest Win', value: '£262.50', icon: '⬆', positive: true },
    { label: 'Biggest Loss', value: '£49.60', icon: '⬇', negative: true },
    { label: 'Average Stake', value: '£16.92', icon: '💰' },
    { label: 'Average Odds', value: '71.11', icon: '%' },
]

const MonthlySummary = () => {
    return (
        <div className='bg-background shadow-md rounded-xl p-4 w-full '>
            <h3 className='text-lg font-semibold text-foreground mb-4 ml-2'>Jan 2025 Summary</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4'>
                {januarySummaryData.map((item, index) => (
                    <div key={index} className='flex justify-between p-2 bg-foreground/5 rounded-lg'>
                        <div className='flex items-center gap-2 text-foreground '>
                            <span className={`text-sm ${item.positive ? 'text-green-400' : item.negative ? 'text-red-400' : 'text-foreground'}`}>{item.icon}</span>
                            <span className='text-sm text-foreground/60 font-medium'>{item.label}</span>
                        </div>
                        <div className={`text-2xl font-semibold mt-2 ${item.positive ? 'text-green-400' : item.negative ? 'text-red-400' : 'text-foreground'}`}>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MonthlySummary