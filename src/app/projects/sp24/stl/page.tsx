import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar'; 
import {SmallText, Subheading, Text} from '@/components/Typography'; 
import Image from 'next/image';

export default function STL() {
  return (
    <>
      {/* Top Bar Section */}
      <TopBar />

      {/* Hero Section */}
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      }>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>St. Louis, Missouri</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>
            Tech-Powered<br />Cultural Diversity
          </Text>
        </div>
        <Image 
          src={CAPITOL_LINEART} 
          alt="Capitol Building" 
          className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' 
        />
      </Section>

      {/* Summary Section */}
      <Section>
        <Subheading>SUMMARY</Subheading>
        <Text>
          St. Louis, Missouri is a city with a remarkable degree of demographic diversity. From a governmental perspective, this unique character has challenged the city’s ability to provide equitable service and an inclusive environment for individuals with limited English proficiency (LEP). Recently, digital tools for translation–including those powered by artificial intelligence (AI)–have expanded in number and scope, providing one route for governmental entities to efficiently improve their language access capabilities. However, the efficacy of these tools remains poorly demonstrated, and robust, generalizable guidelines for their implementation are lacking. Herein, we explore the interface of digital tools and language access for the city of St. Louis and make two targeted recommendations to address current challenges.
        </Text>
      </Section>

      {/* Methodology Section */}
      <Section>
        <Subheading>METHODOLOGY</Subheading>
        <Text>
          We began our project by surveying the landscape of language access within St. Louis, Missouri, and the United States. This investigation was supplemented by an exploration of current trends in translation technologies. With a general context established, we interviewed stakeholders from the St. Louis language access community to better anchor our research with local perspectives. Working with city officials from the Office of New Americans (ONA), we utilized these insights to generate a general picture of the successes and failures of the St. Louis area’s language access landscape. Having identified key gaps in current policies and infrastructures, we drafted two recommendations for the ONA that we believe will provide an impactful boost to language access in the city.
        </Text>
      </Section>

      {/* Deliverables Section */}
      <Section>
        <Subheading>DELIVERABLES</Subheading>
        <ul className='list-disc pl-5 text-lg'>
          <li>A thorough summary of recent trends in language access and machine translation, written with accessibility for non-specialists in mind.</li>
          <li>A set of timely case studies from other cities’ attempts to incorporate machine translation tools.</li>
          <li>A deep analysis of current strengths and gaps in the St. Louis language access landscape.</li>
          <li>
            Two concrete policy recommendations revolving around:
            <ul className="list-disc pl-8">
              <li>The creation of a government-community hybrid “language access committee.”</li>
              <li>The adoption of an AI-powered translation tool, Wordly, for city council meetings.</li>
            </ul>
          </li>
        </ul>
      </Section>

      {/* Impact Section */}
      <Section>
        <Subheading>IMPACT</Subheading>
        <Text>
          As the city’s demographics continue to diversify, St. Louis will need to continue to evolve its language access policies and infrastructures. Our report provides an up-to-date picture of the local language access landscape to keep policymakers working in this space well-informed while preparing them to adjust to ongoing trends. It also shines a light on neglected areas that may require attention. Our recommendations are simple, relatively low-cost, and high-upside actions that were directly informed by perspectives from local stakeholders. By implementing our recommendations, St. Louis will immediately improve language access in the city while also laying a stable foundation for future initiatives.
        </Text>
      </Section>

      {/* Team Section */}
      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Lucas Fluegel', role: 'Project Lead' },
            { name: 'Rachel Arnold', role: 'Fellow' },
            { name: 'Rhea Banerjee', role: 'Fellow' },
            { name: 'Wil Czeschin', role: 'Fellow' },
            { name: 'Devashri Khadke', role: 'Fellow' },
            { name: 'Deepali Paasham', role: 'Fellow' },
            { name: 'Eman Teshome', role: 'Fellow' },
            { name: 'Marvel Zhou', role: 'Fellow' }
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name}</Text>
              <SmallText className='text-center'>{contributor.role}</SmallText>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Footer>
        <FooterSection title='Our Organization'>
          <FooterLink href=''>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>
    </>
  );
}