"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Card from "./Card";

{/* This is a modification of TimeLineCard that basically just doesn't have the left line,
it's centered too and is for more concise info but keeps the cool effects and design. */}


export default function TimelineCard({ className = "", children, first, last, ...props }: { className?: string, children?: ReactNode, first?: boolean, last?: boolean }) {
    const ref = useRef(null);
    const [scrollPercent, setScrollPercent] = useState(-5);

    useEffect(() => {
        const func = () => {
            const el = ref.current as unknown as HTMLElement;
            const rect = el.getBoundingClientRect();

            const screenThreshold = window.innerHeight - (window.innerHeight / 3);
            const val = screenThreshold - rect.top;

            const scrollPercent = Math.max(-1, Math.min(1, val / rect.height));
            setScrollPercent(Math.round(scrollPercent * 100));
        };
        window.addEventListener("scroll", func);
        return () => window.removeEventListener("scroll", func);
    }, []);

    return (
        <div ref={ref} className="relative py-4">
            <Card className={`${className}`} {...props}>
                {children}
            </Card>
            {/* at some point make it so the little bit of blue doesn't show up from the gradient at the top of the bar */}
        </div>
    )
}