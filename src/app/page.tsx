"use client";
import Carousel from "../components/Carousel";
import EmailForm from "../components/EmailForm";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const carouselItems = [
    { image: `/harv_logo.png`, alt: "Harvard" },
    { image: "/brown.png", alt: "Brown" },
    { image: "/IIT.jpeg", alt: "IIT" },
    { image: "/penn.png", alt: "UPenn" },
    // { image: "/stanford.png", alt: "Stanford" },
    { image: "/GT.png", alt: "Georgia Tech" },
    { image: "/RISD.svg", alt: "RISD" },
    { image: "/UGA.png", alt: "UGA" },
    { image: "/Yale.png", alt: "Yale" },
    // Add more items as needed
  ];

  const [offset, setOffset] = useState(0);
  const speed = 0.1;

  const [horizontalSpring, api] = useSpring(() => ({
    from: { offset: 0 },
    // to: { offset: 1 },
    to: async (next) => {
      while (true) {
        await next({ offset: 100 });
      }
    },
    config: { duration: 300000, immediate: true },
    loop: {
      reverse: true,
    },
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 0.0001);
    }, 500);

    return () => clearInterval(intervalId);
  }, [horizontalSpring]);

  return (
    <main className="flex justify-between font-mono">
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className="parallax-container"
      >
        {/* <animated.div
          style={{
            zIndex: 1,
            position: "fixed",
            width: "100%",
            height: "100%",
            willChange: "transform",
            transform: horizontalSpring.offset.to(
              (o) =>
                `translateY(-${o * 10}%) translateX(-${o * 10}%) rotate(25deg)`
            ),
          }}
        >
          <ParallaxLayer offset={offset} speed={0.1}>
            <div style={{ marginTop: "-500px", marginLeft: "-500px" }}>
              <div className="flex-row">
                {Array.from({ length: 50 }, (_, index) => (
                  <div
                    key={index}
                    className="flex"
                    style={{ marginBottom: "-50px" }}
                  >
                    {Array.from({ length: 3 }, (_, index) => (
                      <Image
                        key={index}
                        src="/virtual_space.png"
                        width="2000"
                        height="2000"
                        alt={`test${index + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>
        </animated.div> */}
        <animated.div
          style={{
            zIndex: 2,
            position: "fixed",
            width: "100%",
            height: "100vh",
            willChange: "transform",
            transform: horizontalSpring.offset.to(
              (o) => `translateY(-${o * 20}%) rotate(45deg)`
            ),
          }}
        >
          <ParallaxLayer offset={offset} speed={0.5} style={{ zIndex: 2 }}>
            <div style={{ marginTop: "-500px", marginLeft: "-500px" }}>
              <div className="flex-row">
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="flex">
                    {Array.from({ length: 15 }, (_, index) => (
                      <Image
                        key={index}
                        src="/virtual_space.png"
                        width="2500"
                        height="2500"
                        alt={`test${index + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>
        </animated.div>

        <ParallaxLayer
          style={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "200px",
            paddingBottom: "200px",
            zIndex: 3,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "100%",
          }}
        >
          <div className="z-3 max-w-7xl items-center justify-between font-mono mb-2">
            <h1 className="text-7xl font-bold pb-10">
              PARAGON POLICY FELLOWSHIP
            </h1>
            <h2 className="text-2xl font-bold">
              BRINGING STUDENTS TO THE FOREFRONT OF TECH POLICY
            </h2>
            <br />
            <br />
            <h3 className="text-lg max-w-lg">
              SHAPE THE FUTURE OF TECHNOLOGY THROUGH SEMESTER PROJECTS WITH
              STATE AND LOCAL GOVERNMENTS.
            </h3>
            <br />
            <br />
            <EmailForm />
          </div>
          <br />
          <br />
          <div className="text-lg" style={{ paddingTop: "200px" }}>
            <h2 className="text-left text-5xl font-bold">ABOUT</h2>
            <div className="pt-5 pb-10">
              The Paragon Fellowship aims to connect students with opportunities
              in the tech policy space. It provides a hands-on, project-based
              experience, with a focus on local community engagement to enhance
              their network and impact. Fellows will work on term-time projects
              where they dedicate about 5-10 hours/week to produce a policy
              brief on key science policy issues in their state and local
              governments, anything from renewable energy to AI procurement.
            </div>
            <hr className="pt-10" />
            <h2 className="text-left text-2xl font-bold pb-5">
              WHAT DOES A PROJECT LOOK LIKE?
            </h2>
            <div className="pb-10">
              Fellows are expected to write a 5-10 page long policy brief on a
              topic that government leaders are concerned of in their
              communities. One example is applications of AI in the
              environmental permitting process. Permitting is known to be a
              time-consuming and complicated process and stands to benefit
              significantly from AI in improving its efficiency. To help local
              governments explore such use cases, Paragon fellows could produce
              a policy brief that identifies opportunities for AI integration
              into each phase of the permitting process, including streamlining
              compliance checks or automating application analysis.
            </div>
            <h2 className="text-left text-2xl font-bold pb-5">
              WHAT IS THE IMPACT?
            </h2>
            <div className="pb-10">
              Our success will cultivate the next generation of science and tech
              policy leaders. Current opportunities for students to explore
              science and tech policy are limited and highly competitive,
              creating a barrier of entry. By connecting students with state and
              local governments, we empower them to chart a career path in tech
              policy and address the most pressing issues in their communities.
            </div>
            <h2 className="text-left text-2xl font-bold pb-5">WHO ARE WE?</h2>
            <div className="pb-10">
              Started by two former White House OSTP interns, we saw a gap
              between students interested in science and tech policy issues and
              local governments with an increasing need to build tech capacity.
              Our objective is to make science and tech policy research more
              accessible to students of any background and to create a
              supportive community among those interested in exploring this
              intersection.
              <br></br>
              <br></br>
              The organizing team includes students from:
            </div>
            <div className="container mx-auto">
              <Carousel items={carouselItems} />
            </div>
            <br></br>
            <div className="pt-7 font-semibold pb-20">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ width: "20px", height: "20px", paddingRight: "10px" }}
              />
              If you’re interested in joining our organizing team, please reach
              out to us at{" "}
              <a
                href={`mailto:paragonfellowship@gmail.com`}
                style={{ textDecoration: "underline", color: "#fff" }}
              >
                paragonfellowship@gmail.com
              </a>
              .
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
