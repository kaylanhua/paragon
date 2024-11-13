import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function SJ2() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>San José, CA</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>An AI Risk Assessment<br></br> Framework for the<br></br>Procurement Process</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The City of San José, CA is a pioneering municipality in acquiring and implementing artificial intelligence (AI) systems and services for the benefits of  employees and residents.  As the founding partner of the GovAI Coalition, the City leads the Coalition in proposing adaptable, standardized systems for ensuring safety by thoroughly  assessing and mitigating AI risks.  San José wants to create a systematic, standardized process that is easily adaptable for all GovAI coalition partners to conduct AI Risk assessment within their respective procurement processes. Currently, there is no comprehensive framework on how to do so. 
        </Text>
        <br />
        <br />
      </Section>


      <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        This document proposes an AI system risk assessment framework, in a systematic and adaptable manner, for various use cases during the software lifecycle such as: procurement, annual software audits, and software department transfers. We propose a standardized method to evaluate risk of AI systems with concrete indicators to be used by the City of San José, CA’s Information Technology department and GovAI Coalition members. Our AI Risk Assessment Framework (RAF) is vendor-agnostic and can be used within the procurement process and post-procurement. 
        </Text>
      </Section>

      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
        We reviewed the City of San José&apos;s current documents on AI Risk Review, specifically the GovAI Coalition AI Policy Manual and the Generative AI Guidelines,. We also evaluated federal policy on AI risk management, such as the National Institutes of Standards and Technology (NIST) Generative AI Risk Management Framework (RMF) and existing public frameworks like the University of California Berkeley AI Risk-Management Standards Profile for General-Purpose AI Systems and Foundation Models and the Massachusetts Institute of Technology (MIT) CSAIL AI Risk Repository. For alignment with our local municipality, we conducted case studies on existing state policy and legislation, such as the recently passed SB1047 (Safe and Secure Innovation for Frontier Artificial Intelligence Models Act). We highlighted discrepancies between existing documents and paid particular attention to how risk levels and acceptable risks for AI systems are defined in current documents (e.g. personally identifiable information, opt-out policies, predicted harm) and other AI risk management frameworks. We then defined a systematic, interactive structure for AI risk assessment, proposed a risk aggregation step, offer suggestions on the AI Risk Review process, and provided a brief, educational summary for City employees using AI systems.
        </Text>
      </Section>


      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>AI Risk Assessment Framework</Text>
            <SmallText>This policy standardizes the AI risk review process to a systematic approach that is easily adaptable by any municipality. It is product-agnostic to fit earlier in the procurement process before vendors are known (and flexible for other contexts). Key components include the use of a “Values-Criteria-Indicators-Observables” strategy to capture AI risk across 4 “Values” (Accountability, Capability, Sustainability, Equity) defined by condensing San José, CA&apos;s AI existing AI Principles. 
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>The AI Risk Assessment Matrix</Text>
            <SmallText>This is an interactive playbook with 60+ predefined Indicators (questions) ranging across various Values and Criteria of AI Risk. Following a user&apos;s response (Observables) to the Indicators, the Matrix tallies up assigned points and outputs a summary of the AI system&apos;s risk assessment. The Observables are aggregated to determine risk on a low/medium/high-risk tiered model.</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'>
            <Text className='mb-2'>AI Risk Training</Text>
            <SmallText>This AI Tisk Training is a five-minute presentation for educating IT Analysts on AI Risk during the City of San José, CA&apos;s monthly cybersecurity trainings. The training covers topics such as AI risk, existing methods for AI risk assessment, and current implementations of AI risk assessment and mitigation.</SmallText>
          </div>
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        The AI Risk Assessment Framework for San José, CA and the GovAI Coalition, represents a significant step to ensuring that the acquisition, deployment, and use of AI systems within City operations are conducted in a manner that is ethical, transparent, and aligned with the community&apos;s values. This document implements a standardized benchmark for AI risk assessment, and the proposed policy changes highlight the City&apos;s Commitment to leading by example in the ethical use of AI technologies. We recommend that the City of San José, CA, implement the AI Risk Assessment Framework through a phased approach, beginning with the establishment of the AI Auditing Sub-Committee and an integration of the AI risk assessment models into existing technology review processes. Additionally, the City should update existing policies to reflect the proposed changes to better solidify its stance on robust, standardized AI risk assessment and mitigation.</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {[
            { name: 'Favour Nerrise', role: 'Project Lead' },
            { name: 'Julie Heng', role: 'Fellow' },
            { name: 'Zoe Dorado', role: 'Fellow' },
            { name: 'Mirakle Wright', role: 'Fellow' },
            { name: 'Julia Torres', role: 'Fellow' },
            { name: 'Payton Alaama', role: 'Fellow' },
            { name: 'Sabrina Nabizada', role: 'Fellow' },
          ].map((contributor, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center">
              <Text className="text-center font-semibold">{contributor.name}</Text>
              <SmallText className="text-center">{contributor.role}</SmallText>
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