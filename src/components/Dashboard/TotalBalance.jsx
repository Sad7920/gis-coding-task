import React from 'react'

const TotalBalance = () => {
    return (
        // Card container
        <div className='col-span-1 bg-background flex relative flex-col gap-2 shadow-md rounded-xl w-full p-4'>

            {/* Label */}
            <h3 className='text-xs text-foreground/50 font-semibold'>Total balance</h3>

            {/* Balance amount */}
            <h1 className='text-2xl font-semibold text-foreground'>£420.96</h1>

            {/* Decorative chart (area + line) using SVG */}
            <svg width="87%" height="60%" className="absolute bottom-4">

                {/* Gradient definition for the area under the curve */}
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Area fill path using gradient */}
                <path
                    d="M0,100 L20,90 L40,95 L60,85 L80,80 L100,75 L120,70 L140,65 L160,55 L180,50 L200,40 L220,35 L240,25 L260,20 L280,15 L300,10 L300,150 L0,150Z"
                    fill="url(#areaGradient)"
                ></path>

                {/* Stroke path representing the line chart */}
                <path
                    d="M0,100 L20,90 L40,95 L60,85 L80,80 L100,75 L120,70 L140,65 L160,55 L180,50 L200,40 L220,35 L240,25 L260,20 L280,15 L300,10"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                ></path>
            </svg>
        </div>
    )
}

export default TotalBalance
