import { JojoMobileLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { StaticImageData } from "next/image";

export const RESUME_DATA: ResumeData = {
  name: "Medi Mohamadi",
  initials: "MM",
  location: "Windsor, Ontario, Canada",
  locationLink: "https://maps.app.goo.gl/7ZtEGvbnB1vCJP759",
  about: "Full Stack Wizard, Coding Spells Daily",
  metadataAbout: "Full Stack Wizard",
  summary: `Dedicated Software Engineer with over 4 years of experience in frontend development, including nearly 1 years as a contractor. Demonstrated ability to drive high-impact results by leading cross-functional teams and successfully delivering projects across diverse domains, including R&D, Front-end, Back-end, and DevOps.  Adept at collaborating with stakeholders and CTOs to align technical solutions with business objectives.  Committed to upholding clean coding practices and maintaining technical excellence.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/33964750?v=4",
  personalWebsiteUrl: "https://medy.dev",
  contact: {
    email: "contact@medy.dev",
    tel: "+12269619905",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/3ripleM",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/medi-mohamadi/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Noshirvani University of Technology",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Pressn'Xpress",
      link: "https://pressnxpress.com",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Jul 2022",
      end: "Aug 2023",
      description: `🤝 Engineered a pivotal marketing product, boosting customer acquisition by 15%, through a high-impact Google review extraction initiative. Leveraged React.js, Node.js, and advanced type safety techniques to secure an 5M+ reviews from 8K locations.\n
                    💼 Pioneered the development of an agile microservices system (MySQL, Neo4j, RabbitMQ, Node.js) for seamless data management, enhancing operational efficiency and contributing to the creation of 70 data-driven marketing reports.\n
                    📣 Improved operational efficiency by 80% through introducing Ansible to streamline tasks including backup, restoration, and container management. Enabled faster and more streamlined deployments by leveraging GitLab CI for continuous integration and deployments.\n
                    🔍 Led a dynamic team in stress-testing using k6 and seamlessly migrating projects to Kubernetes and Docker. Integrated application logging using Prometheus and monitored systems using Grafana, creating detailed reports to determine the application's handling capacity for requests and ensuring robust performance and scalability.
`,
    },
    {
      company: "Press'nXPress",
      link: "https://pressnxpress.com",
      badges: [],
      title: "Frontend Developer → Lead Frontend Developer",
      logo: JojoMobileLogo,
      start: "Feb 2020",
      end: "Aug 2023",
      description: `🤝 I orchestrated a dedicated team to conduct comprehensive stress-testing and seamlessly migrate our suite of projects to Kubernetes, ensuring robust performance and scalability.\n
        👨‍🏫 As a mentor, I guided fellow team members through the intricacies of our codebase, and I played a pivotal role in the successful migration of the majority of our dashboard applications from legacy Angular to React, enhancing overall efficiency and maintainabilityn.\n
        📣 I spearheaded the implementation of cutting-edge, type-safe component and page creation strategies using Elmish react and fp-ts, promoting a more streamlined and reliable development process across the organization.\n
        🔍 Tackling complex challenges head-on, I played a key role in the design and deployment of an innovative caching system using Redux. This solution significantly optimized site loading speed, resulting in an improved user experience.\n
        💼 Overseeing the maintenance and enhancement of the company's landing page, I achieved remarkable results by elevating its Vital score to an impressive 96 for both desktop and mobile devices. This accomplishment further solidified our online presence and user engagement.
        `,
    },
    {
      company: "Rahnema College",
      link: "https://rahnemacollege.com/",
      badges: [],
      title: "Software Engineering Mentor",
      logo: JojoMobileLogo,
      start: "Aug 2021",
      end: "Jan 2022",
      description: `🧑‍🎓 Mentored 15 individuals in DevOps and Software engineering best practices.\n
      🛠️ Provided guidance on technologies like Docker, Kubernetes, React, Node.js, Ansible, Typescript and monitoring tools.\n
      🤝 Led regular meetings and promoted clean coding standards
      `,
    },
    {
      company: "Rahnema College",
      link: "https://rahnemacollege.com/",
      badges: [],
      title: "Software Engineering Intern",
      logo: JojoMobileLogo,
      start: "Jul 2019",
      end: "Sep 2019",
      description: `🛠️ Developed skills in JavaScript, React Native, Redux, RESTful API, Websocket, JWT authentication, Git, and UI/UX Concepts.\n
                  🏃‍♂️ Thrived in an agile work environment, improving teamwork and problem-solving skills.\n
                  👟 Gained practical insights into Scrum methodologies.\n
                  🧑‍🎓 This experience solidified my passion for software engineering and provided practical insights into the field.
      `,
    },
  ],
  skills: {
    languages: ["Typescript", "Javascript", "Python", "Elm", "Rescript"],
    frontend: [
      "React",
      "Graphql",
      "Gatsby",
      "Tailwind",
      "Next.js",
      "Redux",
      "RxJS",
      "Storybook",
      "Jest",
    ],
    Devops: [
      "Docker",
      "Ansible",
      "Gitlab CI/CD",
      "Github Actions",
      "Kubernetes",
    ],
    Software: [
      "RabbitMQ",
      "Git",
      "Scrum",
      "Jira",
      "Puppeteer",
      "MySQL",
      "Neo4j",
      "K6",
      "Nest.js",
    ],

    "Build tools": ["Webpack", "Vite", "NX"],
  },
  projects: [],
};

type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  metadataAbout: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.FC<React.SVGProps<SVGSVGElement>>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo: StaticImageData;
    start: string;
    end: string;
    description: string;
  }[];
  skills: Record<string, Array<string>>;
  projects: {
    title: string;
    techStack: string[];
    description: string;
    logo: StaticImageData;
    link?: {
      label: string;
      href: string;
    };
  }[];
};
