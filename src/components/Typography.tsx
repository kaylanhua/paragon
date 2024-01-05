import { ReactNode } from "react";

export function Subheading({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <h3 className={`text-4xl font-semibold uppercase mb-5 ${className}`} {...props}>{children}</h3>;
}

export function Text({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <p className={`text-2xl font-light leading-relaxed ${className}`} {...props}>{children}</p>;
}

export function SmallText({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <p className={`text-xl ${className}`} {...props}>{children}</p>;
}