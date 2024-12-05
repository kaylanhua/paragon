import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    backgroundChildren?: ReactNode;
    id?: string;
}

export default function Section({ children, className = "", backgroundChildren, id }: SectionProps) {
    return (
        <section className="relative flex w-full md:py-10 py-10 min-h-14 justify-center">
            {backgroundChildren}
            <div id={id} className={`md:w-[1150px] w-screen max-w-[85vw] mx-10 pb-[5%] ${className}`}>
                {children}
            </div>
        </section>
    );
}