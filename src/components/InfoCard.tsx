"use client";

import { ReactNode } from "react";
import Card from "./Card";

{/* This is a modification of TimeLineCard that basically just doesn't have the left line,
it's centered too and is for more concise info but keeps the cool effects and design. */}


export default function TimelineCard({ className = "", children, ...props }: { className?: string, children?: ReactNode, first?: boolean, last?: boolean }) {
    return (
        <Card className={`md:h-[22rem] items-center grow-0 md:text-2xl text-lg font-light uppercase ${className}`} {...props}>
            {children}
        </Card>
    )
}