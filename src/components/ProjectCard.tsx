"use client";

import { ReactNode } from "react";
import Card from "./Card";

type ProjectCardProps = {
  className?: string;
  children?: ReactNode;
  timeline: string;
  projectTitle: string;
};

export default function ProjectCard({ className = "", timeline, projectTitle, ...props }: ProjectCardProps) {
  return (
    <Card
      className={`min-h-[12rem] md:h-[15rem] items-left text-left px-4 md:px-6 py-6 md:py-8 border rounded-lg transition-colors hover:bg-opacity-90 bg-newblue text-white flex flex-col relative ${className}`}
      {...props}
    >
      {/* Timeline */}
      <p className="text-sm md:text-sm font-light uppercase mb-3 md:mb-2">
        {timeline}
      </p>
      
      {/* Project Title - added line clamp for longer titles */}
      <p className="uppercase text-lg md:text-xl font-light tracking-wide text-white bg-navy flex-grow line-clamp-3 mb-4 md:mb-0">
        {projectTitle}
      </p>
      
      {/* See More Link - positioned at bottom */}
      <p className="uppercase text-sm md:text-sm font-light mt-auto">
        see more &raquo;
      </p>
    </Card>
  );
}