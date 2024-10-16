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
            className={`md:h-[15rem] items-left text-left px-6 py-8 border rounded-lg transition-colors hover:bg-opacity-90 bg-dark-blue text-white flex flex-col${className}`} 
            {...props}
        >
            <p className="text-md md:text-sm font-light uppercase">
                {timeline}
            </p>
            <p className="uppercase md:text-xl font-light tracking-wide text-white bg-navy flex-grow">
                {projectTitle}
            </p>
            <p className="uppercase text-md md:text-sm font-light justify-end mt-auto">
                see more &raquo;
            </p>
        </Card>
    );
}