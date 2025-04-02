import HeaderLogo from '@/assets/header-logo.svg';
import Image from "next/image";

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className='p-6 md:p-11 min-h-[15rem] bg-newblue'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col items-center text-center mb-8 md:mb-0'>
          <Image src={HeaderLogo} alt="Paragon Logo" width={250} height={60} />
          <p className='text-gray-400 mt-2'>© 2024 The Paragon Policy Fellowship</p>
        </div>
        
        <div className='hidden md:block w-px h-full bg-gray-600 mx-14'></div>
        
        <div className='pt-5 flex flex-col md:flex-row items-center md:items-start'>
          {children}
        </div>
      </div>
    </footer>
  );
}

export function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className='mb-8 md:mr-8 text-center md:text-left'>
      <p className='text-gray-400 font-bold text-sm mb-2'>{title}</p>
      {children}
    </div>
  );
}

export function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className='text-gray-300 text-base underline block hover:text-white transition-colors'
    >
      {children}
    </a>
  );
}
