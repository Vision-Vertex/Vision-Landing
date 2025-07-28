import {
  CompanyValues,
  NavItem,
  PartnerItem,
  Services,
  Stats,
  Team,
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
import TestmonialLogos2 from '../../public/logos/tinova.webp';
import TestmonialLogos3 from '../../public/logos/jem.webp';
import Team1 from '../../public/assets/team/image (1).png';
import Team2 from '../../public/assets/team/image (2).png';
import Team3 from '../../public/assets/team/image copy.png';
import Partner1 from '../../public/partners/cropped-output-onlinepngtools-2.webp';
import Partner2 from '../../public/partners/jem.png';
import Partner3 from '../../public/partners/tinova.png';
import Partner4 from '../../public/partners/dailyofficesolutions.png';
import Partner5 from '../../public/partners/wagms.png';
import Partner6 from '../../public/partners/TIME.png';
import AiIcon from '../../public/icons/AiIcon.png';
import analyticsIcon from '../../public/icons/analyticsIcon.png';
import appIcon from '../../public/icons/appIcon.png';
import cloudIcon from '../../public/icons/cloudDevOpsIcon.png';
import cybersecurityIcon from '../../public/icons/cybersecurityIcon.png';
import freelancingIcon from '../../public/icons/freelancingIcon.png';
import fullstackIcon from '../../public/icons/fullstack.png';
import microsoft from '../../public/icons/microsoft.png';
import training from '../../public/icons/trainingIcon.png';
import ai from '../../public/services/ai.jpg';
import analytics from '../../public/services/analytics.jpg';
import app from '../../public/services/app.jpg';
import cloud from '../../public/services/cloud.jpg';
import cybersecurity from '../../public/services/cybersecurity.jpg';
import freelancing from '../../public/services/freelancing.avif';
import fullstack from '../../public/services/fullstack.avif';
import trainingImg from '../../public/services/training.avif';
import microsoftImg from '../../public/services/microsoftLogo.jpg';
import { UserRound, Users2Icon, icons } from 'lucide-react';
import { slugify } from '@/lib/slugify';

export const navItems: NavItem[] = [
  {
    title: 'Services',
    href: '',
    description: 'Home is here',
    components: [
      {
           service_name: 'Microsoft Ecosystem Solutions',
        href: '/services/Microsoft-Ecosystem-Solutions',
        description: 'Microsoft Ecosystem Solutions',
      },
      {
        service_name: 'Data Analytics & Business Intelligence',
        href: '/services/Data-Analytics-Business-Intelligence',
        description: 'Data Analytics & Business Intelligence',
      },
      {
        service_name: 'Cloud & DevOps (Azure & AWS)',
        href:'/services/Cloud-Devops-Azure-Aws',
        description: 'Cloud & DevOps (Azure & AWS)',

      },
      {
        service_name: 'AI & Automation',
        href:'/services/Ai-Automation',
        description: 'AI & Automation',

      }, 
      {
        service_name: 'Cybersecurity',
        href:'/services/Cybersecurity',
        description: 'Cybersecurity',

      },
      {
        service_name: 'Java & Full Stack Development',
        href:'/services/Java-Full-Stack-Development',
        description: 'Java & Full Stack Development',

      },
      {
        service_name: 'App Development',
        href:'/services/App-Development',
        description: 'App Development',

      },
      {
        service_name: 'Training',
        href:'/services/Training',
        description: 'Training',

      },
      {
        service_name: 'Freelancing',
        href:'/services/Freelancing',
        description: 'Freelancing',

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
    path: Partner4,
    alt: 'Partner 4',
  },
  {
    path: Partner5,
    alt: 'Partner 5',
  },
  {
    path: Partner6,
    alt: 'Partner 6',
  },

];

export const services: Services[] = [
  {
    icon: microsoft,
    headline: 'Microsoft Ecosystem Solutions',
    slug: slugify('Microsoft Ecosystem Solutions'),
    small_description:
      'Certified Microsoft partner',
    description:
      'We deliver solutions designed to meet your organization’s specific needs. We specialize in deploying, managing, and optimizing the Microsoft 365 suite including SharePoint, Power Apps, Power Automate, and Power BI with certified expertise. From efficient document management to AI-driven automation workflows, we help you maximize productivity, improve collaboration, and maintain compliance with industry standards. Our services ensure your business fully leverages Microsoft 365’s capabilities for long-term success and growth.',
    button1: '/contact-us',
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
    image: microsoftImg,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'As an official Microsoft partner, we deliver secure, scalable implementations of SharePoint, Teams, Power Platform, and Azure integrations. Our solutions include workflow automation, data visualization, and seamless cloud migration.',
    cards: [
      {
        icon: Icon1,
        title: 'Official Microsoft Partner',
        description:
          'Certified expertise for reliable implementations.',
      },
      {
        icon: Icon2,
        title: 'End-to-End Power Platform Integration',
        description:
          'Power BI, Apps, Automate & Virtual Agents.',
      },
      {
        icon: Icon3,
        title: 'Enterprise Security & Compliance',
        description:
          'GDPR, HIPAA, and SOC 2-aligned solutions.',
      },
      {
        icon: Icon4,
        title: 'Adoption & Training Programs',
        description:
          'Ensure maximum ROI on your Microsoft investment.',
      },
    ],
    caseStudies: [{title:'Tinova Agency',description:'Vision5 Tech transformed Tinova Agency’s scattered client feedback into a centralized Power BI dashboard, giving leadership clear visibility into customer satisfaction. This data-driven approach led to a 12% increase in repeat business after improving underperforming SEO services. The team now makes informed decisions backed by real insights, enhancing both client retention and service quality.'}]
  },
  {
    icon: analyticsIcon,
    headline: 'Data Analytics & Business Intelligence',
    slug: slugify('Data Analytics & Business Intelligence'),
    small_description:
      'Advanced analytics and BI solutions',
    description:
      'We specialize in advanced analytics and business intelligence solutions that empower organizations to make smarter, data-driven decisions. Using tools like Power BI, Tableau, and SQL, we build custom analytics platforms tailored to your unique needs. Our solutions integrate and transform data into clear insights, helping you uncover hidden patterns, predict future trends, and automate reporting processes. By leveraging these capabilities, businesses can improve efficiency, optimize strategies, and gain a competitive edge in today’s environment.',
    button1: '/contact-us',
    button2: '/',
    image: analytics,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'From ETL pipelines to interactive dashboards, we create tailored solutions that turn complex data into clear business value.',
    cards: [
      {
        icon: Icon1,
        title: 'AI-Enhanced Analytics',
        description:
          'Machine learning integration.',
      },
      {
        icon: Icon2,
        title: 'Real-Time Dashboards',
        description:
          'Power BI and custom visualization.',
      },
      {
        icon: Icon3,
        title: 'Data Governance Frameworks',
        description:
          'Quality and security assurance.',
      },
      {
        icon: Icon4,
        title: 'Industry-Specific Models',
        description:
          'Retail, healthcare, and finance templates.',
      },
    ],
    caseStudies:[{title: 'First Hijrah Foundation',description:'Vision5 Tech built a custom donation tracking system for First Hijrah Foundation, replacing manual spreadsheets with a secure, scalable, and easy-to-use platform. The solution enabled real-time tracking, automated reporting, and transparent donor communication. As a result, the foundation reduced manual workload, improved stakeholder trust, and gained strategic insights to support its growing mission.'}]
  },
  {
    icon: cloudIcon,
    headline: 'Cloud & DevOps (Azure & AWS) ',
    slug: slugify('Cloud & DevOps (Azure & AWS)'),
    small_description:
      'Azure and AWS solutions with CI/CD pipelines',
    description:
      "We design, migrate, and manage cloud environments for businesses seeking scalable and reliable solutions. Using infrastructure as code and automated deployments, we ensure fast, consistent, and repeatable processes that reduce errors and increase efficiency. Our expertise covers both Azure and AWS platforms, enabling agile delivery through continuous integration and continuous deployment pipelines. This approach helps organizations accelerate software releases, improve collaboration, and maintain high-quality standards while adapting quickly to changing market demands and technological advancements.",
    button1: '/contact-us',
    button2: '/',
    image: cloud,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Full-spectrum cloud services including Kubernetes orchestration, serverless architecture, and cost optimization.',
    cards: [
      {
        icon: Icon1,
        title: 'Azure Expert Certified Team',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'DevSecOps Implementation',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'Multi-Cloud Hybrid Solutions',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: '24/7 Performance Monitoring',
        description:
          '.',
      },
    ],
    caseStudies:[{title:'JemSquare LLC ',description:'Vision5 Tech automated JemSquare LLC’s AWS sub-account onboarding with a CI/CD pipeline, eliminating manual configuration of Service Control Policies, IAM roles, and Control Tower permissions. The new system cut setup time from hours to minutes, reduced security risks, and ensured consistent governance. This allowed JemSquare’s DevOps team to focus on innovation while scaling securely and efficiently.'}]
  },
  {
    icon: AiIcon,
    headline: 'AI & Automation',
    slug: slugify('AI & Automation'),
    small_description:
      'AI-driven process automation with RPA and machine learning',
    description:
      'We implement AI-driven process automation solutions that leverage robotic process automation (RPA) and machine learning technologies to transform business operations. Our services include developing intelligent chatbots that enhance customer interactions, automating document processing to increase accuracy and speed, and creating seamless workflow automation that streamlines repetitive tasks. By integrating these advanced technologies, we help organizations reduce operational costs, minimize errors, improve efficiency, and free up human resources to focus on activities that drive innovation and growth.',
    button1: '/contact-us',
    button2: '/',
    image: ai,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Custom solutions combining Microsoft AI Builder, AWS SageMaker, and UiPath for end-to-end automation.',
    cards: [
      {
        icon: Icon1,
        title: 'Pre-Built Industry Models',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'Seamless Microsoft 365 Integration',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'Process Mining Capabilities',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'Change Management Support',
        description:
          '.',
      },
    ],
    caseStudies:[{title:'WAGMS Enterprises Inc',description:'Vision5 Tech revolutionized WAGMS’s pickup and delivery system with an AI-powered automation solution, replacing manual dispatching with intelligent scheduling and route optimization. The result: a 70% reduction in coordination time, over 95% on-time delivery rate, and significantly improved customer satisfaction. The scalable system continues to learn and improve, turning logistics into a competitive advantage for WAGMS.'}]
  },
  {
    icon: cybersecurityIcon,
    headline: 'Cybersecurity',
    slug: slugify('Cybersecurity'),
    small_description:
      'Proactive security strategies for cloud and hybrid environments ',
    description:
      "We provide proactive security strategies tailored for cloud and hybrid environments to protect your critical assets and data. Our services include thorough compliance audits that ensure adherence to industry regulations and standards, comprehensive penetration testing to identify and address vulnerabilities before they can be exploited, and continuous 24/7 threat monitoring to detect and respond to security incidents in real time. By combining these approaches, we help organizations strengthen their security posture, reduce risks, and maintain trust with customers and stakeholders.",
    button1: '/contact-us',
    button2: '/',
    image: cybersecurity,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Comprehensive services including Zero Trust implementation, SIEM configuration, and security awareness training.',
    cards: [
      {
        icon: Icon1,
        title: 'Microsoft Security Partner',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'GDPR/HIPAA Compliance Specialists',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'Cloud-Native Protection',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'Incident Response Readiness',
        description:
          '.',
      },
    ],
    caseStudies:[{title: 'Daily Office Solutions',
      description: 'Daily Office Solutions, a provider of office management systems, partnered with Vision5 Tech to strengthen its cybersecurity posture amid growing concerns about data breaches and compliance risks. We conducted a full security audit, then implemented multi-layered protections including endpoint detection, identity and access management (IAM), and network segmentation. The results: zero security incidents reported in the six months post-deployment, improved compliance with industry standards, and faster threat detection and response. Daily Office Solutions now operates with greater confidence, knowing its systems and client data are well-protected.'
    },]
  },
  {
    icon: fullstackIcon,
    headline: 'Java & Full Stack Development',
    slug: slugify('Java & Full Stack Development'),
    small_description:
      'Robust solutions with Spring Boot, React, and microservices.',
    description:
      "We specialize in building robust, scalable, and secure applications using Java and full stack technologies. Our team leverages modern frameworks across both frontend and backend to deliver end-to-end solutions tailored to your business needs. From user-friendly interfaces to powerful backend systems, we create high-performance applications that are easy to maintain and ready to grow with your business. Our full stack capabilities help organizations accelerate development, reduce complexity, and bring products to market faster.",
    button1: '/contact-us',
    button2: '/',
    image: fullstack,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'End-to-end development services from API design to progressive web apps.',
    cards: [
      {
        icon: Icon1,
        title: 'Java Experts (Spring/Quarkus)',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'React/Angular Specialists',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'CI/CD Pipeline Integration',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'Legacy System Modernization',
        description:
          '.',
      },
    ],
  },
    {
    icon: appIcon,
    headline: 'App Development',
    slug: slugify('App Development'),
    small_description:
      'From low-code Power Apps to native cross-platform solutions.',
    description:
      "We offer custom app development services that help businesses bring their ideas to life through intuitive, scalable, and secure applications. From mobile apps to web platforms, our team builds solutions tailored to your specific needs using modern technologies and agile practices. We handle everything from design to deployment, ensuring a seamless user experience and strong performance. Our apps help organizations streamline operations, engage customers, and drive growth in an increasingly digital world.",
    button1: '/contact-us',
    button2: '/',
    image: app,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Full lifecycle development including UX design, testing, and App Store deployment.',
    cards: [
      {
        icon: Icon1,
        title: 'Power Platform Integration',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'Cross-Platform Capabilities',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'IoT & Wearable Tech Experience',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'App Store Optimization',
        description:
          '.',
      },
    ],
    caseStudies:[{title: 'Time Clothing',
      description: 'Time Clothing, a fast-growing retail brand, partnered with Vision5 Tech to streamline inventory management and avoid frequent stockouts. We developed a custom stock tracking app that provides real-time visibility into product levels and sends automated alerts when items run low or go out of stock. The solution helped reduce missed sales opportunities, improved restocking efficiency, and boosted customer satisfaction. With inventory now managed proactively, Time Clothing can scale confidently while maintaining optimal product availability.'
    },{title: 'Time Clothing',
      description: 'Time Clothing, a fast-growing retail brand, partnered with Vision5 Tech to streamline inventory management and avoid frequent stockouts. We developed a custom stock tracking app that provides real-time visibility into product levels and sends automated alerts when items run low or go out of stock. The solution helped reduce missed sales opportunities, improved restocking efficiency, and boosted customer satisfaction. With inventory now managed proactively, Time Clothing can scale confidently while maintaining optimal product availability.'
    },{title: 'Time Clothing',
      description: 'Time Clothing, a fast-growing retail brand, partnered with Vision5 Tech to streamline inventory management and avoid frequent stockouts. We developed a custom stock tracking app that provides real-time visibility into product levels and sends automated alerts when items run low or go out of stock. The solution helped reduce missed sales opportunities, improved restocking efficiency, and boosted customer satisfaction. With inventory now managed proactively, Time Clothing can scale confidently while maintaining optimal product availability.'
    },]
  },
    {
    icon: training,
    headline: 'Training',
    slug: slugify('Training'),
    small_description:
      ' Hands-on programs for Microsoft, cloud, and development skills.',
    description:
      "We specialize in comprehensive technology training programs designed to empower individuals with diverse skill levels—from beginners to professionals. Our hands-on courses cover Microsoft 365, Power Platform, IT fundamentals, and more, tailored to meet your unique learning goals. By combining practical instruction with real-world applications, we help learners build confidence, advance their careers, and adapt to the evolving tech landscape. Our training solutions enable organizations and individuals to close skills gaps, boost productivity, and thrive in today’s digital economy.",
    button1: '/contact-us',
    button2: '/',
    image: trainingImg,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Corporate and individual training in Power Platform, Azure, cybersecurity, and more.',
    cards: [
      {
        icon: Icon1,
        title: 'Microsoft Learning Partner',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'Cloud Lab Environments',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'Job Placement Assistance',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'Custom Corporate Programs',
        description:
          '.',
      },
    ],
    caseStudies:[{title: 'Vision5 Tech Training',description:'Workforce Training & Upskilling Vision5 Tech launched a tailored training program to upskill hundreds of individuals—both with and without technology backgrounds—across various communities. Our hands-on curriculum covered Microsoft 365, Power Platform, and foundational IT concepts, designed to meet learners at their skill level. As a result, non-technical participants gained the confidence to enter tech roles, while those with experience advanced into higher-paying, in-demand positions. Many graduates have since landed jobs in help desk support, data analysis, and cloud administration, proving the program’s success in bridging the digital skills gap and empowering career growth.'}]
  },
  {
    icon: freelancingIcon,
    headline: 'Freelancing',
    slug: slugify('Freelancing'),
    small_description:
      'Vetted freelancers for short-term projects.',
    description:
      "We provide flexible freelance services that help businesses access expert talent on demand. From web and app development to graphic design, IT support, and digital marketing, our freelancers deliver high-quality results tailored to your needs. Whether you're launching a project or filling a skill gap, we offer fast, affordable, and reliable solutions. Our services enable small businesses and startups to scale efficiently, reduce costs, and stay competitive in a fast-paced market.",
    button1: '/contact-us',
    button2: '/',
    image: freelancing,
    second_headline: 'Why Choose Our Offshore Teams?',
    second_description:
      'Our platform connects you with pre-screened experts for project-based work.',
    cards: [
      {
        icon: Icon1,
        title: 'Rigorous Vetting Process',
        description:
          '.',
      },
      {
        icon: Icon2,
        title: 'Microsoft Technology Experts',
        description:
          '.',
      },
      {
        icon: Icon3,
        title: 'Hourly or Project-Based Contracts',
        description:
          '.',
      },
      {
        icon: Icon4,
        title: 'Dedicated Account Management',
        description:
          '.',
      },
    ],
    caseStudies:[{title:'Freelance Services for Small Businesses',description:'Vision5 Tech has supported multiple private companies and small businesses by providing reliable freelance services across web development, graphic design, digital marketing, and IT support. Our flexible, on-demand talent model allowed clients to access expert services without the overhead of full-time hires. From building custom websites to setting up secure cloud environments, we helped businesses save time, reduce costs, and launch faster. Clients consistently reported improved productivity and professional outcomes—demonstrating how our freelance solutions deliver big impact for growing businesses.'}]
  },
];
export const stats: Stats[] = [
  {
    name: 'Business Clients',
    number: 10,
    icon: Users2Icon,
  },
  {
    name: 'Students',
    number: 200,
    icon: Users2Icon,
  },
  {
    name: 'Countries though outsourcing',
    number: 3,
    icon: Users2Icon,
  },
  {
    name: 'Retention',
    number: 100,
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
   {
    quote:
      "We are incredibly grateful to Vision5 Tech LLC for developing a customized donation tracking application during one of the most critical times in our organization's history—when we purchased our new center. Their team not only delivered a user-friendly and reliable solution, but they also truly understood our community-driven mission. The application helped us manage and track hundreds of contributions with ease, transparency, and accuracy. It has been a game-changer in our fundraising and reporting efforts. We couldn't be more pleased with the professionalism, responsiveness, and technical expertise of Vision5 Tech. We highly recommend them to any organization looking for trusted IT solutions.",
    name: 'Tinova',
    image: TestmonialLogos2,
  },
  {
    quote:
      "We are incredibly grateful to Vision5 Tech LLC for developing a customized donation tracking application during one of the most critical times in our organization's history—when we purchased our new center. Their team not only delivered a user-friendly and reliable solution, but they also truly understood our community-driven mission. The application helped us manage and track hundreds of contributions with ease, transparency, and accuracy. It has been a game-changer in our fundraising and reporting efforts. We couldn't be more pleased with the professionalism, responsiveness, and technical expertise of Vision5 Tech. We highly recommend them to any organization looking for trusted IT solutions.",
    name: 'JS',
    image: TestmonialLogos3,
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
