
import { FA_APP_URL } from '@/app/constants';
import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer, { FooterLink, FooterSection } from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
import Image from 'next/image';

export default function STCL() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Santa Clara County, CA</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Cybersecurity Risk Prioritization<br></br>for Third-Party Vendors</Text>
        </div>
        <Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />
      </Section>
      <br />

      <Section>
        <Subheading>Project Background</Subheading>
        <Text>
        The local government organization of Santa Clara County, California engages with many third-party vendors, some of whom possess a technology footprint assessed by the County&apos;s Information Security Office. To monitor these vendors, the County uses Bitsight, which generates &quot;security alerts&quot; based on predefined factors independent of the unique relationship these vendors have with the County.
        </Text>
      </Section>

      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
        To address the cybersecurity risk prioritization process for Santa Clara County, Paragon Policy Fellows developed a grading rubric to evaluate the criticality of each third-party vendor, including existing and new vendors, and the potential impact to the County if a breach occurs. The methodology included direct input from the Chief Privacy Officer of Santa Clara County, core elements of risk measurement that the County was currently using (Bitsight ratings), guidelines from current state regulations, and key aspects of current risk assessments, vendor scorecards, and surveillance rubrics.
        </Text>
      </Section>

      <Section>
        <Subheading>Problem Statement</Subheading>
        <Text>
        Prioritizing the cyber risk of third-party vendors is challenging due to the high volume of incoming Bitsight ratings, which ultimately increase barriers to effectively managing cyber risk for the County and its residents. Without a method to prioritize vendors based on their risk level, it is difficult to identify where action is most needed to be taken first.
        </Text>
      </Section>

      <Section>
        <Subheading>Deliverables</Subheading>
        <Text>
        In response to this challenge, Paragon Policy Fellows developed a grading rubric to help evaluate the sensitivity of each vendor and potential for damage if a breach occurs. This rubric enhances the interpretation of Bitsight and other cybersecurity ratings by considering the nature of the vendor relationships, impact on the County, individual/personal impact, and data risk variables to systematically rank and manage third-party cybersecurity risks. This ensures that the most critical threats are addressed first to maintain the County&apos;s security and operational resilience. Also provided is a policy memo including technical instruction for replicating the rubric and a mock case study on a current technology vendor to the County.
        </Text>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This risk rubric was developed to score individual third-party vendors on their risk to a security breach, allowing the County to categorize each vendor&apos;s risk level, prioritize mitigation efforts, and identify key areas of data vulnerabilities. It would be beneficial to ensure future versions of this rubric remain agile to easily incorporate changing laws and regulations regarding privacy and data protection, particularly considering the rapidly evolving AI landscape. (Note: This project was completed as of October 2024.)
        </Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Prince Osaj', role: 'Project Lead' },
            { name: 'Wendy Zeng', role: 'Associate Project Lead' },
            { name: 'Sarah Lawson Pitler', role: 'Associate Project Lead' },
            { name: 'Ches Weinfeld', role: 'Fellow' },
            { name: 'Eric Ye', role: 'Fellow' },
            { name: 'Vimala Machiraju', role: 'Fellow' },
            { name: 'Ngoc-Mai Huynh', role: 'Fellow' }
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
          <FooterLink href={FA_APP_URL}>Apply Now</FooterLink>
          <FooterLink href='/team'>Team Directory</FooterLink>
          <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
          <FooterLink href='/faq'>FAQs</FooterLink>
        </FooterSection>
      </Footer>
    </>
  );
}