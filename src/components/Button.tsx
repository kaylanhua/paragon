import Link from "next/link";
import { ReactNode } from "react";

const styles: { [key: string]: string } = {
    primary: "border-[.2rem] bg-secondary border-secondary border-primary-gradient bg-opacity-15 hover:bg-opacity-40 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
    secondary: "border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
    noBorder: "border-0 hover:bg-white hover:bg-opacity-10 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
    "topbar-menu": "border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase md:w-36 md:h-16 w-24 h-12 md:text-base text-sm text-center",
    custom: ""
}

export default function Button({ children, className = "", style = "primary", url, inNewTab = false, ...props }: { children: ReactNode, className?: string, style?: string, url?: string, inNewTab?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    const button = <button className={`transition-all flex items-center rounded-2xl ${styles[style] || ""} ${className}`} {...props}>{children}</button>;

    // This wraps the button in a link only if a url is provided, avoiding the need to duplicate the button code
    return (url != undefined ? <Link href={url} target={inNewTab ? "_blank" : undefined}>
        {button}
    </Link> : button);
}