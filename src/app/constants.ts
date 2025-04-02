import brownLogo from '@/assets/colleges/brown.png';
import georgetownLogo from '@/assets/colleges/georgetown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import stanfordLogo from '@/assets/colleges/stanford.png';
import ucbLogo from '@/assets/colleges/ucb.png';
import uciLogo from '@/assets/colleges/uci.png';
import ucsdLogo from '@/assets/colleges/ucsd.png';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';
// import maricopaLogo from '@/assets/governments/Maricopa.png';
import brownsvilleLogo from '@/assets/governments/Brownsville.png';
import bostonLogo from '@/assets/governments/Boston.png';
import stLouisLogo from '@/assets/governments/StLouis.png';
import georgiaLogo from '@/assets/governments/Georgia.png';
import losAngelesLogo from '@/assets/governments/LosAngeles.png';
import southBendLogo from '@/assets/governments/SouthBend.png';
import oaklandLogo from '@/assets/governments/Oakland.png';
// import nycLogo from '@/assets/governments/NYC.png';
import southCarolinaLogo from '@/assets/governments/SouthCarolina.png';
import doeLogo from '@/assets/governments/DoE.png';
import tempeLogo from '@/assets/governments/Tempe.png'; 
import santaClaraLogo from '@/assets/governments/Santa Clara.png';
import sanJoseLogo from '@/assets/governments/SanJose.png'; 
import lebanonLogo from '@/assets/governments/Lebanon.png';
import AlbuquerqueLogo from '@/assets/governments/Albuquerque Logo.png';
import AlexandriaLogo from '@/assets/governments/Alexandria Logo.png';
import CDIILogo from '@/assets/governments/CDII Logo.png';
import FortlauderdaleLogo from '@/assets/governments/Fort Lauderdale.png';
import MadisonLogo from '@/assets/governments/Madison.png';
import MissoulaLogo from '@/assets/governments/Missoula.png';
import MontanaSITSDLogo from '@/assets/governments/Montana SITSD.png';
import { StaticImageData } from 'next/image';

export const governments: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    // maricopa: {
    //     name: 'Maricopa',
    //     logo: maricopaLogo
    // },
    brownsville: {
        name: 'Brownsville',
        logo: brownsvilleLogo
    },
    boston: {
        name: 'Boston',
        logo: bostonLogo
    },
    stLouis: {
        name: 'St. Louis',
        logo: stLouisLogo
    },
    georgia: {
        name: 'Georgia',
        logo: georgiaLogo
    },
    losAngeles: {
        name: 'Los Angeles',
        logo: losAngelesLogo
    },
    southBend: {
        name: 'South Bend',
        logo: southBendLogo
    },
    oakland: {
        name: 'Oakland',
        logo: oaklandLogo
    },
    // nyc: {
    //     name: 'New York City',
    //     logo: nycLogo
    // },
    southCarolina: {
        name: 'South Carolina',
        logo: southCarolinaLogo
    },
    doe: {
        name: 'Department of Energy',
        logo: doeLogo
    },
    tempe: {
        name: 'Tempe',
        logo: tempeLogo
    },
    santaClara: {
        name: 'Santa Clara',
        logo: santaClaraLogo
    },
    sanJose: {
        name: 'San Jose',
        logo: sanJoseLogo
    },
    lebanon: {
        name: 'Lebanon',
        logo: lebanonLogo
    },
    Albequerque: {
        name: 'Albequerque',
        logo: AlbuquerqueLogo
    }, 
    Alexandria: {
        name: 'Alexandria',
        logo: AlexandriaLogo
    },
    CDII: {
        name: 'CDII',
        logo: CDIILogo
    },
    Fortlauderdale: {
        name: 'Fortlauderdale',
        logo: FortlauderdaleLogo
    },
    Madison: {
        name: 'Madison',
        logo: MadisonLogo
    },
    Missoula: {
        name: 'Missoula',
        logo: MissoulaLogo
    },
    MontanaSITSD: {
        name: 'MontanaSITSD',
        logo: MontanaSITSDLogo
    },
};

export const colleges: {
    [key: string]: {
        name: string,
        logo: StaticImageData
    }
} = {
    harvard: {
        name: 'Harvard',
        logo: harvardLogo
    },
    brown: {
        name: 'Brown',
        logo: brownLogo
    },
    yale: {
        name: 'Yale',
        logo: yaleLogo
    },
    penn: {
        name: 'Penn',
        logo: pennLogo
    },
    gt: {
        name: 'Georgia Tech',
        logo: gtLogo
    },
    uga: {
        name: 'University of Georgia',
        logo: ugaLogo
    },
    risd: {
        name: 'RISD',
        logo: risdLogo
    },
    iit: {
        name: 'Illinois Tech',
        logo: iitLogo
    },
    georgetown: {
        name: 'Georgetown',
        logo: georgetownLogo
    },
    stanford: {
        name: 'Stanford',
        logo: stanfordLogo
    },
    ucsd: {
        name: 'UC San Diego',
        logo: ucsdLogo
    },
    ucb: {
        name: 'UC Berkeley',
        logo: ucbLogo
    },
    uci: {
        name: 'UC Irvine',
        logo: uciLogo
    }
}

export const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
export const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export const AIRTABLE_URL = process.env.AIRTABLE_URL;
export const MAIL_LIST_URL = "https://forms.gle/hAVRwpTkid44jAZY8"
export const NEWSLETTER_URL = "https://paragonpolicyfellowship.substack.com/"
export const FA_APP_URL = "https://airtable.com/appD9YuZjLzgT3p58/pagnaXfOC5ByK0hoY/form"

export type MenuOption = {
    name: string,
    url: string,
    topBar?: boolean
}

export const defaultMenuOptions: MenuOption[] = [
    //{ name: 'Home', url: '/' },
    { name: 'Past Projects', url: '/projects', topBar: true },
    { name: 'For Governments', url: '/governments', topBar: true },
    { name: 'Meet the Team', url: '/team', topBar: true },
    { name: 'Advisors & Speakers', url: '/advisors', topBar: true },
    { name: 'Contact us', url: 'mailto:paragonfellowship@gmail.com' }
]
