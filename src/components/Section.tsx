import { ReactNode } from "react";

export default function Section({ children, className = "", backgroundChildren }: { children: ReactNode, className?: string, backgroundChildren?: ReactNode }) {
    return <section className="relative flex w-full my-16 min-h-14 justify-center">
        {backgroundChildren}
        <div className={`w-[1150px] mx-10 ${className}`}>
            {children}
        </div>
    </section>;
}