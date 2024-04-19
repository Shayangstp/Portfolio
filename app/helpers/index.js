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

export const frontSkills = [
  {
    title: "Basics",
    skills: [{ title: "HTML" }, { title: "CSS" }, { title: "JavaScript" }],
  },
  {
    title: "Frameworks",
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
    ],
  },
  {
    title: "CSS Framworks",
    skills: [
      {
        title: "Bootstrap",
      },
      {
        title: "Tailwind",
      },
      {
        title: "MaterialUI",
      },
      {
        title: "AntD",
      },
    ],
  },
];

export const backendSkills = [
  {
    title: "Basics",
    skills: [
      {
        title: "NodeJs",
      },
    ],
  },
  {
    title: "FrameWorks",
    skills: [
      {
        title: "ExpressJS",
      },
    ],
  },
  {
    title: "DataBase",
    skills: [
      {
        title: "SQL",
      },
      {
        title: "MongoDB",
      },
    ],
  },
];
export const otherSkills = [
  {
    title: "Other Skill",
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
    titleKey: "home",
    href: "/",
  },
  {
    titleKey: "resume",
    href: "/resume",
  },
  {
    titleKey: "projects",
    href: "/projects",
  },
  {
    titleKey: "contactMe",
    href: "/contactMe",
  },
];

export const skillsDesc = [
  {
    title: "FrontEnd",
    desc: "I am a FrontEnd developer with a passion for creating visually appealing and functional web applications. I have experience with HTML, CSS, JavaScript, and frameworks like React, NextJs, and TypeScript.",
  },
  {
    title: "BackEnd",
    desc: "I am a BackEnd developer with a passion for creating scalable and reliable web applications. I have experience with NodeJs, ExpressJS, and databases like MongoDB and SQL.",
  },
  {
    title: "Other",
    desc: "I am a BackEnd developer with a passion for creating scalable and reliable web applications. I have experience with NodeJs, ExpressJS",
  },
];

export const lightSelect = {
  "& .MuiSvgIcon-root": {
    color: "black",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray", // Default border color
  },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9e1f16", // Border color on hover
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9e1f16", // Border color when focused
  },
};

export const darkSelect = {
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray", // Default border color
  },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9e1f16", // Border color on hover
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9e1f16", // Border color when focused
  },
};
