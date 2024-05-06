"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import HEADER_LOGO from '../assets/header-logo.svg';
import Button from "./Button";
import Menu from "./Menu";
import { Text } from "./Typography";


export default function TopBar() {
    const openState = useState(false);

    return <>
        <div className='fixed top-0 left-0 p-8 flex w-screen z-50 justify-between'>
            <div className='absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-dark to-transparent' />
            <Link href='/'><Image src={HEADER_LOGO} alt="Paragon Fellowship" className='h-12 w-36 object-contain' /></Link>
            {/* <div className='space-x-8 uppercase mt-2 md:flex hidden'>
                <Text>For Students</Text>
                <Text>Projects</Text>
                <Text>For Governments</Text>
            </div> */}
            {/* <div className='md:block hidden'>
                <Button style='custom'
                    className='border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase w-36 h-12 text-sm text-center'
                    url={""}>
                    <Text className='text-sm w-full text-center'>Contact us</Text>
                </Button>
            </div> */}
            <div className=''>
                <Button style='topbar-menu'
                    onClick={() => openState[1](true)}>
                    <Text className='w-full text-center flex items-center justify-center md:text-lg text-sm'>
                        <RiMenu2Fill className='mr-2' /> Menu</Text>
                </Button>
            </div>
            <Menu openState={openState} />
        </div>
    </>
}