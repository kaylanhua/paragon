import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import BgGrid from '@/components/BgGrid';
import { RiArrowDownLine } from 'react-icons/ri';
import GrayDivider from '@/components/GrayDivider';
import FAQuestion from '@/components/FAQuestion';
import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';
import {FA_APP_URL} from '@/constants';

const sections = [
  { id: "expectations", title: "01 PROJECT EXPECTATIONS" },
  { id: "eligibility", title: "02 ELIGIBILITY" },
  { id: "process", title: "03 APP PROCESS" },
  { id: "timeline", title: "04 TIMELINE" },
  { id: "dates", title: "05 IMPORTANT DATES" },
  { id: "faq", title: "06 FAQ" },
];

const events = [
  {
    date: "Late January 2025",
    title: "Policy Bootcamp",
    description: "",
  },
  {
    date: "Mid March 2025",
    title: "Check-ins & Midpoint Review with Paragon Team",
    description: "",
  },
  {
    date: "Last week of March",
    title: "Midpoint Presentation",
    description: "",
  },
  {
    date: "Late April 2025",
    title: "Final Policy Brief Presentation",
    description: "",
  },
  {
    date: "First week of May",
    title: "Final Cohort Presentation & Wrap-Up",
    description: "",
  },
  {
    date: "May 1st",
    title: "Cohort End",
    description: "",
  },
];

export default function About() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <TopBar />
      <div className="background-container min-h-[100svh] flex flex-col">
        <BgGrid />
        <div className="w-full px-4 md:px-0 flex-1 flex flex-col md:block">
          <div className="flex-1 flex flex-col justify-center md:block">
            <Text className="fade-in md:pt-[20%] px-4 md:pl-[12%] text-xl md:text-3xl max-w-full md:max-w-[50%] text-center md:text-left">
              Paragon offers semester-based tech policy projects (fall, spring, summer) for
              <span className="font-semibold"> university students and new grads</span> to work on real policy issues at the
              <span className="font-semibold"> state and local level.</span>
            </Text>

            <Text className="fade-in text-xl md:text-3xl max-w-full md:max-w-[30%] mt-16 md:mt-[5%] mb-12 md:mb-5 text-center md:text-right md:ml-auto md:mr-20">
              Applications for the Spring 2025 cohort are now open.
            </Text>

            <div className="flex justify-center md:justify-end md:pr-[6%] mb-20 md:mb-0">
              <Button 
                className="fade-in"
                style="secondary" 
                inNewTab 
                url={FA_APP_URL}
              >
                apply now
              </Button>
            </div>
          </div>
        </div>

        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        <div className="absolute -bottom-1 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-dark md:block hidden" />
        
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>
      
      <Section>
        <Navbar sections={sections} />
      </Section>

      <Section id="expectations">
  <Subheading className='text-3xl md:text-5xl mb-4'>01 Project Expectations</Subheading>
  <GrayDivider />
  <Text className="text-base md:text-lg">The Paragon Policy Fellowship connects students and recent graduates with opportunities in the science and tech policy space. Fellows typically spend 5–10 hours a week researching and writing a policy brief on key issues for their state or local governments. Our fellows work on pressing tech policy issues such as broadband infrastructure, renewable energy, and AI procurement. The fellowship is meant to create a community of future tech policy leaders, and our project-based experiences are designed to introduce students to the tech policy landscape and grow their network and impact through local community engagement.</Text>
  <Text className='font-semibold mt-6'>Fellows in good standing will be compensated with a $500 stipend.</Text>
</Section>

<Section id="eligibility">
  <Subheading className='text-3xl md:text-5xl mb-4'>02 Eligibility</Subheading>
  <GrayDivider />  
  <Text className="text-base md:text-lg">This fellowship is an entry-level opportunity geared towards undergraduate/graduate students and recent graduates based in the U.S. interested in entering the tech policy space. As such, we are not expecting applicants to have extensive experience in tech policy and will be evaluating applications based on demonstrated interest in the tech policy sphere (whether it be through relevant coursework, extracurricular activities, or other lived experiences). We enthusiastically welcome applications from those of all backgrounds and are open to accepting prospective fellows from a wide range of educational backgrounds (i.e., not restricted to any specific major).</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Minimum Qualifications</Text>
  <ul className='list-disc list-inside text-base md:text-xl space-y-2 ml-4'>
    <li>Currently enrolled students (including undergraduate and graduate students) or recent graduates (graduated from a degree program within the last year)</li>
    <li>Ability to consistently commit ~10 hours of honest, focused work per week</li>
    <li>Ability to consistently e-meet with teammates 1-2 times per week and complete work asynchronously</li>
    <li>Must reside in the United States during the fellowship</li>
    <li>Own a US-based bank account</li>
  </ul>
  
  <Text className='mt-8'>We currently offer two tracks – one for fellows and one for project leads.</Text>

  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 1 - Fellows</Text>
  <Text className="text-base md:text-lg">For the initial application, the essays are the most important component. While previous experiences and education will help round out an application, we care the most about a potential fellow&apos;s passion and interest in the tech policy/public service space. Fellows work with their team, project lead, and government partner to complete their assigned policy project.</Text>
  
  <Text className='text-gray font-normal text-2xl md:text-3xl mt-8 mb-4'>Track 2 - Project Leads</Text>
  <Text className="text-base md:text-lg">We are seeking project leads with prior managerial or policy experience. Project leads serve as key liaisons between the project teams and government partners, facilitating communication and cooperation to ensure the alignment of project goals and government expectations. Leads will work closely with the government partners and the organizing team to provide support and direction to the team of fellows. Past candidates have shown a strong ability to steer the project&apos;s direction and navigate ambiguity.</Text>
  
</Section>

<Section id="process">
  <Subheading className='text-3xl md:text-5xl mb-4'>03 APPLICATION PROCESS</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">Following the initial application round, we select a group of finalists to interview in a group setting. At this stage, students will be organized into teams of 5-8 and tasked to complete a mock policy assignment over the course of one week. From there, we will select fellows based on their demonstrated effort, engagement with the rest of the team, and ability to collaborate asynchronously. We will select project leads based on their leadership qualities, problem-solving ability, and effectiveness in organizing and managing projects.</Text>
  <Text className="text-base md:text-lg mt-6">If you are only applying to a fellow position, we do not expect any previous policy expertise and will not evaluate your fit based on the deliverable. Instead, we will focus on how you approach this assignment and work as a team. If you are applying to be a project lead, we will be particularly interested in how you navigate challenges and motivate team members to complete the project.</Text>
</Section>

<Section id="timeline">
  <Subheading className='text-3xl md:text-5xl mb-4'>04 TIMELINE</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg mb-6">Below is a timeline example from the spring 2024 cohort.</Text>
  <Timeline events={events} />
</Section>

<Section id="dates">
  <Subheading className='text-3xl md:text-5xl mb-4'>05 Important Dates</Subheading>
  <GrayDivider/>
  <Text className="text-base md:text-lg">
    We offer semester-based tech policy projects 3 times a year – fall, spring, and summer. The fall fellowship will be expected to run from mid August to late November and the spring fellowship will be expected to run from late January to early May. Our Summer program runs from late May to early August. Applications for each cohort will be expected to open 1-2 months in advance.
  </Text>
  <Text className="text-base md:text-lg mt-6">
    Applications are now open for the spring 2025 cohort. The spring 2025 fellowship will run from <span className="font-semibold underline">January 22 to May 1, 2025</span>.
  </Text>
  <Text className="text-base md:text-lg mt-6">
    Apps for the fall 2025 cohort will be expected to open at a later date. Join our <a href="https://paragonpolicyfellowship.substack.com/" className="underline">mailing list</a> to be notified when apps open.
  </Text>
</Section>

      <Section id="faq">
        <Subheading>06 FAQ</Subheading>
        <GrayDivider/>
        <div>
        <FAQuestion
          question = "What is the fellowship timeline?"
          answer = "a. We have three cohorts every year—summer, fall and spring. The summer cohort begins in mid-June and ends mid-September. The fall cohort begins in late September and ends in December. The spring cohort begins in mid-February, with final presentations in early June."
          />
        <FAQuestion
          question = "Is there a stipend given to fellows?"
          answer = "a. Yes! Fellows in good standing will receive a $500 stipend after the cohort's midpoint. Paragon will coordinate the stipend payments."
        />
        <FAQuestion
          question = "Can I apply to both the Fellow and Project Lead positions? What happens if I'm not accepted as a project lead?"
          answer = "a. If you are not accepted as a project lead, you will still be considered as a fellow! The project lead application is largely the same as the fellow application, just with a few more questions."
        />
        <FAQuestion
          question = "What are some past project examples?"
          answer = "a. Our past cohorts have worked on the following topics: generative AI policies for state employees, technology for foreign language access of government services, combating deepfakes of government officials, combating manipulation of public feedback forms to the government, and tech procurement. You can find more information about our projects on the Past Projects page."
        />
        <FAQuestion
          question = "How long do the projects run?"
          answer = "a. Projects run for about 3 months each. However, government partners with longer term needs can explore recurring projects over the course of multiple cohorts."
        />
        <FAQuestion
          question = "How will fellows be matched with government partners?"
          answer = "a. Since many of our government partners are excited to work with local students and we are seeking to build a strong student community, we will prioritize matching fellows with projects in their region. For government partners that don’t have regional preferences, we will match you based on your policy interests."
        />
        <FAQuestion
          question = "Will the fellowship be remote?"
          answer = "a. The fellowship will be largely remote. However, for most projects, students will be centralized in one geographic location. There will also be optional in-person social events throughout the fellowship!"
        />
        </div>
        <FAQuestion
          question = "What kind of student would be best suited for this fellowship? How much government experience is required?"
          answer = "a. We encourage all students located in the US who are interested in making real-world impact via policy or government work to apply. This fellowship is geared both towards training those without much formal policy experience, but also towards more experienced students who want to exercise their analytical, writing and policy abilities. We encourage experienced candidates to apply to be project leads."
        />
        <FAQuestion
          question = "I am an international student. Can I still be a fellow?"
          answer = "a. Yes! International students are eligible for the fellowship and will also receive a stipend. However, all international fellows must reside in the U.S. during their time as a fellow."
        />
      </Section>
      <Section>
        <Subheading className='flex justify-center text-center'>What impact will you<br />make with Paragon?</Subheading>
        <div className='flex justify-center'>
          <Button url={FA_APP_URL} className='mt-4 justify-center'>Apply Now</Button>
        </div>

      </Section>


      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href={FA_APP_URL}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
        </FooterSection>
      </Footer>

    </div>
  );
}
