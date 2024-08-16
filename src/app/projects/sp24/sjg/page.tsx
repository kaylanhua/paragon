import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import WACKY_LINES from '@/assets/wacky-lines-2.svg';
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function SJG() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <Text className='md:text-5xl text-3xl uppercase font-semibold'>San Jose, CA </Text>
        <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Protecting Government<br></br>  Communication from <br></br> AI Manipulation</Text>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The proliferation of publicly accessible generative AI (GenAI) tools has enabled the unprecedented spread of false information in textual, audio, and visual forms. As AI-generated media becomes increasingly difficult to discern from legitimate communications, governments are concerned that GenAI tools can be used to manipulate public sentiment. Already seen in propaganda movements amidst elections and the spread of fake news, the World Economic Forum has designated AI-powered misinformation as 2024’s top immediate risk in undermining democratic processes.
        </Text>
        <br />
        <br />

        <Text>
        The City of San José’s interest in responding to the potential for GenAI to manipulate government communications led the San José Government team to produce an AI Misinformation Guidelines Manual and accompanying educational presentation for internal social media staff. This project recommends protocols that do not require extensive technical background to implement, addressing resource limitations within local governments that typically hinder timely responses toward emerging threats. Furthermore, San José is known for founding the GovAI Coalition, with over 300 agencies as members to promote standard setting for responsible AI use in government. The City of San José’s leadership in this issue area can foster local-level collaboration to safeguard public communications and become a model for other local governments to look toward

        </Text>
      </Section>


      <Section>
        <Subheading>Problems Tackled</Subheading>
        <Text>
        Government regulations have not kept up with the advancement of free-to-use Generative AI tools within the last two years. With comprehensive federal laws still in the works, the responsibility of governance shifts to state and local governments. Though comparatively under-resourced, these lower levels of government can make decisions and respond in a more timely manner while also addressing specific concerns within the local community. The San José team acknowledges these different strengths by recommending both proactive and reactive strategies for safeguarding against Generative AI manipulations of official city communications. The AI Policy Manual presents strategies that can be easily integrated into existing digital communications and maintain applicability amidst the rapid development of GenAI tools.
        </Text>
      </Section>

      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
        The team first conducted a literature review of academic findings, government responses, and local case studies to develop a preliminary understanding of prevailing methods in existing GenAI and digital misinformation responses. Within the literature review, the team concluded three key response categories: policy approaches addresssing mis/disinformation, technical tools for AI detection and response, and public education and media literacy initiatives to encourage community involvement. These themes were presented to Privacy and AI Analysts within the San José government and developed via biweekly meetings to convert findings into an actionable workflow including comprehensive incident documentation, authenticity verification of official government communications, and public awareness via a social media campaign. 
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Literature Review</Text>
            <SmallText>To establish a common understanding of current government and legislative efforts, the literature review synthesized government publications, media articles, academic findings, and case study databases to identify patterns and gaps in current government responses. This review also summarized major US legislation and defined common terms in the AI misinformation and media literacy realm such as deepfakes, watermarking, and more, serving as the foundation for the education presentation for city employees with minimal experience in the area.
            </SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'>
            <Text className='mb-2'>Policy and Procedure Manual</Text>
            <SmallText>Guidelines for Mitigating AI-powered Misinformation: This manual presents the team's tailored recommendations for the City of San José staff, outlining a framework of policy guideline proposals, a standard operating procedure, and educational initiatives. Guidelines include verification of official announcements by connecting communications to a publicly viewable city webpage, linking posts to ".gov" domains, and watermarking and official document seals. The standard operating procedure supervises and safeguards government communications from creation to post-publication monitoring. The education section outlines a "TrustDotGov" public awareness campaign to educate constituents on identifying verified city communications.</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'>
            <Text className='mb-2'>Educational Presentation</Text>
            <SmallText>The education presentation serves as a primer on current legislation and frameworks for internal staff and elaborates on how techniques proposed within the Manual can be implemented. 
            </SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This project represents a pivotal step in safeguarding the integrity of government communications against the growing threats of AI and deepfake technologies. By developing comprehensive guidelines, policies, and educational materials, the Paragon San José Government team hopes the City of San Jose will establish robust defenses against misinformation and ensure that residents can trust official communications. The project's deliverables, including a literature review, policy manual, and educational presentations, will become essential tools for training public information officers and educating the public. The deliverables not only provide communications recommendations resilient to continuous AI developments, they also set precedence for other municipalities by emphasizing the necessity and tangible strategies for local-level response.
        </Text>
      </Section>

      {/* <Section>
        <Subheading>Project Selection</Subheading>
        <Text>We don&apos;t settle for surface-level insights. Our fellows commit to working closely with you over 3-4 months to uncover core issues and develop substantive solutions. The end product is a brief that includes meaningful, long-term policy recommendations.</Text>
        <div className='mt-8 flex justify-evenly md:space-x-4 md:space-y-0 space-y-10 md:flex-row flex-col'>
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
      </Section> */}




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