import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import HEADER_LOGO from '@/assets/header-logo.svg';
import WACKY_LINES from '@/assets/wacky-lines-2.svg';
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import Section from "@/components/Section";

import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri';

const AIRTABLE_URL = "https://airtable.com/appItWRxWaZWa1qhj/shrUxs7NGbyc2RyFX";

export default function About() {
  return (
    <>
      <div className='fixed top-0 left-0 p-6 flex w-screen z-50 justify-between'>
        <Image src={HEADER_LOGO} alt="Paragon Fellowship" className='h-12 w-36 object-contain' />
        <div>
          <Button style='custom' className='border-[.1rem] hover:bg-white hover:bg-opacity-10 uppercase w-28 h-12 text-sm text-center' url={AIRTABLE_URL}><Text className='text-sm w-full text-center flex items-center justify-center'><RiMenu3Line className='mr-2' /> Menu</Text></Button>
        </div>
      </div>
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <Text className='text-5xl uppercase font-semibold'>Paragon <br /> For governments</Text>
        <Text className='text-2xl mt-4 uppercase'>bold ideas for a better future.</Text>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='h-[650px] w-[650px] object-contain absolute -right-10 -top-24 -z-10' />
      </Section>
      <Section>
        <Subheading>How we help</Subheading>
        <Text>
          Paragon is a tech policy fellowship that connects local governments with a team of talented students from local colleges and universities to conduct in-depth research on a tech policy issue. Our fellows are passionate about public service and are eager to make a difference in their community.
        </Text>
      </Section>
      <div className='mx-30'><Image src={WACKY_LINES} alt="Capitol Building" className='w-full object-contain' /></div>
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
        <div className='mt-8 flex justify-evenly space-x-4'>
          <div className='max-w-96'>
            <Text className='uppercase font-medium mb-2'>Forms of Policy Research</Text>
            <ul className='list-disc pl-4 space-y-1'>
              <li>Case study</li>
              <li>Landscape analysis</li>
              <li>Risk assessment</li>
              <li>Capacity assessment</li>
              <li>Data analysis</li>
              <li>Policy reccomendations</li>
            </ul>
          </div>
          <div className='max-w-96'>
            <Text className='uppercase font-medium mb-2'>Project Selection Criteria</Text>
            <ul className='list-disc pl-4 space-y-1'>
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
        <div className='grid grid-cols-4 space-x-2'>
          <InfoCard>
            our spring ‘24 cohort had 50 fellows FROM 27 different universities and 22 different states.
          </InfoCard>
          <InfoCard>
            our fellows have committed 2500+ hours of service.
          </InfoCard>
          <InfoCard>
            We are CURRENTLY partnerING with 11 govts across 8 different states
          </InfoCard>
          <InfoCard>
            projecTS in fields such as DESIGNING tech, procurement  & language access
          </InfoCard>
        </div>
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What can paragon<br />do for you?</Subheading>
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