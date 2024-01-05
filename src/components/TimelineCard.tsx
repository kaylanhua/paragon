"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Card from "./Card";

export default function TimelineCard({ className = "", children, first, last, ...props }: { className?: string, children?: ReactNode, first?: boolean, last?: boolean }) {
    const ref = useRef(null);
    const [scrollPercent, setScrollPercent] = useState(-5);

    useEffect(() => {
        const func = () => {
            const el = ref.current as unknown as HTMLElement;
            const rect = el.getBoundingClientRect();

            const screenThreshold = window.innerHeight - (window.innerHeight / 5);
            const val = screenThreshold - rect.top;

            const scrollPercent = Math.max(-1, Math.min(1, val / rect.height));
            setScrollPercent(Math.round(scrollPercent * 100));
        };
        window.addEventListener("scroll", func);
        return () => window.removeEventListener("scroll", func);
    }, []);

    return (
        <div className="relative py-4 first-of-type:pt-0 last-of-type:pb-0">
            <Card className={className} {...props}>
                {children}
            </Card>
            {/* <svg ref={ref} className="absolute top-0 -left-7 w-4 h-full" viewBox="0 0 4 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {!first && <path d="M2 0V50" style={{
                    stroke: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)"
                }} strokeWidth="1" />}
                {!last && <path d="M2 50V100" stroke="white" strokeWidth="1" />}
            </svg> */}
            <div ref={ref} className="absolute top-0 -left-9 w-4 h-full">
                <div className="h-1/2 w-1 mx-auto" style={{
                    background: `linear-gradient(#476FF9 0%, #476FF9 ${scrollPercent * 2 - 15}%, #ffffff00 ${scrollPercent * 2 + 10}%)`,
                    opacity: first || scrollPercent < 0 ? 0 : 1,
                }} />
                <div className="h-1/2 w-1 mx-auto" style={{
                    background: `linear-gradient(#476FF9 0%, #476FF9 ${(scrollPercent - 50) * 2}%, #ffffff00 ${(scrollPercent - 50) * 2 + 10}%)`,
                    opacity: last || scrollPercent < 0 ? 0 : 1,
                }} />
                <div className="rounded-full h-3 w-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
                    transition: "background-color .25s",
                    backgroundColor: scrollPercent >= 45 ? "#476FF9" : "transparent",
                }} />
            </div>
        </div>
    )
}