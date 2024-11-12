import { MenuOption, defaultMenuOptions } from "@/app/constants";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RiCloseLine } from "react-icons/ri";
import PARAGON_P from '../assets/paragon-p.svg';
import Button from "./Button";
import { Text } from "./Typography"; 

export default function Menu({ openState, menuOptions = [] }: { openState: [boolean, Dispatch<SetStateAction<boolean>>], menuOptions?: MenuOption[] }) {
    return <div className={`fixed top-0 left-0 w-screen h-screen menu-gradient bg-opacity-95 z-50 flex justify-center items-center ${openState[0] ? 'menu-animate-active' : ''} menu-animate`}>
        <div className='flex flex-col space-y-4'>
            <a href="./">
                <Image 
                    src={PARAGON_P} 
                    alt="Paragon Fellowship" 
                    className="md:h-24 h-16 aspect-square object-contain" 
                />
            </a>
            {(menuOptions.length > 0 ? menuOptions : defaultMenuOptions).map((option, i) => <a
                key={i}
                href={option.url}
                className={'md:text-4xl text-3xl text-white uppercase font-medium hover:text-muted cursor-pointer transition-all duration-300 ease-in-out'}
                onClick={() => openState[1](false)}>
                {option.name}
            </a>)}
        </div>
        <div className='absolute top-0 right-0 p-8'>
            <Button style='topbar-menu'
                onClick={() => openState[1](false)}>
                <Text className='w-full text-center flex items-center justify-center md:text-lg text-sm'>
                    <RiCloseLine className='mr-2' /> Close</Text>
            </Button>
        </div>
    </div>;
}
