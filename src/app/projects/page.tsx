import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <Text className='md:text-5xl text-3xl uppercase font-semibold'>Past Projects </Text>
        <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>students shaping the future.</Text>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br /> 
      <br />
      <Section>
        <Subheading>Our Spring 2024 Cohort</Subheading>
        <Text>
          Our Spring 2024 Cohort was a success! We worked with 36 fellows from 27 universities in 22 states to conduct in-depth research on a variety of tech policy issues. See their incredible work below.
        </Text>
      </Section>

      
      <Section>
        <Subheading className='text-center text-2xl font-bold mb-6'>Spring Projects</Subheading>
        <SmallText className='text-center mb-4'>Page under construction, more to come!</SmallText>
        <div className='grid md:grid-cols-3 gap-6 text-center'>
          <Link href="/projects/sp24/leb" passHref>
            <div className='cursor-pointer p-4 border rounded-lg hover:bg-gray-100 transition-colors h-full flex flex-col'>
              <Text className='font-semibold'>Lebanon, NH</Text>
              <SmallText className='mt-2 flex-grow flex items-center justify-center'>Building a technology procurement framework</SmallText>
            </div>
          </Link> 
          <Link href="/projects/sp24/sj" passHref>
            <div className='cursor-pointer p-4 border rounded-lg hover:bg-gray-100 transition-colors h-full flex flex-col'>
              <Text className='font-semibold'>San Jose, CA</Text>
              <SmallText className='mt-2 flex-grow flex items-center justify-center'>Public integrity in the midst of AI</SmallText>
            </div>
          </Link> 
          <Link href="/projects/sp24/bos" passHref>
            <div className='cursor-pointer p-4 border rounded-lg hover:bg-gray-100 transition-colors h-full flex flex-col'>
              <Text className='font-semibold'>Boston, MA</Text>
              <SmallText className='mt-2 flex-grow flex items-center justify-center'>Creating AI procurement guidelines</SmallText>
            </div>
          </Link>
          <Link href="/projects/sp24/sjg" passHref>
            <div className='cursor-pointer p-4 border rounded-lg hover:bg-gray-100 transition-colors h-full flex flex-col'>
              <Text className='font-semibold'>San Jose, CA</Text>
              <SmallText className='mt-2 flex-grow flex items-center justify-center'>Protecting government communications</SmallText>
            </div>
          </Link>
          <Link href="/projects/sp24/stl" passHref>
            <div className='cursor-pointer p-4 border rounded-lg hover:bg-gray-100 transition-colors h-full flex flex-col'>
              <Text className='font-semibold'>St Louis, Missouri</Text>
              <SmallText className='mt-2 flex-grow flex items-center justify-center'>Tech-powered cultural diversity</SmallText>
            </div>
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
          <FooterLink href={""}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}