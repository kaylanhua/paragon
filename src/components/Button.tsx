import Link from "next/link";
import { ReactNode } from "react";

const styles: { [key: string]: string } = {
    primary: "bg-white border-[.2rem] bg-white border-secondary border-primary-gradient bg-opacity-85 hover:bg-opacity-100 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
    secondary: "bg-white border-[.2rem] hover:bg-gray hover:bg-opacity-85 uppercase md:text-md text-sm md:px-5 px-2 md:py-3 py-1",
    noBorder: "border-0 hover:bg-white hover:bg-opacity-0 uppercase md:text-2xl text-lg md:px-16 px-10 md:py-5 py-4",
    "topbar-menu": "border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase md:w-36 md:h-16 w-24 h-12 md:text-base text-sm text-center",
    custom: ""
}

export default function Button({ children, className = "", style = "primary", url, inNewTab = false, ...props }: { children: ReactNode, className?: string, style?: string, url?: string, inNewTab?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    const button = <button className={`transition-all flex items-center rounded-sm bg-white text-newblue ${styles[style] || ""} ${className}`} {...props}>{children}</button>;

    // This wraps the button in a link only if a url is provided, avoiding the need to duplicate the button code
    return (url != undefined ? <Link href={url} target={inNewTab ? "_blank" : undefined}>
        {button}
    </Link> : button);
}