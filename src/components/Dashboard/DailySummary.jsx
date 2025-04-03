import React from "react";
import { dailySummaryData } from "../../../constants";

const DailySummary = () => {
    return (
        <div className=' col-span-1 bg-background shadow-md rounded-xl w-full p-4'>
            <h3 className="text-lg font-semibold text-foreground mb-4">Daily Summary</h3>
            <div className="grid grid-cols-1 gap-4 start-end">
                {dailySummaryData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 bg-foreground/5 rounded-lg px-4 py-2">
                        <h4 className="text-xs text-foreground/70 font-medium">{item.label}</h4>
                        <span
                            className={`text-xl font-semibold ${item.positive ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailySummary;
