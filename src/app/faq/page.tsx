import HeaderLogo from '@/assets/header-logo.svg';
import Button from '@/components/Button';
import Section from "@/components/Section";
import { Subheading, Text } from '@/components/Typography';
import Image from "next/image";
import ParallaxBackground from '@/components/ParallaxBackground';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import FAQuestion from '@/components/FAQuestion';

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
        <Image src={HeaderLogo} alt="About Logo" className='mb-6 w-[600px]' />
        <div>
          <Text className='max-w-[500px] leading-normal mb-6'>
            Join the team that's shaping the future of tech policy through semester projects, research, and community engagement

          </Text>
          <div className='flex space-x-5'>
            <Button className='mt-8' url={'/'}>Home</Button>
            <Button inNewTab className='mt-8' url={AIRTABLE_URL}>Apply Now</Button>
          </div>
          
        </div>
      </Section>
      <Section>
        <Subheading className='md:mb-12 mb-6'>Frequently Asked Questions</Subheading>
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
        answer="The fellowship will be remote, but if you're from the same area as our government partners, the final presentations may be in person. We will also organize in-person meet-ups for fellows in the same region."
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
            <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
            <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>

    </>
  );
}