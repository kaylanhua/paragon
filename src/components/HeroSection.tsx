import { RiArrowDownLine } from "react-icons/ri";
import { Text } from "./Typography";
import Button from "./Button";
import { MAIL_LIST_URL, FA_APP_URL } from "../constants";

const currentlyApplying = true;

export default function HeroSection() {
    // WORD OF WARNING!! There is some arcane ass shit with the animations involving nth-of-type selectors, so
    // the order actually matters for these components. Beware and look at hero-text-fadein in globals.css
    // before making any edits :) 

    return <section className="relative flex w-full md:py-10 py-10 h-[100svh] justify-center items-center">
        <div className={`md:w-[1350px] w-screen max-w-[85vw] mx-10 hero-text-fadein`}>
        <div className="w-full">
        <div>
          <Text className="w-full text-[7vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium flex justify-center">
            building the
          </Text>
        </div>
        <div>
          <Text className="w-full text-[7vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium flex justify-center">
            next generation of
          </Text>
        </div>
        <div>
          <Text className="w-full text-[7vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium italic flex justify-center">
            tech policy leaders
          </Text>
        </div>
      </div>
            <div className='flex space-x-4 mt-4 justify-center'>
            {currentlyApplying && (
              <Button style="secondary" inNewTab url={FA_APP_URL}>APPLY FOR SPRING 2025</Button>
            )}
            <Button  style="secondary" inNewTab url={MAIL_LIST_URL}>JOIN MAILING LIST</Button>
          </div>
            <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
            <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
        </div>
    </section>
}