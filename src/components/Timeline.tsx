import React from "react";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Desktop Timeline */}
      <div className="hidden md:flex relative items-center justify-between w-full py-8">
        {/* Line connecting the events */}
        <div className="absolute transform -translate-y-8 w-full h-1 bg-gray-200 z-0"></div>
        
        {/* Render each event */}
        {events.map((event, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            {/* Diamond Icon */}
            <div className="w-4 h-4 bg-blue-500 transform rotate-45 mb-2"></div>
            {/* Event Date */}
            <p className="text-sm font-bold">{event.date}</p>
            {/* Event Title */}
            <p className="text-sm font-light text-center max-w-[70%]">{event.title}</p>
            {/* Event Description */}
            <p className="text-sm text-gray-600 text-center">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden flex flex-col space-y-8 py-4 relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200"></div>
        
        {/* Render each event */}
        {events.map((event, index) => (
          <div key={index} className="flex items-start pl-12 relative">
            {/* Diamond Icon */}
            <div className="absolute left-2.5 top-1 w-4 h-4 bg-blue-500 transform rotate-45"></div>
            
            {/* Event Content */}
            <div className="flex flex-col">
              {/* Event Date */}
              <p className="text-sm font-bold mb-1">{event.date}</p>
              {/* Event Title */}
              <p className="text-sm font-light mb-1">{event.title}</p>
              {/* Event Description */}
              {event.description && (
                <p className="text-sm text-gray-600">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}