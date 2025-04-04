import React from "react";
import { dailySummaryData } from "../../../constants"; // Importing daily summary data

const DailySummary = () => {
    return (
        // Container for the Daily Summary card with a background, shadow, and rounded corners
        <div className='col-span-1 bg-background shadow-md rounded-xl w-full p-4'>

            {/* Heading for the Daily Summary Section */}
            <h3 className="text-lg font-semibold text-foreground mb-4">Daily Summary</h3>

            {/* Grid layout to display daily summary items */}
            <div className="grid grid-cols-1 gap-4 start-end">
                {dailySummaryData.map((item, index) => (
                    // Individual summary item with a background and padding
                    <div key={index} className="flex flex-col gap-1 bg-foreground/5 rounded-lg px-4 py-2">

                        {/* Label for the summary item */}
                        <h4 className="text-xs text-foreground/70 font-medium">{item.label}</h4>

                        {/* Value with conditional styling based on whether it's positive or negative */}
                        <span className={`text-xl font-semibold ${item.positive ? "text-green-400" : "text-red-400"}`}>
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailySummary;
