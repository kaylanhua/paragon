"use client";

import Image from "next/image";
import { animated, useScroll } from "react-spring";

const Y_OFFSET = -25;
const X_OFFSET = -75;
const DAMPER = 0.3;

export default function ParallaxBackground() {
    const { scrollYProgress } = useScroll();

    return <div className="h-screen w-screen fixed top-0 left-0 -z-50 overflow-hidden">
        <animated.div className="flex-row relative" style={{
            transform: scrollYProgress.to(e => {
                if (typeof window === "undefined") {
                    return `translateY(${Y_OFFSET}%) translateX(${X_OFFSET}%) rotate(45deg)`
                }
                return `translateY(${(e * -100) * DAMPER + Y_OFFSET}%) translateX(${(e * 100) * DAMPER + X_OFFSET}%) rotate(45deg)`
            })
        }}>
            {Array.from({ length: 5 }, (_, index) => (
                <div key={index} className="flex">
                    {Array.from({ length: 15 }, (_, index) => (
                        <Image
                            key={index}
                            src="/virtual_space.png"
                            width="2500"
                            height="2500"
                            alt={`test${index + 1}`}
                        />
                    ))}
                </div>
            ))}
        </animated.div>
    </div >
}