import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function STL() {
    return (
      <>
        <TopBar />
        <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
        </>}>
          <div className="flex flex-col justify-end h-full pb-4">
            <Text className='md:text-5xl text-3xl uppercase font-semibold'>St. Louis, Missouri</Text>
            <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Tech-Powered<br></br>Cultural Diversity</Text>
          </div>
          <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
        </Section>
        <br />
        <Section> 
          <Subheading>SUMMARY</Subheading>
          <Text>
          St. Louis, home to 2.8 million people, is experiencing significant demographic shifts, with
marked increases in its Asian and Hispanic populations as well as influxes of new residents
from around the world. Accordingly, the city of St. Louis is continually improving its service
provision in order to meet the needs of its evolving population. In light of this growing diversity,
the city has established the Office of New Americans to streamline resources for new residents.
However, the city has limited staff and systems to promptly handle the bureaucratic process
needed to serve large numbers of new migrants. One of the most salient ways that
these resources can be bolstered is through increasing culturally responsive translation
services for city offices. In the following brief, a technology-powered approach to translation is
explored. Given the breadth of language diversity in St. Louis, resources such as Artificial
Intelligence (AI) and Large Language Models (LLMs) have the capacity to provide greatly
expanded capacity and accuracy. Supported by human checkers, the city can develop a
standardized approach to contextually accurate and responsible translation.
          </Text>
        </Section>
  
        <Section>
          <Subheading>METHODOLOGY</Subheading>
          <Text>
          The team initiated the project by conducting a thorough literature review, focusing on AI ethics
frameworks, government procurement standards, and policies related to AI use in public
services, specifically for language translation. This research identified critical areas such as
transparency, accountability, and bias mitigation, which were crucial for St. Louis&#39;s context. In
collaboration with AI policy experts, city officials, and technologists, the team held biweekly
meetings to refine these insights into a detailed policy framework tailored to the city&#39;s needs.
This framework emphasized ethical AI procurement, implementation guidelines aligned with the
San Jose GovAI Coalition and the White House’s Blueprint for an AI Bill of Rights, and robust
maintenance protocols, including human-in-the-loop oversight. Additionally, the team developed
a proof-of-concept for a legal document translation service using fine-tuned large language
models, which provided practical insights into the challenges and opportunities of AI-driven
translation services in St. Louis.
          </Text>
          <br />
        </Section>
  
        <Section>
          <Subheading>DELIVERABLES</Subheading>
          <Text>
          • Procurement Policy Guidelines: A concise set of guidelines for St. Louis to ethically
procure AI systems, prioritizing vendors with U.S. federal government experience or
comprehensive safety and ethics documentation and including a checklist to assess
risks like data security and transparency.
          </Text>
          <br />
          <Text>
          • Implementation Policy Manual: A policy manual aligned with the San Jose GovAI
Coalition and the White House’s AI Bill of Rights, detailing principles of fairness,
accountability, and transparency for AI use and necessary training materials for city staff
on ethical AI use, emphasizing transparency and responsible implementation.
          </Text>
          <br />
          <Text>
          • Maintenance and Monitoring Plan: A user-friendly feedback system for reporting AI
issues, combined with human-in-the-loop protocols for continuous oversight. This plan
includes quarterly audits to detect and address biases.
          </Text>
          <br />
          <Text>
          • Proof of Concept: A report on the development and testing of an AI-powered legal
document translation service, showcasing practical applications and challenges. It
includes recommendations for future improvements, such as using advanced language
models and expanding the dataset.
          </Text>
          <br />
          <Text>
          • Final Internal AI Policy Checklist: A comprehensive checklist covering all critical steps
for ethical AI procurement, implementation, and maintenance. This ensures that AI
systems deployed in St. Louis are aligned with best practices and legal requirements.
          </Text>
        </Section>
  
        <Section>
          <Subheading>IMPACT</Subheading>
          <Text>
          The implementation of AI-powered language access services in St. Louis holds significant
potential to transform how the city supports its immigrant communities. By integrating AI, the
Office of New Americans (ONA) can streamline communication and provide more culturally
sensitive, equitable, and scalable services. The immediate impact will be seen in enhanced
accessibility for non-English speaking residents, empowering them to navigate city services
more effectively.
          </Text>
          <br />
          <Text>
          Future work on language access AI in St. Louis can involve several key areas of development.
The city could expand the range of languages supported by AI systems to better serve its
diverse immigrant communities. Further research and pilot programs can explore advanced AI
models tailored specifically for legal and administrative language translation, enhancing
accuracy and cultural sensitivity. Continuous improvement of AI governance, including regular
updates to policies and training programs, will be necessary to adapt to new ethical challenges
and technological advancements. Additionally, the city could engage in partnerships with other
municipalities and organizations to share best practices and refine AI deployment strategies.
Expanding the scope of AI tools beyond translation, such as incorporating AI-driven community
outreach and engagement initiatives, could further bridge language barriers and create a more
welcoming and inclusive environment for all residents.
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