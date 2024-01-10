import { ComponentProps } from "react";
import { IconType } from "react-icons";

const HEIGHT = 36;

export default function CornerDecoration({ icon, uniqueId = "mask", style = {}, pattern = [6, 5, 5, 4, 3], children, ...props }: { icon?: IconType, uniqueId: string, style?: React.CSSProperties, pattern?: number[], children?: React.ReactNode } & ComponentProps<"div">) {
    const GRID_SIZE = HEIGHT + 4; // Adjust the grid size as needed
    const TOTAL_W = GRID_SIZE * Math.max(...pattern);
    const TOTAL_H = GRID_SIZE * pattern.length;

    return (
        <>
            <div className="md:hidden block">
                {icon && icon({ className: "text-secondary opacity-40 absolute top-4 right-4", size: HEIGHT, key: uniqueId })}
            </div>
            <div className="absolute top-6 right-6 h-full md:block hidden" {...props}>
                <svg className="h-full" style={{
                    height: `${TOTAL_H}px`,
                    width: `${TOTAL_W}px`,
                    ...style
                }}>
                    <defs>
                        <linearGradient id={uniqueId + "-gradient"} x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor: "#222940",
                                stopOpacity: 0,
                            }} />
                            <stop offset="100%" style={{
                                stopColor: "#476FF9",
                                stopOpacity: .6,
                            }} />
                        </linearGradient>
                    </defs>
                    <mask id={uniqueId}>
                        {children || pattern.map((num, i) => {
                            return (
                                <g key={`${i}-${uniqueId}`}>
                                    {Array.from({ length: num }, (_, index) => {
                                        const x = TOTAL_W - (index * GRID_SIZE) - GRID_SIZE;
                                        const y = i * GRID_SIZE;
                                        //@ts-expect-error The `key` I hack in here is not expected by the incorrectly defined Icon type
                                        return icon({ className: "text-white", size: HEIGHT, x, y, key: `${i}-${index}` });
                                    })}
                                </g>
                            );
                        })}
                    </mask>
                    <rect width="100%" height="100%" fill={`url(#${uniqueId + "-gradient"})`} mask={`url(#${uniqueId})`} />
                </svg>
            </div>
        </>
    );
}