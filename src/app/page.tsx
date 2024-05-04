import BarDecoration from '@/components/BarDecoration';
import Button from '@/components/Button';
import CornerDecoration from '@/components/CornerDecoration';
import Section from "@/components/Section";
import TimelineCard from '@/components/TimelineCard';
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import { RiGroupLine, RiPagesLine, RiSlideshowLine } from "react-icons/ri";

import Carousel from '@/components/Carousel';

import Card from '@/components/Card';
import FAQuestion from '@/components/FAQuestion';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LipsumCornerDecoration from '@/components/LipsumCornerDecoration';
import TopBar from '@/components/TopBar';
import { AIRTABLE_URL, colleges } from './constants';


const logos = Object.values(colleges).map(college => college.logo);

export default function Home() {

  return (
    <>
      <TopBar />
      <HeroSection />
      <Section className='overflow-y-hidden'>
        <BarDecoration />
        <Subheading>About Paragon</Subheading>
        <Text className='max-w-[700px]'>The Paragon Fellowship aims to connect students with opportunities in the science and tech policy space. Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
        <Button inNewTab className='mt-10' url={AIRTABLE_URL}>Apply Now</Button>
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
      <Section>
        <Subheading>What is the impact?</Subheading>
        <Text>
          Currently, opportunities for students to explore science and tech policy are limited and highly competitive, creating a barrier of entry. Accessibility lies at the heart of Paragon’s mission: by connecting students with state and local governments, we empower them to chart a career path in tech policy and address the most pressing issues in their communities. Our success will cultivate the next generation of science and tech policy leaders.
        </Text>
      </Section>
      <Section>
        <Subheading>Who are we?</Subheading>
        <Text>Started by two former <a className='underline' href="https://www.whitehouse.gov/ostp/">White House OSTP</a> interns, we saw a gap between students interested in tech policy issues and local governments with an increasing need to build tech capacity. Our objective is to make science and tech policy research more accessible to students of any background and to create a supportive community among those interested in exploring this intersection.</Text>
        <div className='flex md:flex-row flex-col items-center md:my-6 mt-5'>
          {/*<Button style='secondary' className='md:mb-0 mb-3 text-base md:text-2xl' url="mailto:paragonfellowship@gmail.com"><MdEmail className="mr-2" /> Join our organizing team</Button> */}
          <Button className='md:ml-4' url="/team">Team Directory</Button>
        </div>
        <Carousel className='mt-10' speed={0.5}>
          {
            logos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain grayscale' />
            ))
          }
        </Carousel>
      </Section>
      <Section>
        <div id="apply" className='flex items-center justify-center flex-col'>
          <Subheading className='mb-2'>Let&lsquo;s get started.</Subheading>
          <Text className='uppercase mb-2'>Start making policy impact today.</Text>
        </div>

        <div className="flex md:flex-row flex-col md:space-x-4 justify-between my-10">
          <Card className="py-14 w-full">
            <Subheading className='mb-5 text-center'>Fellows</Subheading>
            <Text className='md:text-center'>
              Fellows are the backbone of the policy team. Fellows are matched with 5-8 students from their region to work on a project with their local government. Policy teams meet weekly with their project leads to check in on updates and biweekly with their government partners to align research priorities. Paragon will provide policy training through a short boot camp at the beginning of the program and continuous support throughout.
            </Text>

          </Card>
          <Card className="py-14 w-full">
            <Subheading className='mb-5 text-center'>Project Leads</Subheading>
            <Text className='md:text-center'>
              Each team is headed by the project lead, a more experienced student (in leadership and/or policy) who will serve as the manager for 5-8 fellows from their region. Leads will be responsible for keeping their team on track through milestones and weekly meetings as well as communicating with their team’s government partner. Leads will also receive regular support from mentors and the Paragon organizing team.
            </Text>

          </Card>
        </div>
        <h2 className='text-center mt-0'>Applications for Summer 2024 are currently open!</h2>
        <div className='flex space-x-5 md:flex-row justify-center'>
          <Button className='mx-auto mt-8 mb-12' url={'/faq'}>FAQs</Button>
          <Button inNewTab className='mx-auto mt-8 mb-12' url={AIRTABLE_URL}>Apply Now</Button>
        </div>
      </Section>
      <Section>
        <div>
          <FAQuestion
            question="What is the fellowship timeline?"
            answer="We have two cohorts every year—fall and spring. The spring cohort begins in early March, with final presentations in early June. The fall cohort begins in late September and ends in December."
          />
          <FAQuestion
            question="Is there a stipend given to fellows?"
            answer="Our spring cohort (March-June) will most likely run on a volunteer basis. This might change in the coming weeks depending on philanthropic changes, but we advise students to assume that a stipend will not be distributed."
          />
          <FAQuestion
            question="Can I apply to both the Fellow and Project Lead positions? What happens if I'm not accepted as a project lead?"
            answer="If you are not accepted as a project lead, you will still be considered as a fellow! The project lead application is largely the same as the fellow application, just with a few more questions."
          />
          <FAQuestion
            question="What are some project examples?"
            answer="This will be the inaugural cohort as we are launching our first set of projects this coming spring. Some project examples include policy solutions regarding deepfake regulations, advancing EV infrastructures in low-income areas, and implementing automated translations in court services."
          />
          <FAQuestion
            question="How will fellows be matched with government partners?"
            answer="Since many of our government partners are excited to work with local students and we are seeking to build a strong student community, we will prioritize matching fellows with projects in their region. For government partners that don’t have regional preferences, we will match you based on your policy interests."
          />
          <FAQuestion
            question="Will this fellowship be entirely remote, hybrid, or in-person?"
            answer="The fellowship will be remote, but if you&apos;re from the same area as our government partners, the final presentations may be in person. We will also organize in-person meet-ups for fellows in the same region."
          />
          <FAQuestion
            question="What kind of student would be best suited for this fellowship? How much government experience is required?"
            answer="While students of all undergraduate and graduate levels are welcome to apply, this fellowship is geared toward students with less formal experience in tech policy and government work. Students with more policy or government experience should consider applying as a project lead."
          />
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
