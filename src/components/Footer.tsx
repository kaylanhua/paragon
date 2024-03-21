import HeaderLogo from '@/assets/header-logo.svg';
import Image from "next/image";

export default function Footer({ children }: { children: React.ReactNode }) {
    return <footer className='p-11 h-60 relative flex justify-center' >
        <div className='flex h-full md:w-[1150px]'>
            <div className='flex flex-col md:items-end'>
                <Image src={HeaderLogo} alt="Paragon Logo" className='w-[250px]' />
                <p className='text-gray-600 md:text-right'>Copyright © Paragon 2024</p>
                <p className='text-gray-600 md:text-right'>Website by <a href="https://georgeparks.me">George Parks</a><br></br>and <a href="https://georgeparks.me">Will Varner</a></p>
            </div>
            <div className='md:flex hidden h-full'>
                <div className='w-px h-full bg-gray-600 mx-14'></div>
                {children}
            </div>
        </div>
        <div className='absolute -z-20 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-darker' />
    </footer>
}

export function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
    return <div className='mb-8 mr-8'>
        <p className='text-gray-500 font-bold text-sm mb-2'>{title}</p>
        {children}
    </div>
}

export function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return <a href={href} className='text-gray-300 text-base underline block'>{children}</a>
}