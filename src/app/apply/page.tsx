import HeaderLogo from '@/assets/header-logo.svg';
import BarDecoration from '@/components/BarDecoration';
import Button from '@/components/Button';
import CornerDecoration from '@/components/CornerDecoration';
import Section from "@/components/Section";
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import ParallaxBackground from '@/components/ParallaxBackground';
import { RiGroupLine, RiPagesLine, RiSlideshowLine } from "react-icons/ri";
import TimelineCard from '@/components/TimelineCard';
import LipsumCornerDecoration from '@/components/LipsumCornerDecoration';
import Card from '@/components/Card';
import InfoCard from '@/components/InfoCard';

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
        <Image src={HeaderLogo} alt="About Logo" className='mb-6 w-[600px]' />
        <div>
          <Text className='max-w-[500px] leading-normal mb-6'>
            Join the team that's shaping the future of tech policy through semester projects, research, and community engagement
            
          </Text>
          <Button inNewTab className='mt-8' url={'https://paypal.me/willvarner'}>Apply Now</Button>
        </div>
      </Section>
      <Section>
        <Subheading className='md:mb-12 mb-6'>Fellowship Roles</Subheading>

        <div className="flex flex-row space-x-4 justify-between">
          <InfoCard className="py-14 w-full">
            <Subheading className='mb-1'>Fellows</Subheading>
            <Text className='md:max-w-[60%]'>
            Fellows are the backbone of the policy team. Fellows are matched with 5-8 students from their region to work on a project with their local government. Policy teams meet weekly with their project leads to check in on updates and biweekly with their government partners to align research priorities. Paragon will provide policy training through a short boot camp at the beginning of the program and continuous support throughout. 
            </Text>
          </InfoCard>
          <InfoCard className="py-14 w-full">
            <Subheading className='mb-1'>Project Leads</Subheading>
            <Text className='md:max-w-[60%]'>
            Each team is headed by the project lead, a more experienced student (in leadership and/or policy) who will serve as the manager for 5-8 fellows from their region. Leads will be responsible for keeping their team on track through milestones and weekly meetings as well as communicating with their team’s government partner. Leads will also receive regular support from mentors and the Paragon organizing team. 
            </Text>
          </InfoCard>
        </div>
        <h3 className='md:mb-12 mb-6 mt-16'>Applicants of any age—from undergraduate and graduate students to new grads (graduated in the last year)—are welcome to apply.</h3>
      </Section>
      <Section>
        <Subheading className='md:mb-12 mb-6'>What does a project look like?</Subheading>
        <div>
          <TimelineCard className="py-14" first>
            <Subheading className='mb-1'>Apply</Subheading>
            <Text className='md:max-w-[60%]'>
              Fellows will be matched with a cohort of 5-8 fellows from your region to work on a policy issue with a local or state government. Policy areas for our projects range from immediate issues that governments face to future issues they seek to explore – each one is carefully scoped by our organizing team with our government partners.
            </Text>
            <CornerDecoration icon={RiGroupLine} uniqueId='group' />
          </TimelineCard>
          <TimelineCard className="py-14">
            <Subheading className='mb-1'>Learn</Subheading>
            <Text className='md:max-w-[60%]'>
              After meeting their regional cohort, fellows will attend our boot camp training, where we will prepare fellows with the policy research and writing skills necessary to work on real government issues. We will also host brown bag conversations and a guest lecture series on tech policy issues throughout the program.
            </Text>
            <CornerDecoration icon={RiPagesLine} uniqueId='docs' />
          </TimelineCard>
          <TimelineCard className="py-14 pb-11">
            <div className='h-full w-full'>
              <Subheading className='mb-1'>Research</Subheading>
              <Text className='md:max-w-[60%]'>
                Fellows will spend 5-10 hours a week researching a policy issue that their state and local government leaders are interested in. During the fellowship, each team will produce a policy brief for their local government with policy recommendations that pertain to tech implementation, strategy, and decision-making. They will meet with our government partners regularly to iterate on and shape the final product.
              </Text>
            </div>
            {/* TODO: Add real examples */}
            {/* 
            <hr className='w-full md:mt-10 mt-4 mb-4 bg-gray-600 h-px border-0'></hr>
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
            </ExampleSection> */}
            <LipsumCornerDecoration />
          </TimelineCard>
          <TimelineCard className="py-14" last>
            <Subheading className='mb-0'>Present</Subheading>
            <Text className='md:max-w-[60%]'>
              Your research can make a real impact. Each team will present their research and policy brief to our government partners. Through these presentations, you will gain valuable experience communicating your findings to directly impact your local government’s science and tech policy strategies and initiatives.
            </Text>
            <CornerDecoration icon={RiSlideshowLine} uniqueId='present' />
          </TimelineCard>
        </div>
      </Section>
      
    </>
  );
}