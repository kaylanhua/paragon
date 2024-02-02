"use client";

import { ReactNode, useRef} from "react";
import Card from "./Card";

{/* This is a modification of TimeLineCard that basically just doesn't have the left line,
it's centered too and is for more concise info but keeps the cool effects and design. */}


export default function TimelineCard({ className = "", children, ...props }: { className?: string, children?: ReactNode, first?: boolean, last?: boolean }) {
    const ref = useRef(null);

    return (
        <div ref={ref} className="relative py-4">
            <Card className={`${className}`} {...props}>
                {children}
            </Card>
            {/* at some point make it so the little bit of blue doesn't show up from the gradient at the top of the bar */}
        </div>
    )
}