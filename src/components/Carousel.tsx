"use client";

import { ComponentProps, useEffect, useRef } from "react";

export default function Carousel({ children, speed = 1, className = "", ...props }: { children: React.ReactNode, className?: string, speed?: number } & ComponentProps<"div">) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let currentScroll = 0;
        let stop = false;
        const element = ref.current as HTMLDivElement;

        const step = () => {
            const firstChild = element.children[0];
            if (!firstChild) return;

            const firstChildWidth = firstChild.clientWidth;
            if (currentScroll >= firstChildWidth + 20) {
                currentScroll -= firstChildWidth;
                element.removeChild(firstChild);
                element.appendChild(firstChild);
            } else {
                currentScroll += speed;
                element.style.transform = `translateX(-${currentScroll}px)`;
            }

            if (!stop) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        return () => { stop = true };
    }, []);

    return <div className={`w-full h-52 relative overflow-hidden ${className}`} {...props}>
        <div className="flex items-center h-full" ref={ref}>
            <div className="flex items-center h-full flex-shrink-0">{children}</div>
            <div className="flex items-center h-full flex-shrink-0">{children}</div>
        </div>
        <div className='absolute top-0 -right-3 w-24 h-full bg-gradient-to-r from-transparent to-dark' />
        <div className='absolute top-0 -left-3 w-24 h-full bg-gradient-to-l from-transparent to-dark' />
    </div>
}

