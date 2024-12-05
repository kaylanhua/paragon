"use client";
import Image from "next/image";
import Link from "next/link";
import HEADER_LOGO from '../assets/header-logo.svg';
import { MedText } from "./Typography";


export default function TopBar() {

    return <>
        <div className='fixed top-0 left-0 p-8 flex w-screen z-50 justify-between'>
            <div className='absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-dark to-transparent' />
            <Link href='/'><Image src={HEADER_LOGO} alt="Paragon Fellowship" className='h-20 w-60 object-contain' /></Link>
            <div className="space-x-8 uppercase text-white flex items-center justify-center">
            <Link href="/">
                <MedText>About</MedText>
            </Link>
            <Link href="/team">
                <MedText>Team</MedText>
            </Link>
            <Link href="/governments">
                <MedText>Governments</MedText>
            </Link>
            <Link href="/projects">
                <MedText>Projects</MedText>
            </Link> 
            <Link href="mailto:paragonfellowship@gmail.com">
                <MedText>Contact</MedText>
            </Link>
            </div>
            {/* old menu button that expands to nice new stuff but v2.2 says no sir! <div className=''>
                <Button style='topbar-menu'
                    onClick={() => openState[1](true)}>
                    <Text className='w-full text-center flex items-center justify-center md:text-lg text-sm'>
                        <RiMenu2Fill className='mr-2' /> Menu</Text>
                </Button>
            </div>
            <Menu openState={openState} /> */}
        </div>
    </>
}