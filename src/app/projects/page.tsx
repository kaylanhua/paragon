
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {, Subheading, Text } from '@/components/Typography';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <>
      <TopBar />
      <Section className='h-[1vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div />
        
      </Section>
      
      <Section>
      <Text className='md:text-4xl text-2xl uppercase font-semibold pb-5'>Our Projects </Text> 
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
          <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}