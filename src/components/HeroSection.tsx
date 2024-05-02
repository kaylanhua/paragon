import { RiArrowDownLine } from "react-icons/ri";
import { Text } from "./Typography";

export default function HeroSection() {
    // WORD OF WARNING!! There is some arcane ass shit with the animations involving nth-of-type selectors, so
    // the order actually matters for these components. Beware and look at hero-text-fadein in globals.css
    // before making any edits :) 

    return <section className="relative flex w-full md:py-10 py-10 h-[100svh] justify-center items-center">
        <div className={`md:w-[1350px] w-screen max-w-[85vw] mx-10 hero-text-fadein`}>
            <div><Text className='md:max-w-[60%] w-full md:text-6xl text-4xl uppercase md:mb-24 mb-20 font-medium'>We empower students to make real policy impact.</Text></div>
            <div><Text className='md:max-w-[70%] w-full md:text-6xl text-4xl uppercase ml-auto md:text-right font-medium' >ready to shape the future of <span className='text-gradient'>tech policy?</span></Text></div>
            <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
            <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
        </div>
    </section>
}