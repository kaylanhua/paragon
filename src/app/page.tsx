import HeaderLogo from '@/assets/header-logo.svg';
import Button from '@/components/Button';
import Section from "@/components/Section";
import TimelineCard from '@/components/TimelineCard';
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section className="py-16">
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
          <Button className='mt-8'>Join our interest list</Button>
        </div>
      </Section>
      <Section className='overflow-y-hidden'>
        <div className='absolute top-0 left-[65%] h-full w-[35%]'>
          <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-[80%] mb-10 ml-auto'></div>
          <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-full mb-10'></div>
          <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-[80%] ml-auto'></div>
        </div>
        <Subheading>About Paragon</Subheading>
        <Text className='max-w-[700px]'>The Paragon Fellowship aims to connect students with opportunities in the science and tech policy space. Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
      </Section>
      <Section>
        <Subheading>What does a project look like?</Subheading>
        <div>
          <TimelineCard className="py-14" first>
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
          <TimelineCard className="py-14" last>
            <Subheading className='mb-1'>Example text</Subheading>
            <Text className='max-w-[60%]'>of your peers in your region. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </TimelineCard>
        </div>
      </Section>
    </>
  );
}
