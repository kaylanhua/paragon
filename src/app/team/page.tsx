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
    Yale = 'yale',
    Penn = 'penn',
    GT = 'gt',
    UGA = 'uga',
    RISD = 'risd',
    IIT = 'iit'
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
        image: Image[]
    }
}

import HeaderLogo from '@/assets/header-logo.svg'
import Card from "@/components/Card"
import Footer, { FooterLink, FooterSection } from '@/components/Footer'
import Image from "next/image"
import Link from 'next/link'
import { ElementType } from "react"
import { RiLinkedinLine, RiLinksLine, RiMailLine } from "react-icons/ri"
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, colleges } from '../constants'

export default async function Team() {
    const people = await retrievePeople();
    const peopleSortedByCollege = people.sort((a, b) => a.fields.school.localeCompare(b.fields.school));
    const peopleByRegion = peopleSortedByCollege.reduce((acc: {
        [key: string]: PersonRecord[]
    }, person) => {
        if (!acc[person.fields.region]) {
            acc[person.fields.region] = [];
        }
        acc[person.fields.region].push(person);
        return acc;
    }, {});

    return <>
        <div className="flex items-center justify-center mb-8 h-52 w-full relative">
            <Link href="/" className="absolute top-4 left-4">
                <Image src={HeaderLogo} alt="Paragon Logo" className='mb-6 w-[200px]' />
            </Link>
            <p className="text-5xl font-bold">Our Team</p>
            <div className="h-full w-full bg-gradient-to-b from-primary to-transparent top-0 left-0 absolute -z-10" />
        </div>
        <main className="m-8">
            {Object.entries(peopleByRegion).map(([region, people], i) => {
                return <section key={i}>
                    <p className="text-3xl font-bold uppercase">{region}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-5">
                        {people.map((person, i) => {
                            const college = colleges[person.fields.school];

                            return <Card key={i} className="flex flex-row w-full">
                                <div className='relative h-min'>
                                    <img src={person.fields.image[0].thumbnails.large.url} alt={person.fields.name} className="aspect-square h-32 w-32 object-cover rounded-full shadow-lg " />
                                    {college && <img src={college.logo.src} alt={college.name} className="h-12 aspect-square shadow object-contain mt-2 grayscale absolute -bottom-1 -right-1" />}
                                </div>
                                <div className="flex flex-col h-full justify-center ml-5 w-4/6">
                                    <p className="text-3xl font-semibold">{person.fields.name}</p>
                                    <p className="text-xl">{person.fields.title}</p>
                                    <div className="flex flex-row mt-2 gap-2">
                                        <IconButton url={`mailto:${person.fields.email}`} icon={RiMailLine} />
                                        {person.fields.linkedin && <IconButton url={person.fields.linkedin} icon={RiLinkedinLine} />}
                                        {person.fields.website && <IconButton url={person.fields.website} icon={RiLinksLine} />}
                                    </div>
                                </div>
                            </Card>
                        })}
                    </div>
                </section>
            })}
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

function IconButton({ icon: Icon, url }: { icon: ElementType, url: string }) {
    // i figure most people will want to see referrer analytics on their media platforms so i'm ignoring the eslint warning
    // eslint-disable-next-line react/jsx-no-target-blank
    return <a href={url} target="_blank">
        <div className="flex items-center justify-center aspect-square h-10 border-2 border-gray-600 rounded-lg bg-primary hover:bg-secondary transition hover:bg-opacity-60">
            <Icon className="text-xl" />
        </div>
    </a>
}

async function retrievePeople(): Promise<PersonRecord[]> {
    // TODO: this only can handle 100 records cuz api limitations. Expand if necessary
    // also notable that we dont use the airtable library because it breaks during build.
    // see https://www.reddit.com/r/Netlify/comments/jv7z8g/strange_abortsignal_error_trying_to_get_a_lambda/
    const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Team%20Members?maxRecords=100`, {
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`
        }
    }); 1
    const rec = await records.json();
    return rec.records;
}