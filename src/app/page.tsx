"use client";
import Carousel from "../components/Carousel";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const carouselItems = [
    { image: `/harv_logo.png`, alt: "Harvard" },
    { image: "/brown.png", alt: "Brown" },
    { image: "/IIT.jpeg", alt: "IIT" },
    { image: "/penn.png", alt: "UPenn" },
    { image: "/stanford.png", alt: "Stanford" },
    { image: "/GT.png", alt: "Georgia Tech" },
    { image: "/RISD.svg", alt: "RISD" },
    { image: "/UGA.png", alt: "UGA" },
    { image: "/Yale.png", alt: "Yale" },
    // Add more items as needed
  ];
  
  const parallaxRef = React.useRef<any>(null);
  const [offset, setOffset] = useState(0);

  // GHOST SCROLLING LMAO
  // useEffect(() => {
  //   let incr = 0.01;
  //   const intervalId = setInterval(() => {
  //     setOffset((prevOffset) => {
  //       if (prevOffset >= 0.3 ||  prevOffset < 0) {
  //         incr = -1 * incr;
  //       }
  //       return prevOffset + incr;
  //     });
  //     if (parallaxRef.current) {
  //       parallaxRef.current.scrollTo(offset);
  //     }
  //   }, 100);

  //   return () => clearInterval(intervalId);
  // }, [offset]);

  return (
    <main className="flex min-h-screen justify-between p-24">
      <Parallax ref={parallaxRef} pages={2} style={{ top: '0', left: '0' }}>
        {/* <div className="flex-2 flex-col lg:flex-col">
            <ParallaxLayer offset={0} speed={0.5}>
                <Image src="/virtual_space.png" width="500" height="500" alt="test1"/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={1}>
                <Image src="/virtual_space.png" width="100" height="100" alt="test2"/>
            </ParallaxLayer>
        </div> */}
      
      <div className="z-10 max-w-5xl w-1/2 items-center justify-between font-mono text-sm lg:flex-col">
        <h1 className="text-6xl font-bold">PARAGON POLICY FELLOWSHIP</h1>
        <h2 className="text-l font-bold">BRINGING STUDENTS TO TECH POLICY</h2>
        <br />
        <br />
        <p>
          SHAPE THE FUTURE OF TECHNOLOGY THROUGH SEMESTER PROJECTS WITH STATE
          AND LOCAL GOVERNMENTS.
        </p>
        <br />
        <form style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" style={{backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #fff', marginRight: '10px', padding: '5px 0', width: '60%'}} placeholder="Enter your college email" />
          <button type="submit" style={{backgroundColor: 'transparent', border: 'none'}}>
            {/* placeholder */}
            <img src="/right-arrow.png" alt="Submit" style={{width: '20px', height: '20px'}} />
          </button>
        </form>
      </div>
      <br />
      <br />
      <div style={{ paddingTop: '100px' }}>
        <h2 className="text-left text-5xl font-medium">ABOUT</h2>
        <div className="pt-3 pb-10">
        The Paragon Fellowship aims to connect students with opportunities in
        tech policy research. Fellows will work on term-time tech policy
        projects where they dedicate about 5 hours/week during the semester to
        produce a policy brief on the applications of digital technology in
        state and local governments. Eventually, we hope to bring these fellows
        together in an annual summit to share ideas and create a more robust,
        nationwide community.
      </div>
      <hr class="pt-10" />
      <h2 class="text-left text-2xl font-medium">
        WHAT DOES A PROJECT LOOK LIKE?
      </h2>
      <div class="pb-10">
        Environmental permits are known to be a time-consuming and complicated
        process. AI adoption in this process could significantly increase the
        productivity of government officials. To help state and local
        governments explore such AI use cases, Paragon fellows could produce a
        policy brief that identifies opportunities for AI integration into each
        phase of the permitting process, including streamlining compliance
        checks or automating application analysis.
      </div>
      <h2 class="text-left text-2xl font-medium">WHAT IS THE IMPACT?</h2>
      <div class="pb-10">
        Our success will cultivate the next generation of science and tech
        policy leaders. By connecting students with state and local governments,
        we empower them to chart a career path in tech policy and address the
        most pressing issues in their communities and, eventually, the nation.
      </div>
      <h2 class="text-left text-2xl font-medium">WHO ARE WE?</h2>
      <div class="pb-10">
        Started by two former White House OSTP interns, we saw a gap between
        students interested in science and tech policy issues and local
        governments with an increasing need to build tech capacity. Our
        objective is to make science and tech policy research more accessible to
        students of any background and to create a supportive community among
        those interested in exploring this intersection.
        <br></br>
        <br></br>
        The organizing team includes students from:
      </div>
      <div className="container mx-auto">
        <Carousel items={carouselItems} />
      </div>
      <div className="pt-7">
        → If you’re interested in joining our organizing team, please reach out
        to us at paragonfellowship@gmail.com.
      </div>
      </div>
      </Parallax>
      
      
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
