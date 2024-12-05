import React from "react";

interface BgGridProps {
    lineCount?: number;
}

export default function BgGrid({ lineCount = 13 }: BgGridProps) {
  
    // Calculate line positions (percentages for spacing)
    const lines = Array.from({ length: lineCount }, (_, i) => {
        const position = (i / (lineCount - 1)) * 100; // Evenly spaced plus 7 cuz math doesnt work ???
        return position;
    });

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            {/* Here's the top lines just some nice pretty lines*/}
            <div className="absolute top-0 left-0 w-full h-full">
                {lines.map((position, i) => (
                    <div
                        key={`vertical-${i}`}
                        className="absolute h-full w-[1px] bg-white/10"
                        style={{ left: `${position}%` }}
                    ></div>
                ))}
                {lines.map((position, i) => (
                    <div
                        key={`horizontal-${i}`}
                        className="absolute w-full h-[1px] bg-white/10"
                        style={{ top: `${position}%` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}