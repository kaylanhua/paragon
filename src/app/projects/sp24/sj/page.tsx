import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function BOS() {
    return (
      <>
        <TopBar />
        <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
        </>}>
          <div className="flex flex-col justify-end h-full pb-4">
            <Text className='md:text-5xl text-3xl uppercase font-semibold'>San Jose, CA</Text>
            <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Public input integrity in<br></br>the midst of AI</Text>
          </div>
          <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
        </Section>
        <br />
        <Section>
          <Subheading>METHODOLOGY</Subheading>
          <Text>
          Through iterative literature reviews, case study analyses of existing regulations at various governmental
          levels, and regular consultations with City officials, AI policy experts, and technologists, the 
          team developed comprehensive policy guidelines and procedural recommendations. The students utilized a variety of 
          resources to develop a framework to maintain integrity of public input processes in the face of proliferating AI. 
          </Text>
        </Section>
  
        <Section>
          <Subheading>PROCESS</Subheading>
          <Text>
          For the final deliverable, the students developed an internal 20-page technology procurement guideline for
          the City of Boston employees, establishing guiding values for the City of Boston&apos;s technology procurement
          process. They have structured these guidelines to develop actionable pathways for refining the technology
          procurement process and have incorporated legal requirements and case studies for practical application.
          The ultimate goal is for City staff and contractors to use this framework to evaluate procurement
          decisions, ensuring that technologies meet legal, technical, ethical, and community standards. Through
          thorough analysis of procurement research and stakeholder interviews, they identified three core pillars to
          guide ethical and effective technology procurement. They are as follows:
          </Text>
          <br />
          <Text>
          • Community Focus: Adhering to the needs of the community served by the City of Boston should
          influence the technologies implemented by the city.
          </Text>
          <Text>
          • Technological Infrastructure: This pillar outlines guidelines for regulation, safe implementation, and
          architectural standards that technology goods and services should adhere to during development and
          maintenance.
          </Text>
          <Text>
          • Communication and Cooperation: This pillar outlines the shared responsibilities for collaboration
          between the City of Boston and contractors in order to build and maintain technological systems
          effectively.
          </Text>
        </Section>
  
        <Section>
          <Subheading>DELIVERABLES</Subheading>
          <Text>
          The project culminated in presentations to the San José City Council Information Technology department
            and the Paragon Policy Spring 2024 community, along with a detailed Policy Guidelines Manual. Key
            proposed solutions include implementing new requirements and technologies for eComment user
            verification and email submission verification, as well as conducting brief and effective annual generative
            AI skills training for City staff managing public comment submissions. This initiative aims to enhance the
            integrity of public input processes in the face of evolving AI technologies.
          </Text>
        </Section>
  
        <Section>
          <Subheading>IMPACT</Subheading>
          <Text>
          We give special thanks to Aleja Jimenez Jaramillo for the close guidance and mentorship in building out
          this project! We are also grateful to our stakeholder interviewees Casey, Laura, Jude, Julia, Sheila, and
          Greg in providing additional insights and feedback into the technology procurement process.
          </Text>
        </Section>
  
        <Section>
          <Subheading>Contributors</Subheading>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
            {[
              { name: 'Quinn Wilson', role: 'Project Lead', school: 'UC Berkeley' },
              { name: 'Anahita Srinivasan', role: 'Research Lead', school: 'MIT' },
              { name: 'Elisha Ham', role: 'Data Lead', school: 'Wellesley College' },
              { name: 'Marie Zhang', role: 'Data Lead', school: 'Wellesley College' },
              { name: 'Sarah Wu', role: 'Stakeholder Lead', school: 'Amherst College' },
              { name: 'Sofia Rodriguez', role: 'Research Lead', school: 'Wellesley College' },
              { name: 'Wanru Skuld Shao', role: 'Stakeholder/Client Lead', school: 'Northeastern University' }
            ].map((contributor, index) => (
              <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
                <Text className='text-center font-semibold'>{contributor.name}</Text>
                <SmallText className='text-center'>{contributor.role}</SmallText>
                <SmallText className='text-center'>{contributor.school}</SmallText>
              </div>
            ))}
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