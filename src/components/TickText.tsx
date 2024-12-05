"use client";
import React, { useEffect, useState, useRef } from 'react';

interface TickTextProps {
    text: number;
    className?: string;
    suffix?: string;
}

const TickText: React.FC<TickTextProps> = ({ text, className, suffix }) => {
    const [displayedValue, setDisplayedValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const duration = 1250;
        const end = text;
        const frameRate = 1000 / 60; // 60 frames per second
        const totalFrames = Math.round(duration / frameRate);
        const easeOutQuad = (t: number) => t * (2 - t);
        const easeOutSlowEnd = (t: number) => t < 0.9 ? easeOutQuad(t) : 1 - Math.pow(1 - t, 3);

        const tick = () => {
            start++;
            const progress = easeOutSlowEnd(start / totalFrames);
            const currentValue = Math.round(end * progress);
            setDisplayedValue(currentValue);

            if (start < totalFrames) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [text, hasAnimated]);

    return (
        <span ref={elementRef} className={className}>
            {displayedValue}{suffix}
        </span>
    );
};

export default TickText;