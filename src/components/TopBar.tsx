"use client";
import Image from "next/image";
import Link from "next/link";
import HEADER_LOGO from '../assets/header-logo.svg';
import { MedText } from "./Typography";
import { RiArrowRightLine } from "react-icons/ri";

export default function TopBar() {
    return <>
        <div className='fixed top-0 left-0 p-8 flex w-screen z-50 justify-between'>
            <div className='absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-dark to-transparent' />
            <Link href=''><Image src={HEADER_LOGO} alt="Paragon Fellowship" className='h-20 w-60 object-contain' /></Link>
            <div className="space-x-8 uppercase text-white flex items-center justify-center">
                <Link href="/">
                    <MedText>About</MedText>
                </Link>
                <div className="relative group">
                    <Link href="/team">
                        <MedText>Team</MedText>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-hover:block pt-2 w-48">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Link href="/team" className="block px-4 py-2 text-dark hover:bg-gray-100 flex items-center">
                                <RiArrowRightLine className="mr-2" />
                                <span>Organizing Team</span>
                            </Link>
                            <Link href="/team/speakers" className="block px-4 py-2 text-dark hover:bg-gray-100 flex items-center">
                                <RiArrowRightLine className="mr-2" />
                                <span>Past Speakers</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href="/students">
                    <MedText>Students</MedText>
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
        </div>
    </>
}