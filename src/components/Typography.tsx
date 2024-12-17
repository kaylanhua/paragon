import { ReactNode, CSSProperties } from "react";

// these components use specific classes so they can be easily overridden as the application demands
// see https://stackoverflow.com/questions/72148525/tailwindcss-3-classes-doesnt-override-previous-classes

interface TypographyProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export function Heading({ children, className = "", style, ...props }: TypographyProps) {
    return <h1 className={`subheading ${className}`} style={style} {...props}>{children}</h1>;
}

export function Subheading({ children, className = "", style, ...props }: TypographyProps) {
    return <h3 className={`subheading ${className}`} style={style} {...props}>{children}</h3>;
}

export function Text({ children, className = "", style, ...props }: TypographyProps) {
    return <p className={`text ${className}`} style={style} {...props}>{children}</p>;
}

export function MedText({ children, className = "", style, ...props }: TypographyProps) {
    return <p className={`text-md ${className}`} style={style} {...props}>{children}</p>;
}

export function SmallText({ children, className = "", style, ...props }: TypographyProps) {
    return <p className={`text-xl ${className}`} style={style} {...props}>{children}</p>;
}