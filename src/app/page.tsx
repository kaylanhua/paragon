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
import { colleges, MAIL_LIST_URL, NEWSLETTER_URL, FA_APP_URL } from './constants';


const logos = Object.values(colleges).map(college => college.logo);
const currentlyApplying = true;

export default function Home() {

  return (
    <>
      <TopBar />
      <HeroSection />
      <Section className='overflow-y-hidden'>
        <BarDecoration />
        <Subheading>About Paragon</Subheading>

        
        <div>
          <Text className='max-w-[700px]'>The Paragon Fellowship aims to connect students with opportunities in the science and tech policy space. Fellows will spend around 10 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement. The fellowship is a hands-on, project-based experience, designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
          <br></br>
          <Text className='max-w-[700px]'>Paragon is supported by the <a className='underline' href="https://fas.org/">Federation of American Scientists</a>, a policy research and advocacy organization, through fiscal sponsorship.</Text>
          <br></br>
          <div className='flex space-x-4 mt-4'>
            {currentlyApplying && (
              <Button inNewTab url={FA_APP_URL}>Apply</Button>
            )}
            <Button inNewTab url={MAIL_LIST_URL}>MAILING LIST</Button>
            <Button inNewTab url={NEWSLETTER_URL}>NEWSROOM</Button>
          </div>
        </div>
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
                Fellows will spend around 10 hours a week researching a policy issue that their state and local government leaders are interested in. During the fellowship, each team will produce a policy brief for their local government with policy recommendations that pertain to tech implementation, strategy, and decision-making. They will meet with our government partners regularly to iterate on and shape the final product.
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
        <Text>Started by two former <a className='underline' href="https://www.whitehouse.gov/ostp/">White House OSTP</a> interns, Paragon was founded to help bridge the gap between students interested in tech policy issues and local governments with an increasing need to build tech capacity. Our objective is to make science and tech policy research more accessible to students of any background and to create a supportive community among those interested in exploring this intersection.</Text>
        <br></br>
        <div className='flex md:flex-row flex-col items-center md:my-6 mt-5'>
          {/*<Button style='secondary' className='md:mb-0 mb-3 text-base md:text-2xl' url="mailto:paragonfellowship@gmail.com"><MdEmail className="mr-2" /> Join our organizing team</Button> */}
          <Button className='mt-4' url="/team">Team Directory</Button>
        </div>
        <Carousel className='mt-10' speed={0.5}>
          {
            logos.map((logo, index) => (
              <Image key={index} src={logo} alt="Logo" className='h-full md:mr-14 mr-10 md:w-32 w-24 object-contain' />
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
              Fellows are the backbone of the policy team. Fellows are matched with 5-8 students from their region to work on a project with their local government. Policy teams meet weekly with their project leads and biweekly with their government partners to align research priorities. Paragon will provide policy training and support throughout the program. Applications are due September 5th. 
            </Text>

          </Card>
          <Card className="py-14 w-full">
            <Subheading className='mb-5 text-center'>Project Leads</Subheading>
            <Text className='md:text-center'>
              Each team is headed by the project lead, a more experienced student (in leadership and/or policy) who will serve as the manager for 5-8 fellows from their region. Leads will be responsible for keeping their team on track as well as communicating with the team&apos;s government partner. Leads will also receive regular support from mentors and the Paragon board. Applications are due September 5th.
            </Text>

          </Card>
        </div>
        <div className='flex space-x-5 md:flex-row justify-center'>
          {currentlyApplying && (
            <Button inNewTab className='mx-auto mt-8 mb-12' url={FA_APP_URL}>Apply Now</Button>
          )}
          <Button inNewTab className='mx-auto mt-8 mb-12' url={MAIL_LIST_URL}>Mailing List</Button>
        </div>
      </Section>
      <Section>
        <div id="faqs" className='flex items-center justify-center flex-col'>
          <Subheading className='mb-2'>Frequently Asked Questions</Subheading>
        </div>
        <br></br>
        <br></br>
        <div>
          <FAQuestion
            question="What is the fellowship timeline?"
            answer="We have three cohorts every year—summer, fall and spring. The summer cohort begins in mid-June and ends mid-September. The fall cohort begins in late September and ends in December. The spring cohort begins in mid-February, with final presentations in early June."
          />
          <FAQuestion
            question="Is there a stipend given to fellows?"
            answer="Our current cohorts will most likely run on a volunteer basis. We are working very diligently during Summer 2024 to change this via philanthropic donations, but we advise students to assume that a stipend will not be distributed."
          />
          <FAQuestion
            question="Can I apply to both the Fellow and Project Lead positions? What happens if I'm not accepted as a project lead?"
            answer="If you are not accepted as a project lead, you will still be considered as a fellow! The project lead application is largely the same as the fellow application, just with a few more questions."
          />
          <FAQuestion
            question="What are some project examples?"
            answer="Our inaugural (Spring 2024) cohort worked on the following topics: generative AI policies for state employees, technology for foreign language access of government services, combating deepfakes of government officials, combating manipulation of public feedback forms to the government, and tech procurement."
          />
          <FAQuestion
            question="How will fellows be matched with government partners?"
            answer="Since many of our government partners are excited to work with local students and we are seeking to build a strong student community, we will prioritize matching fellows with projects in their region. For government partners that don’t have regional preferences, we will match you based on your policy interests."
          />
          <FAQuestion
            question="Will this fellowship be entirely remote, hybrid, or in-person?"
            answer="The fellowship will be largely remote. However, for most projects, students will be centralized in one geographic location. There will also be optional in-person social events throughout the fellowship!"
          />
          <FAQuestion
            question="What kind of student would be best suited for this fellowship? How much government experience is required?"
            answer="We encourage all students located in the US who are interested in making real-world impact via policy or government work to apply. This fellowship is geared both towards training those without much formal policy experience, but also towards more experienced students who want to exercise their analytical, writing and policy abilities. We encourage experienced candidates to apply to be project leads."
          />
        </div>
      </Section>
      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/#faqs'>FAQs</FooterLink>
        </FooterSection>
      </Footer>
    </>
  );
}
