import { ReactNode } from "react";

export default function Section({ children, className = "", backgroundChildren }: { children: ReactNode, className?: string, backgroundChildren?: ReactNode }) {
    return <section className="relative flex w-full md:py-20 py-10 min-h-14 justify-center">
        {backgroundChildren}
        <div className={`md:w-[1150px] w-screen max-w-[85vw] mx-10 ${className}`}>
            {children}
        </div>
    </section>;
}