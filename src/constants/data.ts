import {
  CompanyValues,
  NavItem,
  PartnerItem,
  Services,
  Stats,
  Testmonial,
} from '@/types';
import Google from '../../public/partners/image 2.png';
import Icon1 from '../../public/icons/Frame.png';
import Icon2 from '../../public/icons/Group 23.png';
import Icon3 from '../../public/icons/Group 26.png';
import Icon4 from '../../public/icons/image 4.png';
import Icon5 from '../../public/icons/image 5.png';
import Picture1 from '../../public/images/Rectangle 34 (1).png';
import Picture2 from '../../public/images/Rectangle 34.png';
import TestmonialLogos from '../../public/logos/hijrah.webp';
import Team1 from '../../public/assets/team/image (1).png';
import Team2 from '../../public/assets/team/image (2).png';
import Team3 from '../../public/assets/team/image copy.png';
import Partner1 from '../../public/partners/cropped-output-onlinepngtools-2.webp';
import Partner2 from '../../public/partners/jem.png';
import Partner3 from '../../public/partners/photo_2025-06-19 17.40.15.jpeg';
import { UserRound, Users2Icon, icons } from 'lucide-react';
import { slugify } from '@/lib/slugify';
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
    path: Partner1,
    alt: 'Partner 1',
  },
  {
    path: Partner2,
    alt: 'Partner 2',
  },
  {
    path: Partner3,
    alt: 'Partner 3',
  },
  {
    path: Partner1,
    alt: 'Partner 1',
  },
  {
    path: Partner2,
    alt: 'Partner 2',
  },
  {
    path: Partner3,
    alt: 'Partner 3',
  },
  {
    path: Partner1,
    alt: 'Partner 1',
  },
  {
    path: Partner2,
    alt: 'Partner 2',
  },
  {
    path: Partner3,
    alt: 'Partner 3',
  },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
  // {
  //   path: Google,
  //   alt: 'Google Logo',
  // },
];

export const services: Services[] = [
  {
    icon: Icon1,
    headline: 'Microsoft Ecosystem Solutions',
    slug: slugify('Microsoft Ecosystem Solutions'),
    small_description:
      'As a certified Microsoft partner, we deliver trusted, enterprise-grade Microsoft 365 solutions.',
    description:
      'We specialize in deploying and optimizing the Microsoft 365 suite—including SharePoint, Power Apps, Power Automate, and Power BI—with certified expertise. From document management to AI-driven automation, we help you maximize productivity while maintaining compliance.',
    button1: '/',
    button2: '/',
    partners: [
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
      {
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        alt: 'Google Logo',
        link: 'https://google.com',
      },
    ],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.',
    cards: [
      {
        icon: Icon1,
        title: '24/7 Productivity',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon2,
        title: 'Skilled Talent Pool',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon3,
        title: 'Expertise',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon4,
        title: 'Scalability',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
    ],
  },
  {
    icon: Icon2,
    headline: 'Data Analytics & Business Intelligence',
    slug: slugify('Data Analytics & Business Intelligence'),
    small_description:
      'Advanced analytics and BI solutions for data-driven decision making',
    description:
      'We specialize in building custom analytics platforms utilizing powerful tools such as Power BI, Tableau, and SQL to help organizations uncover valuable insights, predict emerging trends, and automate their reporting processes. Our approach begins with a thorough understanding of each client’s unique data landscape and business objectives. By leveraging the advanced capabilities of Power BI and Tableau, we create visually compelling dashboards and reports that present data in a clear and actionable format.',
    button1: '/',
    button2: '/',
    image: Picture1,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.',
    cards: [
      {
        icon: Icon1,
        title: '24/7 Productivity',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon2,
        title: 'Skilled Talent Pool',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon3,
        title: 'Expertise',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon4,
        title: 'Scalability',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
    ],
  },
  {
    icon: Icon3,
    headline: 'Cloud & DevOps (Azure & AWS) ',
    slug: slugify('Cloud & DevOps (Azure & AWS)'),
    small_description:
      'Azure and AWS solutions with CI/CD pipelines for agile delivery  ',
    description:
      "We specialize in designing, migrating, and managing cloud environments using infrastructure-as-code and automated deployment practices to enhance efficiency and scalability. Our process begins with assessing clients' existing infrastructure to create tailored cloud solutions. During migration, we ensure a seamless transition with minimal downtime. By implementing infrastructure-as-code, we enable consistent management of cloud resources and rapid scaling. Our automated deployment strategies streamline updates while maintaining security and compliance. With ongoing support and optimization, we empower organizations to fully leverage cloud technology for innovation and operational excellence.",
    button1: '/',
    button2: '/',
    image: Picture2,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.',
    cards: [
      {
        icon: Icon1,
        title: '24/7 Productivity',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon2,
        title: 'Skilled Talent Pool',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon3,
        title: 'Expertise',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon4,
        title: 'Scalability',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
    ],
  },
  {
    icon: Icon4,
    headline: 'AI & Automation',
    slug: slugify('AI & Automation'),
    small_description:
      'Intelligent Automation for Operational Excellence',
    description:
      'We implement chatbots, document processing AI, and workflow automation to significantly reduce costs and minimize errors in business operations. Our solutions are designed to enhance efficiency by automating routine tasks, allowing organizations to allocate resources more effectively. Chatbots provide instant support and streamline customer interactions, while document processing AI automates data extraction and validation, ensuring accuracy and speed. Additionally, our workflow automation tools optimize processes by eliminating bottlenecks and improving collaboration across teams. By integrating these technologies, we help businesses achieve greater operational efficiency and drive cost savings, enabling them to focus on strategic initiatives and growth.',
    button1: '/',
    button2: '/',
    image: Picture2,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.',
    cards: [
      {
        icon: Icon1,
        title: '24/7 Productivity',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon2,
        title: 'Skilled Talent Pool',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon3,
        title: 'Expertise',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon4,
        title: 'Scalability',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
    ],
  },
  {
    icon: Icon5,
    headline: 'Cybersecurity',
    slug: slugify('Cybersecurity'),
    small_description:
      'Proactive security strategies for cloud and hybrid environments ',
    description:
      "We deliver comprehensive compliance audits, penetration testing, and 24/7 threat monitoring to enhance our clients' cybersecurity posture. Our compliance audits ensure that organizations meet relevant regulations and standards, identifying gaps and providing actionable recommendations for improvement. Through rigorous penetration testing, we simulate cyberattacks to uncover vulnerabilities in systems and applications, enabling proactive remediation. Additionally, our round-the-clock threat monitoring services detect and respond to potential security incidents in real time, ensuring that clients can mitigate risks before they escalate. By integrating these services, we provide a robust cybersecurity framework that protects sensitive data and fosters confidence in organizational security practices.",
    button1: '/',
    button2: '/',
    image: Picture2,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.',
    cards: [
      {
        icon: Icon1,
        title: '24/7 Productivity',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon2,
        title: 'Skilled Talent Pool',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon3,
        title: 'Expertise',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
      {
        icon: Icon4,
        title: 'Scalability',
        description:
          'Access top developers, PMs, and QA experts from Ethiopia and India for 24/7 productivity and major cost savings.',
      },
    ],
  },
];
export const stats: Stats[] = [
  {
    name: 'Business',
    number: 2245341,
    icon: Users2Icon,
  },
  {
    name: 'Business',
    number: 46328,
    icon: Users2Icon,
  },
  {
    name: 'Business',
    number: 828867,
    icon: Users2Icon,
  },
  {
    name: 'Business',
    number: 1926436,
    icon: Users2Icon,
  },
];
export const testmonial: Testmonial[] = [
  {
    quote:
      "We are incredibly grateful to Vision5 Tech LLC for developing a customized donation tracking application during one of the most critical times in our organization's history—when we purchased our new center. Their team not only delivered a user-friendly and reliable solution, but they also truly understood our community-driven mission. The application helped us manage and track hundreds of contributions with ease, transparency, and accuracy. It has been a game-changer in our fundraising and reporting efforts. We couldn't be more pleased with the professionalism, responsiveness, and technical expertise of Vision5 Tech. We highly recommend them to any organization looking for trusted IT solutions.",
    name: 'First Hijrah Foundation Board',
    image: TestmonialLogos,
  },
];

export const company_values: CompanyValues[] = [
  {
    title: 'Mission',
    small_description:
      'Elevating business success through forward-thinking IT solutions, professional training, and technology partnerships.',
    description:
      "Our company's mission focuses on elevating business success through forward-thinking IT solutions, professional training, and strategic technology partnerships. This mission highlights a results-driven approach, aiming to enhance organizational outcomes for clients by providing proactive and innovative technology solutions that keep them ahead of the competition. Professional training is a key component, empowering clients with the knowledge and skills necessary to maximize the effectiveness of the IT solutions implemented. Moreover, the emphasis on forming technology partnerships signifies a collaborative spirit, where the company works closely with clients and technology providers to create a supportive ecosystem that fosters shared goals and mutual success. Together, these elements position the company as a leader in delivering comprehensive IT services that drive meaningful advancements for businesses.",
  },
  {
    title: 'Vision',
    small_description:
      'Empowering growth through innovative IT solutions, expert consulting, and a culture of continuous development.',
    description:
      "Our company's vision is centered on empowering growth through innovative IT solutions, expert consulting, and fostering a culture of continuous development. This vision underscores the commitment to not only enhance client capabilities but also to drive their long-term success in a rapidly evolving technological landscape. By prioritizing innovation, the company aims to develop cutting-edge tools and systems that address both current and future client needs. Expert consulting plays a crucial role in this vision, as it ensures that clients receive tailored guidance to navigate complex IT challenges effectively. Additionally, the emphasis on a culture of continuous development reflects a dedication to ongoing learning and improvement, benefiting both employees and clients alike.",
  },
];

export const team: Team[] = [
  {
    image: Team1,
    position: 'Vision 1',
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe-1234567890',
    email: 'john.doe@example.com',
  },
  {
    image: Team2,
    position: 'Vision 2',
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe-1234567890',
    email: 'john.doe@example.com',
  },
  {
    image: Team3,
    position: 'Vision 3',
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe-1234567890',
    email: 'john.doe@example.com',
  },
  {
    image: Team1,
    position: 'Vision 4',
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe-1234567890',
    email: 'john.doe@example.com',
  },
  {
    image: Team2,
    position: 'Vision 5',
    name: 'John Doe',
    linkedin: 'https://www.linkedin.com/in/john-doe-1234567890',
    email: 'john.doe@example.com',
  },
];
