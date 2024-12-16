import { FA_APP_URL } from '@/app/constants';
import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar'; 
import {Subheading, Text, SmallText } from '@/components/Typography'; 
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
          St. Louis, Missouri is a city with a remarkable degree of demographic diversity. From a governmental perspective, this unique character has challenged the city’s ability to provide equitable service and an inclusive environment for individuals with limited English proficiency (LEP). Recently, digital tools for translation–including those powered by artificial intelligence (AI)–have expanded in number and scope, providing one route for governmental entities to efficiently improve their language access capabilities. However, the efficacy of these tools remains poorly demonstrated and robust, generalizable guidelines for their implementation are lacking. Consequently, any initiative to incorporate digital translation tools into governmental services will require an in-depth assessment of needs, opportunities, and costs. Herein, we explore the interface of digital tools and language access for the city of St. Louis and make two targeted recommendations to address current challenges.

          </Text>
        </div>
        <Image 
          src={CAPITOL_LINEART} 
          alt="Capitol Building" 
          className="md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10" 
        />
      </Section>
      <br />
      <Section> 
        <Subheading>SUMMARY</Subheading>
        <Text>
          St. Louis, Missouri is a city with a remarkable degree of demographic diversity. From a governmental perspective, this unique character has challenged the city’s ability to provide equitable service and an inclusive environment for individuals with limited English proficiency (LEP). Recently, digital tools for translation–including those powered by artificial intelligence (AI)–have expanded in number and scope, providing one route for governmental entities to efficiently improve their language access capabilities. However, the efficacy of these tools remains poorly demonstrated and robust, generalizable guidelines for their implementation are lacking. Consequently, any initiative to incorporate digital translation tools into governmental services will require an in-depth assessment of needs, opportunities, and costs. Herein, we explore the interface of digital tools and language access for the city of St. Louis and make two targeted recommendations to address current challenges.
        </Text>
      </Section>

        <Section>
          <Subheading>METHODOLOGY</Subheading>
          <Text>
          We began our project by surveying the landscape of language access within St. Louis, Missouri, and the United States. This investigation was supplemented by an exploration of current trends in translation technologies. With a general context established, we interviewed stakeholders from the St. Louis language access community to better anchor our research with local perspectives. Working with city officials from the Office of New Americans (ONA), we utilized these insights to generate a general picture of the successes and failures of the St. Louis area’s language access landscape. Having identified key gaps in current policies and infrastructures, we drafted two recommendations for the ONA that we believe will provide an impactful boost to language access in the city.
          </Text>
          <br />
        </Section>
  
        <Section>
          <Subheading>DELIVERABLES</Subheading>
          <Text>
          • A thorough summary of recent trends in language access and machine translation, written with accessibility for non-specialists in mind.
          </Text>
          <br />
          <Text>
          • A set of timely case studies from other cities’ attempts to incorporate machine translation tools.
          </Text>
          <br />
          <Text>
          • A deep analysis of current strengths and gaps in the St. Louis language access landscape.
          </Text>
          <br />
          <Text>
          • Two concrete policy recommendations revolving around (i) the creation of a government-community hybrid “language access committee” and (ii) the adoption of a AI-powered translation tool, Wordly, for city council meetings.
          </Text>
          <br />
        </Section>
  
        <Section>
          <Subheading>IMPACT</Subheading>
          <Text>
          As the city’s demographics continue to diversify, St. Louis will need to continue to evolve its language access policies and infrastructures. Our report provides an up-to-date picture of the local language access landscape to keep policymakers working in this space well-informed and while preparing them to adjust to ongoing trends. It also shines a light on neglected areas that may require attention. Our recommendations are simple, relatively low-cost, and high-upside actions that were directly informed by perspectives from local stakeholders. By implementing our recommendations, St. Louis will immediately improve language access in the city while also laying a stable foundation for future initiatives.
          </Text>
          <br />
        </Section>

        <Section>
          <Subheading>TEAM</Subheading>
          <ul className='list-disc pl-5 text-lg'>
            <li>Lucas Fluegel (team lead)</li>
            <li>Rachel Arnold (fellow)</li>
            <li>Rhea Banerjee (fellow)</li>
            <li>Wil Czeschin (fellow)</li>
            <li>Devashri Khadke (fellow)</li>
            <li>Deepali Paasham (fellow)</li>
            <li>Eman Teshome (fellow)</li>
            <li>Marvel Zhou (fellow)</li>
          </ul>
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

