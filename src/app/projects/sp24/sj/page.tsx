import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function SJ() {
    return (
      <>
        <TopBar />
        <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
        </>}>
          <div className="flex flex-col justify-end h-full pb-4">
            <Text className='md:text-5xl text-3xl uppercase font-semibold'>San Jose, CA</Text>
            <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Public integrity in<br></br>the midst of AI</Text>
          </div>
          <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
        </Section>
        <br /> 
        <Section>
          <Subheading>BACKGROUND</Subheading>
          <Text>
          The city of San José, at the heart of Silicon Valley, is a well-known frontier for technological innovation
and advancement, including AI and technology policy. This project addressed the challenge of identifying
and mitigating the misuse of AI-generated content in the public input process for the city of San José.
          </Text>
        </Section>
        <Section>
          <Subheading>METHODOLOGY</Subheading>
          <Text>
          Through iterative literature reviews, case study analyses of existing regulations at various governmental
          levels, and regular consultations with city officials, AI policy experts, and technologists, the 
          team developed comprehensive policy guidelines and procedural recommendations. The students utilized a variety of 
          resources to develop a framework to maintain integrity of public input processes in the face of proliferating AI. 
          </Text>
        </Section>

        <Section>
          <Subheading>PROBLEM AND EXPECTATIONS</Subheading>
          <Text>
          → How can the city of San José identify false AI-generated content in public input? →
What are best practices for the city of San José to mitigate false AI-generated public
input?
          </Text>
          <br />
          <Text>
          • One main goal for the team was to create a presentation for the San José City Council Information Technology organization stakeholders.
          </Text>
        </Section>
  
        <Section>
          <Subheading>DELIVERABLES</Subheading>
          <Text>
          The project culminated in presentations to the San José City Council Information Technology department
            and the Paragon Policy Spring 2024 community, along with a detailed Policy Guidelines Manual. Key
            proposed solutions include implementing new requirements and technologies for eComment user
            verification and email submission verification, as well as conducting brief and effective annual generative
            AI skills training for city staff managing public comment submissions. This initiative aims to enhance the
            integrity of public input processes in the face of evolving AI technologies.
          </Text>
        </Section>
  
        <Section>
          <Subheading>IMPACT AND FUTURE WORK</Subheading>
          <Text>
          By implementing the recommended technologies and training programs, the City of San José can
significantly enhance the integrity, security, and reliability of public input from real constituents. Future
work includes:
          </Text>
          <br />
          <Text>
          1. Monitoring the effectiveness of implemented solutions.
          </Text>
          <br />
          <Text>
          2. Adapting strategies as AI technologies evolve.
          </Text>
          <br />
          <Text>
          3. Collaborating with other municipalities to share best practices.
          </Text>
          <br />
          <Text>
          4. Exploring additional technological solutions for content verification.
          </Text>
          <br />
          <Text>
          5. Developing public education initiatives on responsible AI use in civic engagement.
          </Text>
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