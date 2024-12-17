import HeaderLogo from '@/assets/header-logo.svg';
import Image from "next/image";

export default function Footer({ children }: { children: React.ReactNode }) {
    return (
        <footer className='p-11 h-60 flex justify-center items-center bg-newblue'>
            <div className='flex flex-col items-center text-center'>
                <Image src={HeaderLogo} alt="Paragon Logo" width={250} height={60} />
                <p className='text-gray-400'>Copyright © Paragon 2024</p>
                <p className='text-gray-400'>Website by <a href="https://www.linkedin.com/in/will-varner/">Will Varner</a> and <a href="https://georgeparks.me">George Parks</a> 
                </p>
            </div>
            <div className='w-px h-full bg-gray-600 mx-14'></div>
            {children}
        </footer>
    );
}

export function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className='mb-8 mr-8 text-center'>
            <p className='text-gray-400 font-bold text-sm mb-2'>{title}</p>
            {children}
        </div>
    );
}

export function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return <a href={href} className='text-gray-300 text-base underline block'>{children}</a>
}
