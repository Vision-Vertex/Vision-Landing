import { NavItem, PartnerItem, Services, Stats, Testmonial } from '@/types';
import Google from '../../public/partners/image 2.png';
import Icon1 from '../../public/icons/Frame.png';
import Icon2 from '../../public/icons/Group 23.png';
import Icon3 from '../../public/icons/Group 26.png';
import Icon4 from '../../public/icons/image 4.png';
import Icon5 from '../../public/icons/image 5.png';
import Picture1 from '../../public/images/Rectangle 34 (1).png';
import Picture2 from '../../public/images/Rectangle 34.png';
import { UserRound } from 'lucide-react';

export const navItems: NavItem[] = [
  {
    title: 'Services',
    href: '',
    description: 'Home is here',
    components: [
      {
        service_name: 'A service',
        href: '/service/A',
        description: 'A service',
      },
      {
        service_name: 'B service',
        href: '/service/B',
        description: 'B service',
      },
    ],
    link: false,
  },
  {
    title: 'About Us',
    href: '/about-us',
    link: true,
  },
];

export const partners: PartnerItem[] = [
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
  {
    path: Google,
    alt: 'Google Logo',
  },
];

export const services: Services[] = [
  {
    icon: Icon1,
    headline: 'Offshore Development Teams',
    small_description:
      'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
    button: '/',
    image: Picture2,
  },
  {
    icon: Icon2,
    headline: 'Offshore Development Teams 1',
    small_description:
      'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
    button: '/',
    image: Picture1,
  },
  {
    icon: Icon3,
    headline: 'Offshore Development Teams 2',
    small_description:
      'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
    button: '/',
    image: Picture2,
  },
  {
    icon: Icon4,
    headline: 'Offshore Development Teams 3',
    small_description:
      'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
    button: '/',
    image: Picture2,
  },
  {
    icon: Icon5,
    headline: 'Offshore Development Teams 4',
    small_description:
      'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
    button: '/',
    image: Picture2,
  },
];
export const stats: Stats[] = [
  {
    name: 'Business',
    number: 2245341,
    icon: UserRound,
  },
  {
    name: 'Business',
    number: 46328,
    icon: UserRound,
  },
  {
    name: 'Business',
    number: 828867,
    icon: UserRound,
  },
  {
    name: 'Business',
    number: 1926436,
    icon: UserRound,
  },
];
export const testmonial: Testmonial[] = [
  {
    quote:
      "We are incredibly grateful to Vision5 Tech LLC for developing a customized donation tracking application during one of the most critical times in our organization's history—when we purchased our new center. Their team not only delivered a user-friendly and reliable solution, but they also truly understood our community-driven mission. The application helped us manage and track hundreds of contributions with ease, transparency, and accuracy. It has been a game-changer in our fundraising and reporting efforts. We couldn’t be more pleased with the professionalism, responsiveness, and technical expertise of Vision5 Tech. We highly recommend them to any organization looking for trusted IT solutions.",
    name: 'First Hijrah Foundation Board',
    icon: UserRound,
  },
];
