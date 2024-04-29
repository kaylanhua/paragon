import HeaderLogo from '@/assets/header-logo.svg';
import Button from '@/components/Button';
import FAQuestion from '@/components/FAQuestion';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import ParallaxBackground from '@/components/ParallaxBackground';
import Section from "@/components/Section";
import { Heading, SmallText, Subheading, Text } from '@/components/Typography';
import Image from "next/image";

const AIRTABLE_URL = "https://airtable.com/appItWRxWaZWa1qhj/shrUxs7NGbyc2RyFX";

export default function About() {
  return (
    <>
      
      <Section className="py-16 overflow-hidden" backgroundChildren={
        <>
          <div className='absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 -z-10' />
          <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
          <ParallaxBackground />
        </>
      }>
        <Section className="flex justify-between">
        <Image src={HeaderLogo} alt="About Logo" className='w-[300px]' />
        <Button>
          <a href='/'>Home</a>
        </Button>
      </Section>
        <div>
            <Heading className='text-transform: uppercase'> Paragon For Governments</Heading>
          <Text className='max-w-[500px] text-transform: uppercase leading-normal mb-6'>
            Bold ideas for a better future
          </Text>

        </div>
      </Section>
      <Section>
        <Subheading>How we help</Subheading>
        <Text>
          Paragon is a tech policy fellowship that connects local governments with a team of talented students from local colleges and universities to conduct in-depth research on a tech policy issue. Our fellows are passionate about public service and are eager to make a difference in their community.
        </Text>
      </Section>
      <Section className='flex justify-between'>
        <Subheading>What we provide</Subheading>
        <div className='w-[50%]'>
          <hr className="border-t border-gray-300 my-4 mb-10" />
          <div className='ml-5 mr-5'>
            <Text className='mb-3'>In-Depth Research</Text> 
            <SmallText>On average, our fellows contribute 500-700 hours of dedicated policy research on every project. Our fellows go through an in-house bootcamp which prepares students with the necessary policy research and writing skills to work on real government issues. </SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-10 mb-10" />
          <div className='ml-5 mr-5'>
            <Text className='mb-3'>Local Expertise</Text> 
            <SmallText>We recruit a team of 6-8 talented students from colleges & universities in your area to contribute their tech policy expertise on an issue you have. Although we intentionally work with students from a diverse group of schools, these students share a common trait: they want to make their government better.</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-10 mb-10" />
          <div className='ml-5 mr-5'>
            <Text className='mb-3'>Government Visibility</Text>
            <SmallText>Increase visibility among local students interested in pursuing a career in public service, fostering a stronger connection between your government and the next generation of policy leaders.</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-10" />
        </div>
        
      </Section>
      <Section>
        <Subheading>Project Selection</Subheading>
        <Text>We don’t settle for surface-level insights. Our fellows commit to working closely with you over 3-4 months to uncover core issues and develop substantive solutions. The end product is a brief that includes meaningful, long-term policy recommendations.</Text>
        <div className='mt-8 flex justify-center space-x-4'>
          <div className='w-80'>
            <Text>Forms of Policy Research</Text>
            <ul className='list-disc pl-8'>
              <li>Case study</li>
              <li>Landscape analysis</li>
              <li>Risk assessment</li>
              <li>Capacity assessment</li>
              <li>Data analysis</li>
              <li>Policy reccomendations</li>
            </ul>
          </div>
          <div className='w-80'>
            <Text>Project Selection Criteria</Text>
            <ul className='list-disc pl-8'>
              <li>Demonstrable impact in helping state and local governments wrestle with a salient issue</li>
              <li>Clear vision for who and what this work will eventually inform</li>
              <li>Sufficiently deep issue area that is feasible within our timeline and scope of expertise</li>
              <li>Nonpartisan issue</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <Subheading>Our Impact</Subheading>
        <div className='flex space-x-5'>
          <InfoCard className="py-14 h-80 w-70 ">
            <SmallText className='md:text-center text-transform: uppercase'>
            our spring ‘24 cohort had 50 fellows FROM 27 different universities and 22 different states.  
            </SmallText>
          </InfoCard>
          <InfoCard className="py-14 h-80 w-70">
            <SmallText className='md:text-center text-transform: uppercase'>
            our fellows have committed 2500+ hours of service.
            </SmallText>
          </InfoCard>
          <InfoCard className="py-14 h-80 w-70">
            <SmallText className='md:text-center text-transform: uppercase'>
            We are CURRENTLY partnerING with 11 govts across 8 different states
            </SmallText>

          </InfoCard>
          <InfoCard className="py-14 h-80 w-70">
            <SmallText className='md:text-center text-transform: uppercase'>
            Current projecTS in fields such as DESIGNING tech, procurement processes & Increasing language access through technology, and more
            </SmallText>

          </InfoCard>
          </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center'>What can paragon</Subheading>
        <Subheading className='flex justify-center'>do for you?</Subheading>
        <div className='flex justify-center'>
          <Button href={AIRTABLE_URL} className='mt-4 justify-center'>Contact Us</Button>
        </div>
        
      </Section>
      
      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href={AIRTABLE_URL}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}