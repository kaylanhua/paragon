interface Image {
    id: string,
    width: number,
    height: number,
    url: string,
    filename: string,
    size: number,
    type: string,
    thumbnails: {
        small: {
            url: string,
            width: number,
            height: number
        },
        large: {
            url: string,
            width: number,
            height: number
        },
        full: {
            url: string,
            width: number,
            height: number
        }
    }
}

enum SchoolEnum {
    Harvard = 'harvard',
    Brown = 'brown',
    Stanford = 'stanford',
    Yale = 'yale',
    Penn = 'penn',
    GT = 'gt',
    UGA = 'uga',
    RISD = 'risd',
    IIT = 'iit',
    Georgetown = 'georgetown',
    UCSD = 'ucsd',
    UCB = 'ucb',
    UCI = 'uci',
}

interface PersonRecord {
    id: string,
    createdTime: string,
    fields: {
        name: string,
        title: string,
        school: SchoolEnum,
        region: string,
        email: string,
        linkedin: string,
        website: string,
        image: Image[],
        team: string
    }
}

import Card from "@/components/Card"
import Footer, { FooterLink, FooterSection } from '@/components/Footer'
import Image from "next/image"
import { ElementType } from "react"
import { RiLinkedinLine, RiLinksLine, RiMailLine } from "react-icons/ri"
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, colleges } from '../constants'
import TopBar from '@/components/TopBar'

const NO_REGION = "";

function encodeTableName(tableName: string): string {
    return encodeURIComponent(tableName); // Automatically encodes spaces to %20
}

// Updated function to retrieve people with encoded table name
async function retrievePeople(tableName: string): Promise<PersonRecord[]> {
    const encodedTableName = encodeTableName(tableName); // Encode the table name
    const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?maxRecords=100&view=all_ordered`, {
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 1.5 // revalidate every 1.5 hours
        }
    });
    const rec = await records.json();
    return rec.records;
}

// Helper function to group people by region
function groupPeopleByRegion(people: PersonRecord[]) {
    return people.reduce((acc: { [key: string]: PersonRecord[] }, person) => {
        const region = person.fields.region || NO_REGION;
        if (!acc[region]) {
            acc[region] = [];
        }
        acc[region].push(person);
        return acc;
    }, {});
}

// Main Team page with 3 sections
export default async function Team() {
    const organizingTeam = await retrievePeople("Team Members");
    const strategicAdvisors = await retrievePeople("Strategic Advisors");
    const formerOrganizingTeam = await retrievePeople("Former Team Members");

    const organizingByRegion = groupPeopleByRegion(organizingTeam);
    const advisorsByRegion = groupPeopleByRegion(strategicAdvisors);
    const formerByRegion = groupPeopleByRegion(formerOrganizingTeam);

    return <>
        <TopBar />
        <div className="flex items-center justify-center mb-8 h-52 w-full relative">
            <p className="text-5xl font-bold">Our Team</p>
            <div className="h-full w-full bg-gradient-to-b from-primary to-transparent top-0 left-0 absolute -z-10" />
        </div>
        <main className="m-8">
            <TeamSection title="Strategic Advisors" peopleByRegion={advisorsByRegion} />
            <TeamSection title="Organizing Team" peopleByRegion={organizingByRegion} />
            <TeamSection title="Organizing Team Alumni" peopleByRegion={formerByRegion} />
        </main>
        <Footer>
            <FooterSection title='Our Organization'>
                <FooterLink href='/'>Home</FooterLink>
                <FooterLink href='/team'>Team Directory</FooterLink>
                <FooterLink href='mailto:paragonfellowship@gmail.com'>Contact Us</FooterLink>
                <FooterLink href='/faq'>FAQs</FooterLink>
            </FooterSection>
        </Footer>
    </>
}

// Reusable component to render each section (Strategic Advisors, Organizing Team, Former Organizing Team)
function TeamSection({ title, peopleByRegion }: { title: string, peopleByRegion: { [key: string]: PersonRecord[] } }) {
    return (
        <section className="mb-10">
            <p className="text-3xl font-bold uppercase mb-5">{title}</p>
            {Object.entries(peopleByRegion).map(([region, people], i) => (
                <div key={i}>
                    <p className="text-2xl font-bold">{region}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                        {people.map((person, i) => (
                            <Card key={i} className="flex flex-row w-full">
                                <div className='relative h-min'>
                                    {person.fields.image && <img src={person.fields.image[0].thumbnails.large.url} alt={person.fields.name} className="aspect-square h-32 w-32 object-cover rounded-full shadow-lg " />}
                                    {colleges[person.fields.school] && <img src={colleges[person.fields.school].logo.src} alt={colleges[person.fields.school].name} className="h-12 aspect-square object-contain mt-2 absolute -bottom-1 -right-1" />}
                                </div>
                                <div className="flex flex-col h-full justify-center ml-5 w-4/6">
                                    <p className="text-3xl font-semibold">{person.fields.name}</p>
                                    <p className="text-xl">{person.fields.team}</p>
                                    <div className="flex flex-row mt-2 gap-2">
                                        {person.fields.email && person.fields.email.trim() !== "" && (
                                            <IconButton url={`mailto:${person.fields.email}`} icon={RiMailLine} />
                                        )}
                                        {person.fields.linkedin && <IconButton url={person.fields.linkedin} icon={RiLinkedinLine} />}
                                        {person.fields.website && <IconButton url={person.fields.website} icon={RiLinksLine} />}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}


// IconButton component
function IconButton({ icon: Icon, url }: { icon: ElementType, url: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center aspect-square h-10 border-2 border-gray-600 rounded-lg bg-primary hover:bg-secondary transition hover:bg-opacity-60">
                <Icon className="text-xl" />
            </div>
        </a>
    );
}
