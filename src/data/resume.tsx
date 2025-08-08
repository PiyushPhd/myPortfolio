import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Piyush Pahade",
  initials: "PyshPhd",
  url: "https://piyushpahade.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi/@28.7040602,77.1024934,12z",
  description:
    "Developer with a strategic mindset. Passionate about innovation, automation, and delivering solutions that make a difference",
  summary:
    "Strategic Implementation Specialist & Developer with 4+ years’ experience delivering solutions that boost efficiency and client satisfaction. Skilled in SaaS deployments, workflow automation, and third-party integrations. Proven in project management, global collaboration, and documentation. Salesforce-certified in Development, Administration, and App Building, with expertise in intent-based tech and AI-driven analytics. Known for rapid experimentation and leading high-impact initiatives.",
  avatarUrl: "/PiyushP.jpg",
  skills: [
    "Salesforce Development",
    "Administration",
    "Tools",
    "Integration & Automation",
    "Salesforce Platform ",
    "Nimble AMS & Symphony",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact.piyushpahade@gmail.com",
    tel: "+91 808 795 8304",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PiyushPhd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyushpahade/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/piyush_pahade",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MaxVal Group",
      href: "https://www.maxval.com",
      badges: [],
      location: "Delhi",
      title: "Implementation Specialist",
      logoUrl: "/maxval.png",
      start: "Sept 2024",
      end: "Present",
      description:
        "Led end-to-end Salesforce implementations for enterprise clients, aligning technology with business goals via stakeholder workshops, requirements gathering, and solution design. Delivered strategic advisory using market research to craft tailored recommendations that boosted client performance and user experience. Conducted customer journey mapping and process redesigns to eliminate bottlenecks. Collaborated cross-functionally to build data-backed business cases",
    },
    {
      company: "Community Brands",
      badges: [],
      href: "https://www.communitybrands.com/",
      location: "Pune",
      title: "Salesforce Developer",
      logoUrl: "/CB.png",
      start: "Oct 2021",
      end: "Aug 2024",
      description:
        "Designed and deployed scalable Salesforce solutions for 15+ global clients using Apex, LWC, SOQL, and APIs. Acted as a trusted SME, gathering and refining requirements into robust architectures. Increased platform adoption by 25% through tailored configurations. Led SaaS deployments, cutting timelines by 30%. Built automated workflows reducing manual effort by 40%. Created solution accelerators and maintained detailed documentation.",
    },
    {
      company: "Aditya Pharmacy",
      href: "https://www.communitybrands.com/",
      badges: [],
      location: "Amravati",
      title: "Business Co-ordinator",
      logoUrl: "/Adityapharm.png",
      start: "June 2020",
      end: "Mar 2021",
      description:
        "During the COVID-19 peak, I led a delivery system for essential medicines in underserved communities. Developed a WhatsApp order system categorizing orders by PIN code to optimize routes. Managed logistics with strict safety protocols and timely delivery. Implemented cost-saving measures, collaborated with pharmacies, and ensured efficient resource use—delivering critical medical supplies during a high-pressure period.",
    },
    {
      company: "Itrons Technologies",
      href: "https://www.itrons.com/",
      badges: [],
      location: "Amravati",
      title: "Intern",
      logoUrl: "/splunk.svg",
      start: "Aug 2019",
      end: "Aug 2020",
      description:
        "During my internship at Itron Technologies, I gained hands-on experience with AWS cloud infrastructure, deploying web applications using EC2, S3, and Route 53. Explored cloud providers like Azure and Google Cloud, learned Linux server configuration, and studied cloud networking concepts such as VPCs and security groups. Developed an understanding of deployment pipelines focusing on scalability, availability, and security.",
    },
    {
      company: "Bharat Sanchar Nigam Limited",
      href: "https://bsnl.co.in/",
      badges: [],
      location: "Nagpur",
      title: "Trainee",
      logoUrl: "/bsnl.png",
      start: "June 2018",
      end: "August 2018",
      description:
        "Contributed to BSNL’s optical fiber network by configuring and testing OLT and ONT devices for optimal performance. Supported broadband and FTTH troubleshooting by analyzing logs and resolving latency issues. Assisted engineers in deploying high-speed broadband in rural areas, ensuring compliance with standards. Performed MPLS network analysis, recommending routing enhancements to reduce packet loss and improve reliability.",
    },
    /*{
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },*/
  ],
  education: [
    {
      school: "Sant Gadge Baba Amravati University",
      href: "https://sgbau.ac.in",
      degree: "Bachelor's Degree of Computer Science and Engineering (B.Tech)",
      logoUrl: "/sgbau_logo.png",
      start: "2017",
      end: "2020",
    },
    {
      school: "Maharashtra State Board of Technical Education",
      href: "https://msbte.ac.in",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/msbte.jpeg",
      start: "2014",
      end: "2017",
    },
    {
      school: "Dnyamata High School",
      href: "https://www.dnyamatahighschool.com",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "/DHS.png",
      start: "2001",
      end: "2014",
    },
  ],
  projects: [
    /*{
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },*/
  ],
  hackathons: [
    {
      title: "Winner of Idea Day 2023",
      dates: "November 2023",
      location: "Community Brands, Pune",
      description:
        "Spearheaded the winning proposal in the Customer Delight Category at Idea Day 2023, enhancing Association Management Systems. Demonstrated innovation, strategic thinking, and the ability to design impactful solutions that improve customer experience and drive organizational success.",
      image:
        "/CB.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    },
    {
      title: "Excellence Award, Q3 2023",
      dates: "Q3 2023",
      location: "Community Brands, Pune",
      description:
        "Recognized for outstanding project management and execution,leading to the successful Go-Live of two major client projects, showcasing exceptional leadership and technical expertise",
      image:
        "/CB.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    },
    {
      title: "First runner up in Idea Day 2022",
      dates: "November 2022",
      location: "Community Brands, Pune",
      description:
        "Developed and presented innovative solutions for Association Management Systems, significantly contributing to the improvement of customer engagement strategies.",
      image:
        "/CB.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    },
    {
      title: "Event Incharge For Campus Mania",
      dates: "February 2020",
      location: "Amravati",
      description:
        "Organized and managed the Campus Mania event at Sant Gadge Baba Amravati University, overseeing logistics, coordinating with participants, and ensuring a successful event.",
      image:
        "/sgbau_logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    },
    {
      title: "Paper Publication",
      dates: "May 2020",
      location: "Sant Gadge Baba Amravati University, Amravati",
      description:
        "Conducted plagiarism analysis on user-uploaded synopses using software to compare against literature, websites, and databases. Delivered similarity scores to uphold originality and authenticity, ensuring integrity of work and proper credit to sources in academic and professional environments",
      image:
        "/sgbau_logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    },
    {
      title: "Winner of Technical Debate Competition",
      dates: "2019",
      location: "Sant Gadge Baba Amravati University, Amravati",
      description:
        "In a technical debate, I advocated for net neutrality, stressing the need for a free and open internet. I highlighted risks of allowing ISPs to control speed or prioritize content, emphasizing equal access and fairness for all online users.",
      icon: "public",
      image:
        "/sgbau_logo.png",
    },
    {
      title: "Winner of Business Plan Competition",
      dates: "2018",
      location: "Sant Gadge Baba Amravati University, Amravati",
      description:
        "",
      image:
        "/msbte.jpeg",
    },
  ],
} as const;
