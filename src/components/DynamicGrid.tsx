import React from "react";

//This is the worst thing I've ever made. I will fix it one day but this is going to be a v0.0.0.0.0.1 


export default function DynamicGrid() {
    const lineCount = 13; // Number of vertical lines
    const hoCount = lineCount * .5;
  
    // Calculate line positions (percentages for spacing)
    const lines = Array.from({ length: lineCount }, (_, i) => {
      const position = (i / (lineCount - 1)) * 100; // Evenly spaced plus 7 cuz math doesnt work ???
      return position;
    });

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Here's the top lines just some nice pretty lines*/}
        <div className="absolute top-0 left-0 w-full h-[65%]">
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
  
        {/* Bottom Section: 35% Height */}
      <div className="absolute bottom-0 left-0 w-full h-[35%]">
        {/* Horizontal Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: hoCount }, (_, i) => {
                const position = ((i / (hoCount - 1)) * 100) + (i > 0 ? 10 : 0); // Evenly spaced
                const spacing = position * position / 90; // Increase spacing quadratically
                return (
                    <div
                        key={`horizontal-${i}`}
                        className="absolute w-full h-[1px] bg-white/10"
                        style={{ top: `${spacing}%` }}
                    ></div>
                );
            })}
        
        </div>

        {/* Vertical Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
            
          {Array.from({ length: (lineCount / 2) - (lineCount %2)*.5 - 1}, (_, i) => {
            const position = (i / (lineCount - 1)) * 100 -2.5; // Evenly spaced plus 7 cuz math doesnt work ???
            return (
              <div
                key={`vertical-${i}`}
                className={'absolute h-full w-[1px] bg-white/10 skew-x-[-50deg]'}
                style={{ left: `${position}%` }}
              ></div>
            );
          },)}
            <div
            className={'absolute h-full w-[1px] bg-white/10'}
            style={{ left: `50%` }}
            ></div>
            {Array.from({ length: (lineCount / 2) - (lineCount %2)*.5 - 1}, (_, i) => {
            const position = (i / (lineCount - 1)) * 100 -2.5; // Evenly spaced plus 7 cuz math doesnt work ???
            return (
              <div
                key={`vertical-${i}`}
                className={'absolute h-full w-[1px] bg-white/10 skew-x-[50deg]'}
                style={{ right: `${position}%` }}
              ></div>
            );
          },)}
        </div>
      </div>
    </div>
  );
}