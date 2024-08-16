import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import WACKY_LINES from '@/assets/wacky-lines-2.svg';
import Button from '@/components/Button';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function LEB() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Lebanon, NH</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>AI Auditing Framework for Technology<br></br>Review and Procurement Process</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />

      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        In the digital age, artificial intelligence (AI) stands at the forefront of revolutionizing
        public administration and service delivery. The City of Lebanon, NH, recognizes the
        transformative potential of AI to enhance public services, making them more efficient,
        accessible, and responsive to citizens' needs. However, this potential comes with significant
        challenges, including privacy concerns, ethical implications, and the paramount need for
        transparency and public trust. As AI systems increasingly influence various aspects of public
        life, Lebanon, NH, commits to leading by example in the ethical utilization of AI, grounded in
        the city's "ADM-143 Use of Artificial Intelligence" policy.
        </Text>
      </Section>

      <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        Through this integrated framework, Lebanon, NH, aims to chart a responsible course for
        AI adoption, balancing innovation with integrity and setting a standard for ethical AI use in
        public administration. This document outlines the principles guiding the AI auditing and
        technology review process, underscoring our commitment to using AI as a force for public good
        and enhancing services while safeguarding our community's rights and freedoms.
        </Text>
      </Section>

      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
        Our methodological process began by reviewing relevant case studies that focused on
        existing AI auditing frameworks—namely, those of the Canadian government, Credo, and
        Microsoft—and AI use policies and guidelines from other jurisdictions—Boston, California,
        Georgia, San Jose, Singapore, and Utah. Based on the findings of our case study research, we
        developed an AI Auditing Framework that prioritizes privacy, security, equity, transparency,
        reliability, and sustainability. We then generated an AI Assessment Worksheet that serves as the
        tool for implementing the AI Auditing Framework. Using our AI Assessment Worksheet, we
        completed a use case analysis for Policereports.ai, a software currently under review.
        </Text>
      </Section>

      <Section>
        <Subheading>Project Deliverables</Subheading>
        <Text>
        Our project delivered three key components to enhance Lebanon's AI governance:
        </Text>
        <ul className="list-disc pl-6 space-y-4 mt-4">
          <li>
            <Text>
              <span className="font-semibold">AI Auditing Framework:</span> This policy will establish the risk assessment, evaluation criteria, and audit procedures for the City of Lebanon’s AI auditing framework. AI audits will be conducted by the City’s Technology Review Committee (TRC) and ensure the AI software selection and usage process align with the City’s values and responsibility to residents. Key principles will guide the TRC throughout the auditing process to ensure that AI technologies are used ethically and transparently.
            </Text>
          </li>
          <li>
            <Text>
              <span className="font-semibold">AI Software Review Worksheet:</span> The AI Software Review Worksheet provides a framework for the City of
Lebanon to assess the risk of AI applications adopted by the city and ensure that
these applications adhere to the guidelines of the AI auditing framework.
            </Text>
          </li>
          <li>
            <Text>
              <span className="font-semibold">The AI Assessment Questionnaire poses questions to vendors to provide Lebanon with digestible information about important service features and demonstrate consideration given to risk, system integration, and responsible use concerns.</span>
            </Text>
          </li>
        </ul>
      </Section>
      <Section>
        <Subheading>Project impact and future work</Subheading>
        <Text>
        In conclusion, the AI Auditing Framework for Lebanon, NH, represents a significant step
        forward in ensuring that the deployment and use of artificial intelligence within city
        operations are conducted in a manner that is ethical, transparent, and aligned with the
        community's values. This document, rooted in a deep understanding of the dual nature of
        AI's impact, sets a benchmark for responsible AI utilization, emphasizing the importance of
        safeguarding individual privacy, ensuring equity, and maintaining robust oversight. The
        detailed strategies and proposed changes to existing policies underscore the city's
        commitment to leading by example in the ethical use of AI technologies.
        </Text>
        <br />
        <br />
        <Text>
        Moving forward, it is recommended that the City of Lebanon, NH, implement the AI
        Auditing Framework through a phased approach, beginning with the establishment of the AI
        Auditing Sub-Committee and an integration of AI risk assessment models into existing
        technology review processes. Training for TRC members on the nuances of AI technologies and
        the creation of a public engagement mechanism to gather and incorporate community feedback
        on AI use are crucial steps that will enhance the framework's effectiveness and relevance.
        Additionally, updating city policies to reflect the incorporation of AI technologies, as outlined in
        the proposed changes, will solidify the city's stance on responsible AI use.
        </Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Peter Benzoni', role: 'Project Lead' },
            { name: 'Jude Ha', role: 'Fellow' },
            { name: 'Erin Parker', role: 'Fellow' },
            { name: 'Sanjana Raj', role: 'Fellow' },
            { name: 'Yifan Zhang', role: 'Fellow' }
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name}</Text>
              <SmallText className='text-center'>{contributor.role}</SmallText>
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