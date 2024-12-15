
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {SmallText, Subheading, Text } from '@/components/Typography';
import Link from 'next/link';
import { RiArrowDownLine } from 'react-icons/ri';
import BgGrid from '@/components/BgGrid';
import ProjectCard from '@/components/ProjectCard';
import GrayDivider from '@/components/GrayDivider';

export default function Projects() {
  return (
    <>
      <TopBar />
      <div
            className="background-container"
            style={{ height: '75vh' }}
        >
        <BgGrid lineCount={7} />
        <Text className='text-white pl-40 text-7xl pl-20 mt-60 font-semibold'>Project Portfolio</Text>
        <Text className="text-3xl text-right pt-20 pr-20 max-w-[40%] ml-auto">View our past fellows&apos; work!</Text>
        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
            <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
      </div>
      

      <Section>
      <Text className='md:text-4xl text-2xl uppercase font-semibold pb-5'>Our Projects </Text> 
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/sp24/leb" passHref>
                <ProjectCard 
                  timeline='2024 cohort'
                  projectTitle="STUDENTS IN LEBANON CREATE AI AUDITING FRAMEWORK"
                />
            </Link>
            <Link href="/projects/sp24/sj" passHref>
                <ProjectCard 
                  timeline='2024 cohort'
                  projectTitle="SAN JOSE STUDENTS TACKLE PUBLIC INTEGRITY AND AI" 
                />
            </Link>
            <Link href="/projects/sp24/bos" passHref>
                <ProjectCard 
                  timeline='2024 cohort'
                  projectTitle="BOSTON STUDENTS WORK ON TECH PROCUREMENT GUIDELINES" 
                />
            </Link>
            <Link href="/projects/sp24/sjg" passHref>
                <ProjectCard 
                  timeline='2024 cohort'
                  projectTitle="SAN JOSE STUDENTS PROTECT GOVERNMENT COMMUNICATION FROM AI" 
                />
            </Link>
            <Link href="/projects/sp24/stl" passHref>
                <ProjectCard 
                  timeline='2024 cohort'
                  projectTitle="ST. LOUIS STUDENTS EXAMINE TECH-POWERED Cultural DIVERSITY" 
                />
            </Link>
        </div>
        <SmallText className='text-xs pt-5'>We&apos;re working on adding the rest of our portfolio, stay tuned for a complete collection!</SmallText>
      </Section>

      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>



      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href={""}>Home</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}