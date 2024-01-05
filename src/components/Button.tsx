import { ReactNode } from "react";

export default function Button({ children, className = "", ...props }: { children: ReactNode, className?: string }) {
    return <button className={`text-2xl bg-secondary border-secondary border-[.2rem] rounded-2xl bg-opacity-15 px-12 py-6 uppercase border-primary-gradient ${className}`} {...props}>{children}</button>
}