import HeaderLogo from '@/assets/header-logo.svg';
import BarDecoration from '@/components/BarDecoration';
import Button from '@/components/Button';
import CornerDecoration from '@/components/CornerDecoration';
import Section from "@/components/Section";
import TimelineCard from '@/components/TimelineCard';
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import { RiGroupLine } from "react-icons/ri";

import Carousel from '@/components/Carousel';
import ParallaxBackground from '@/components/ParallaxBackground';
import { MdOutlinePersonAddAlt } from "react-icons/md";

import brownLogo from '@/assets/colleges/brown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';
import ExampleCard from '@/components/ExampleCard';
import ExampleSection from '@/components/ExampleSection';
import LipsumCornerDecoration from '@/components/LipsumCornerDecoration';

const logos = [harvardLogo, brownLogo, yaleLogo, pennLogo, gtLogo, ugaLogo, risdLogo, iitLogo]

const EMAIL_LIST_TYPEFORM_URL = "https://5kekfnl7i01.typeform.com/to/ef4fyRGj";


export default function Home() {
  return (
    <>
      <Section className="py-16 overflow-hidden" backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 -z-10' />
        <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
        <ParallaxBackground />
      </>}>
        <Image src={HeaderLogo} alt="Paragon Logo" className='mb-6 w-[600px]' />
        <div>
          <Text className='max-w-[500px] leading-normal mb-6'>
            Bringing students to the forefront
            of science and tech policy
          </Text>
          <Text className='max-w-[600px] leading-normal'>
            Shape the future of technology through semester
            projects with state and local governments
          </Text>
          <Button inNewTab className='mt-8' url={EMAIL_LIST_TYPEFORM_URL}>Join our interest list</Button>
        </div>
      </Section>
      <Section className='overflow-y-hidden'>
        <BarDecoration />
        <Subheading>About Paragon</Subheading>
        <Text className='max-w-[700px]'>The Paragon Fellowship aims to connect students with opportunities in the science and tech policy space. Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
      </Section>
      <Section>
        <Subheading className='md:mb-12 mb-6'>What does a project look like?</Subheading>
        <div>
          <TimelineCard className="py-14" first>
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='md:max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            <CornerDecoration icon={RiGroupLine} uniqueId='pages' />
          </TimelineCard>
          <TimelineCard className="py-14 pb-11">
            <div className='h-full w-full'>
              <Subheading className='mb-1'>Example text</Subheading>
              <Text className='md:max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </div>
            <hr className='w-full md:mt-16 mt-8 mb-4 bg-gray-600 h-px border-0'></hr>
            <ExampleSection>
              <ExampleCard image={"https://dummyimage.com/600x400/000/fff"} href='/'>
                Example Brief One with Long Text
              </ExampleCard>
              <ExampleCard image={"https://dummyimage.com/600x400/000/fff"} href='/'>
                Example Brief One with Long Text
              </ExampleCard>
              <ExampleCard image={"https://dummyimage.com/600x400/000/fff"} href='/'>
                Example Brief One with Long Text
              </ExampleCard>
            </ExampleSection>
            <LipsumCornerDecoration />
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='md:max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
          <TimelineCard className="py-14" last>
            <Subheading className='mb-0'>Example text</Subheading>
            <Text className='md:max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
        </div>
      </Section>
      <Section>
        <Subheading>What is the impact?</Subheading>
        <Text>Currently, opportunities for students to explore science and tech policy are limited and highly competitive, creating a barrier of entry. By connecting students with state and local governments, we empower them to chart a career path in tech policy and address the most pressing issues in their communities. Our success will cultivate the next generation of science and tech policy leaders.</Text>
      </Section>
      <Section>
        <Subheading>Who are we?</Subheading>
        <Text>Started by two former <a className='underline' href="https://www.whitehouse.gov/ostp/">White House OSTP</a> interns, we saw a gap between students interested in tech policy issues and local governments with an increasing need to build tech capacity. Our objective is to make science and tech policy research more accessible to students of any background and to create a supportive community among those interested in exploring this intersection.</Text>
        <div className='flex md:flex-row flex-col items-center md:my-6 mt-5'>
          <Button style='secondary' className='md:mb-0 mb-3 text-base md:text-2xl'><MdOutlinePersonAddAlt className="mr-2" /> Join our organizing team</Button>
          <Button style='noBorder' className='md:ml-4'>Team Directory</Button>
        </div>
        <Carousel className='mt-10' speed={0.5}>
          {
            logos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain grayscale' />
            ))
          }
        </Carousel>
      </Section>
      <Section className='flex items-center justify-center flex-col'>
        <Subheading className='mb-2'>Let&lsquo;s get started.</Subheading>
        <Text className='uppercase'>Start making policy impact today. Get on our mailing list</Text>
        <Button inNewTab className='mt-8' url={EMAIL_LIST_TYPEFORM_URL}>Join our interest list</Button>
      </Section>
    </>
  );
}
