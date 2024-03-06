import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const socials = [
  {
    icon: <GitHubIcon />,
  },
  {
    icon: <TelegramIcon />,
  },
  {
    icon: <EmailIcon />,
  },
  {
    icon: <LinkedInIcon />,
  },
];

export const socialsResponsive = [
  {
    icon: <GitHubIcon fontSize="small" className="text-[20px]" />,
  },
  {
    icon: <TelegramIcon fontSize="small" className="text-[20px]" />,
  },
  {
    icon: <EmailIcon fontSize="small" className="text-[20px]" />,
  },
  {
    icon: <LinkedInIcon fontSize="small" className="text-[20px]" />,
  },
];

export const skillsData = [
  {
    no: "1.",
    title: "FrontEnd",
    titleColor: "text-yellow-500",
    bgColor: "bg-gradient-to-r from-[#0c260b] to-[#161616]",
    skills: [
      {
        title: "React",
      },
      {
        title: "NextJs",
      },
      {
        title: "TypeScript",
      },
      {
        title: "ReactNative",
      },
      {
        title: "Redux",
      },
      {
        title: "AntD",
      },
      {
        title: "Bootstrap",
      },
      {
        title: "TailwindCss",
      },
      {
        title: "MaterialUI",
      },
    ],
  },
  {
    no: "2.",
    title: "BackEnd",
    titleColor: "text-blue-300",
    bgColor: "bg-gradient-to-r from-[#0b1c26] to-[#161616]",
    skills: [
      {
        title: "NodeJs",
      },
      {
        title: "ExpressJs",
      },
      {
        title: "SQL",
      },
      {
        title: "MongoDB",
      },
      {
        title: "RestFull_API",
      },
    ],
  },
  {
    no: "3.",
    title: "Other",
    titleColor: "text-green-400",
    bgColor: "bg-gradient-to-r from-[#210d29] to-[#161616]",
    skills: [
      {
        title: "Figma",
      },
      {
        title: "GraphQL",
      },
      {
        title: "Docker",
      },
      {
        title: "Git",
      },
      {
        title: "GitHub",
      },
      {
        title: "SEO",
      },
    ],
  },
];

export const navData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "ContactMe",
    href: "/contactMe",
  },
];
