import brownLogo from '@/assets/colleges/brown.png';
import gtLogo from '@/assets/colleges/gt.svg';
import harvardLogo from '@/assets/colleges/harvard.png';
import iitLogo from '@/assets/colleges/iit.jpeg';
import pennLogo from '@/assets/colleges/penn.png';
import risdLogo from '@/assets/colleges/risd.svg';
import ugaLogo from '@/assets/colleges/uga.png';
import yaleLogo from '@/assets/colleges/yale.png';
import { StaticImageData } from 'next/image';

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
    }
}