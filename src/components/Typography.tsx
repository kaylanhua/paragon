import { ReactNode } from "react";

// these components use specific classes so they can be easily overridden as the application demands
// see https://stackoverflow.com/questions/72148525/tailwindcss-3-classes-doesnt-override-previous-classes

export function Subheading({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <h3 className={`subheading ${className}`} {...props}>{children}</h3>;
}

export function Text({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <p className={`text ${className}`} {...props}>{children}</p>;
}

export function SmallText({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <p className={`text-xl ${className}`} {...props}>{children}</p>;
}