interface Image {
    id: string,
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
    _table: object,
    _rawJson: object,
    id: string,
    fields: {
        name: string,
        title: string,
        image: Image[],
        email: string,
        linkedin: string,
        website: string,
        region: string,
        school: SchoolEnum
    }
}

import HeaderLogo from '@/assets/header-logo.svg'
import Card from "@/components/Card"
import Footer, { FooterLink, FooterSection } from '@/components/Footer'
import Airtable from "airtable"
import Image from "next/image"
import Link from 'next/link'
import { ElementType } from "react"
import { RiLinkedinLine, RiLinksLine, RiMailLine } from "react-icons/ri"
import { colleges } from '../constants'
const base = new Airtable({
    apiKey: `patUaz6OGg90PIjOT.a3a57483b5bb0c36b546a85441b77f8737b4d61e679345b33804f29385d8ed16` // i realize this is bad practice but this key can only read from only the people table (which is public) so im not concerned
}).base('appItWRxWaZWa1qhj');

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
                                <div className='relative'>
                                    <img src={person.fields.image[0].thumbnails.large.url} alt={person.fields.name} className="aspect-square h-32 object-cover rounded-full shadow-lg" />
                                    <img src={college.logo.src} alt={college.name} className="h-12 aspect-square shadow object-contain mt-2 grayscale absolute -bottom-1 -right-1" />
                                </div>
                                <div className="flex flex-col h-full justify-center ml-5">
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

function retrievePeople(): Promise<PersonRecord[]> {
    const allRecords: PersonRecord[] = [];

    return new Promise((resolve, reject) => {
        base('Team Members').select({
            maxRecords: 100
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record: unknown) {
                allRecords.push(record as PersonRecord);
            });

            fetchNextPage();

        }, function done(err) {
            if (err) {
                console.error(err);
                reject(err);
            }
            resolve(allRecords);
        });
    });
}