import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {governments} from '../../constants';
import {Subheading, Text } from '@/components/Typography';
import Image from 'next/image';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import Carousel from '@/components/Carousel';
import Testimonials from '@/components/Testimonials';
import FAQuestion from '@/components/FAQuestion';
import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';

const sections = [
  { id: "impact", title: "01 OUR IMPACT" },
  { id: "projects", title: "02 PAST PROJECTS" },
  { id: "testimonials", title: "03 TESTIMONIALS" },
  { id: "timeline", title: "04 PROJECT SCOPING & TIMELINE" },
  { id: "faq", title: "05 FAQ" },
];

const events = [
  {
    date: "Late January 2025",
    title: "Policy Bootcamp",
    description: "",
  },
  {
    date: "Mid March 2025",
    title: "Check-ins & Midpoint Review with Paragon Team",
    description: "",
  },
  {
    date: "Late March 2025",
    title: "Midpoint Presentation",
    description: "",
  },
  {
    date: "Late April 2025",
    title: "Final Policy Brief Presentation",
    description: "",
  },
  {
    date: "End of April 2025",
    title: "Final Cohort Presentation & Wrap-Up",
    description: "",
  },
  {
    date: "May 1st 2025",
    title: "Cohort End",
    description: "",
  },
];

const govLogos = Object.values(governments).map(government => government.logo);


export default function About() {
  return (
    <>
      <TopBar />
      <div className="background-container">
        <BgGrid/>
        <Text className='fade-in pt-[20%] pl-[12%] text-3xl max-w-[50%]'>Paragon works with state and local governments, <span className='font-semibold'>big and small</span>, from every jurisdiction across the country to provide <span className='font-semibold'>pro-bono tech policy research</span> to inform evidence-based policymaking.</Text>
        <Text className='fade-in text-right text-3xl ml-auto mr-20 max-w-[30%] mt-[10%]'>Interested in exploring a partnership with Paragon?</Text>
        <div className="flex justify-end pr-20 pt-10">
          <Button className="fade-in" style= "secondary" inNewTab url={"mailto:paragonfellowship@gmail.com"}>Interest Form</Button>
          <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
            <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
        </div>
        
      </div>
      <Section>
        <Navbar sections={sections} />
      </Section>
      <Section id="impact">
        <Subheading className='text-5xl'>01 Our Impact</Subheading>
        <GrayDivider />
        <Text>Over the last year, Paragon has partnered with 10 governments across 7 states through 20 projects.</Text>
        {/* <Text>Spring (5 new / 5 total): Boston; Lebanon, NH; Georgia; St. Louis, MO; San Jose, CA</Text>
        <Text>Summer (2 new / 7 total): CalHHS, Santa Clara</Text>
        <Text>Fall (5 new / 9 total): Brownsville, TX; Los Angeles, CA; Tempe, AZ</Text> */}
      </Section>

      <Section id="projects">
        <Subheading className='text-5xl'>02 Past Projects</Subheading>
        <GrayDivider />
        <Text>We&apos;ve worked with governments and organizations across the country to better science & tech policy processes. Our work ranges has ranged from writing GenAI policy with the State of Georgia, advising on deepfake policy for the City of San Jose, to writing accessibility guidelines for translation software for the City of Lebanon.</Text>
        <a href='/projects' className='text-blue-500'>
        <Carousel className='mt-10' speed={0.5}>
          {
            govLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
            ))
          }
        </Carousel>
        </a>
      </Section>
      <Section id="testimonials">
        <Subheading>03 Testimonials</Subheading>
        <GrayDivider/>
        <Testimonials/>
      </Section>
      <Section id="timeline">
        <Subheading>04 Project Scoping &amp; Timeline</Subheading>
        <GrayDivider/>
        <Timeline events={events} />
      </Section>
      <Section id="faq">
        <Subheading>05 FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question="What are the expectations for government partners?"
          answer="a. We ask that government partners be responsive over email and meet with the Paragon group once every two weeks. Government partners will also be asked to give feedback during a midpoint presentation and a final presentation. Partners are generally responsible for guiding the overall direction of the research."
        />
        <FAQuestion
          question="What can you expect to receive at the end?"
          answer="a. Governments can expect a research or policy brief at the end of the program."
        />
        <FAQuestion
          question="Will students be compensated for the project?"
          answer="a. Government partners will not need to compensate students. Students are supported by philanthropic grants via our sponsors at PIT-UN, a Ford Foundation backed initiative, and RTYPF, a project of the Omidyar Network."
        />
        <FAQuestion
          question="How are projects scoped?"
          answer="a. Project proposals are brought by government partners according to their specific needs and refined in conjunction with the partnerships team. Our partnerships team works with you over the course of a few virtual meetings to understand your needs."
        />
        <FAQuestion
          question="How long do the projects run?"
          answer="a. Projects run for about 3 months each. However, government partners with longer term needs can explore recurring projects over the course of multiple cohorts."
        />
        <FAQuestion
          question="How many fellows typically work on a project?"
          answer="a. Each project is supported by a dedicated team of 6-9 students from your area."
        />
        </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>


      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href={FA_APP_URL}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}