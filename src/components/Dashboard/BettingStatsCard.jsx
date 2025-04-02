import React from 'react';

const bettingStats = [
    { label: 'Total Bets', value: '47' },
    { label: 'Win Rate', value: '15.7%' },
    { label: 'Biggest Win', value: '£145.50', positive: true },
    { label: 'Biggest Loss', value: '-£50.00', negative: true },
];

const sportDistribution = [
    { sport: 'Football', percentage: '45%' },
    { sport: 'Basketball', percentage: '30%' },
    { sport: 'F1', percentage: '25%' },
];

const BettingStatsCard = () => {
    return (
        <div className='col-span-2 hidden  bg-background shadow-md rounded-xl w-full p-4 md:grid grid-cols-2 gap-4'>
            <div className='w-full col-span-1'>
                <h3 className='text-lg font-semibold text-foreground mb-4'>Betting Overview</h3>
                <div className='grid grid-cols-2 gap-4'>
                    {bettingStats.map((stat, index) => (
                        <div key={index} className='flex flex-col gap-1 bg-foreground/5 p-3 rounded-lg'>
                            <h4 className='text-xs text-foreground/60 font-medium'>{stat.label}</h4>
                            <span className={`text-xl font-semibold ${stat.positive ? 'text-green-400' : stat.negative ? 'text-red-400' : 'text-foreground'}`}>{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full col-span-1'>
                <h3 className='text-lg font-semibold text-foreground mb-4'>Sport Distribution</h3>
                <div className=' grid grid-rows-3 gap-3 '>
                    {sportDistribution.map((sport, index) => (
                        <div key={index} className='flex justify-between row-span-1 h-full bg-foreground/5 p-3 rounded-lg'>
                            <span className='text-sm text-foreground/80'>{sport.sport}</span>
                            <span className='text-sm font-semibold text-foreground'>{sport.percentage}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BettingStatsCard;
