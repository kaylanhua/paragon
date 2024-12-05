import React from "react";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative flex items-center justify-between w-full py-8">
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
  );
}