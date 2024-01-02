"use client";

import Carousel from "@/components/Carousel";
import EmailForm from "@/components/EmailForm";
import { H1, H2, H3, H4, Text } from "@/components/Typography";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParallaxBackground from "../components/ParallaxBackground";
import Section from "../components/Section";

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

  return (
    <>
      <main className="bg-black bg-opacity-35">
        <Section className="z-3 max-w-7xl justify-center h-screen font-sans mb-2">
          <H1 className="pb-10 max-w-3xl">PARAGON POLICY FELLOWSHIP</H1>
          <H3 className="max-w-2xl">
            BRINGING STUDENTS TO THE FOREFRONT OF SCIENCE AND TECH POLICY
          </H3>
          <br />
          <br />
          <H4 className="max-w-lg">
            SHAPE THE FUTURE OF TECHNOLOGY THROUGH SEMESTER PROJECTS WITH STATE
            AND LOCAL GOVERNMENTS.
          </H4>
          <br />
          <br />
          <EmailForm />
        </Section>
        <Section>
          <div className="text-lg font-sans" style={{ paddingTop: "200px" }}>
            <H2>ABOUT</H2>
            <Text className="pt-5 pb-10">
              The Paragon Fellowship aims to connect students with opportunities
              in the science and tech policy space. Fellows will spend 5 hours a
              week researching and writing a policy brief on key issues for
              their state and local governments, with topics ranging from
              broadband infrastructure, renewable energy, to AI procurement. The
              fellowship is a hands-on, project-based experience, designed to
              introduce students to the tech policy landscape and grow their
              network and impact through local community engagement.
            </Text>
            <hr className="pt-10" />
            <H3 className="pb-5">WHAT DOES A PROJECT LOOK LIKE?</H3>
            <Text className="pb-10">
              Fellows will work in groups with others from their region to write
              a policy brief on a topic that concerns their communities. During
              this process, fellows will receive support and mentorship from
              local government leaders, faculty advisors, and our organizing
              team.
              <br></br>
              <br></br>
              Policy topics will range from immediate issues that governments
              face today, to future issues they may not have the capacity to
              explore. For instance, environmental permitting is known to be a
              time-consuming and complicated process. In their project, fellows
              would produce a policy brief identifying opportunities and
              outlining a realistic strategy for AI integration in different
              phases of the permitting process, from streamlining compliance
              checks to automating application analysis.
            </Text>
            <H3 className="pb-5">WHAT IS THE IMPACT?</H3>
            <Text className="pb-10">
              Currently, opportunities for students to explore science and tech
              policy are limited and highly competitive, creating a barrier of
              entry. By connecting students with state and local governments, we
              empower them to chart a career path in tech policy and address the
              most pressing issues in their communities. Our success will
              cultivate the next generation of science and tech policy leaders.
            </Text>
            <H3 className="pb-5">WHO ARE WE?</H3>
            <Text className="pb-10">
              Started by two former{" "}
              <a
                href="https://www.whitehouse.gov/ostp/"
                style={{ textDecoration: "underline" }}
              >
                White House OSTP
              </a>{" "}
              interns, we saw a gap between students interested in tech policy
              issues and local governments with an increasing need to build tech
              capacity. Our objective is to make science and tech policy
              research more accessible to students of any background and to
              create a supportive community among those interested in exploring
              this intersection.
              <br></br>
              <br></br>
              The organizing team includes students from:
            </Text>
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
        </Section>
      </main>
      <ParallaxBackground />
    </>
  );
}
