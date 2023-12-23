"use client";
import Carousel from "../components/Carousel";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  const [offset, setOffset] = useState(0);

  const horizontalSpring = useSpring({
    from: { offset: 0 },
    to: { offset: 1 },
    loop: true,
    config: { duration: 3000 },
    onRest: () => setOffset(0),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset === 1 ? 0 : prevOffset + 0.1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen justify-between p-24">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <animated.div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            willChange: "transform",
            transform: horizontalSpring.offset.to(
              (o) => `translateX(${o * 30}%) rotate(45deg)`
            ),
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <ParallaxLayer offset={offset} speed={0.1}>
              <Image
                src="/virtual_space.png"
                width="500"
                height="500"
                alt="test1"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={offset + 0.2} speed={0.5}>
              <Image
                src="/virtual_space.png"
                width="500"
                height="500"
                alt="test2"
              />
            </ParallaxLayer>
          </div>
        </animated.div>

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
          <form style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "1px solid #fff",
                marginRight: "10px",
                padding: "5px 0",
                width: "60%",
              }}
              placeholder="Enter your college email"
            />
            <button
              type="submit"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              {/* placeholder */}
              <img
                src="/right-arrow.png"
                alt="Submit"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </form>
        </div>
        <br />
        <br />
        <div style={{ paddingTop: "100px" }}>
          <h2 className="text-left text-5xl font-medium">ABOUT</h2>
          <div className="pt-3 pb-10">
            The Paragon Fellowship aims to connect students with opportunities
            in tech policy research. Fellows will work on term-time tech policy
            projects where they dedicate about 5 hours/week during the semester
            to produce a policy brief on the applications of digital technology
            in state and local governments. Eventually, we hope to bring these
            fellows together in an annual summit to share ideas and create a
            more robust, nationwide community.
          </div>
          <hr className="pt-10" />
          <h2 className="text-left text-2xl font-medium">
            WHAT DOES A PROJECT LOOK LIKE?
          </h2>
          <div className="pb-10">
            Environmental permits are known to be a time-consuming and
            complicated process. AI adoption in this process could significantly
            increase the productivity of government officials. To help state and
            local governments explore such AI use cases, Paragon fellows could
            produce a policy brief that identifies opportunities for AI
            integration into each phase of the permitting process, including
            streamlining compliance checks or automating application analysis.
          </div>
          <h2 className="text-left text-2xl font-medium">
            WHAT IS THE IMPACT?
          </h2>
          <div className="pb-10">
            Our success will cultivate the next generation of science and tech
            policy leaders. By connecting students with state and local
            governments, we empower them to chart a career path in tech policy
            and address the most pressing issues in their communities and,
            eventually, the nation.
          </div>
          <h2 className="text-left text-2xl font-medium">WHO ARE WE?</h2>
          <div className="pb-10">
            Started by two former White House OSTP interns, we saw a gap between
            students interested in science and tech policy issues and local
            governments with an increasing need to build tech capacity. Our
            objective is to make science and tech policy research more
            accessible to students of any background and to create a supportive
            community among those interested in exploring this intersection.
            <br></br>
            <br></br>
            The organizing team includes students from:
          </div>
          <div className="container mx-auto">
            <Carousel items={carouselItems} />
          </div>
          <div className="pt-7">
            → If you’re interested in joining our organizing team, please reach
            out to us at paragonfellowship@gmail.com.
          </div>
        </div>
      </Parallax>
    </main>
  );
}
