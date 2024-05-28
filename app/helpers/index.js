import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const socials = [
  {
    icon: <GitHubIcon fontSize="medium" />,
    href: "https://github.com/Shayangstp",
  },
  {
    icon: <TelegramIcon fontSize="medium" />,
    href: "https://t.me/shayan5529",
  },
  {
    icon: <EmailIcon fontSize="medium" />,
    href: "#email",
  },
  {
    icon: <LinkedInIcon fontSize="medium" />,
    href: "https://www.linkedin.com/in/shayangstp",
  },
];

export const socialsResponsive = [
  {
    icon: <GitHubIcon fontSize="small" className="text-[20px]" />,
    href: "https://github.com/Shayangstp",
  },
  {
    icon: <TelegramIcon fontSize="small" className="text-[20px]" />,
    href: "https://t.me/shayan5529",
  },
  {
    icon: <EmailIcon fontSize="small" className="text-[20px]" />,
    href: "#email",
  },
  {
    icon: <LinkedInIcon fontSize="small" className="text-[20px]" />,
    href: "https://www.linkedin.com/in/shayangstp",
  },
];

export const frontSkills = [
  {
    title: "frontBasic",
    skills: [{ title: "HTML" }, { title: "CSS" }, { title: "JavaScript" }],
  },
  {
    title: "frontFrameWork",
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
    title: "frontCssFrameWorks",
    skills: [
      {
        title: "Bootstrap",
      },
      {
        title: "TailwindCSS",
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
    title: "backBasic",
    skills: [
      {
        title: "NodeJs",
      },
    ],
  },
  {
    title: "backFrameWork",
    skills: [
      {
        title: "ExpressJS",
      },
    ],
  },
  {
    title: "backDataBase",
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
    title: "other",
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
    href: "#email",
  },
  {
    titleKey: "blog",
    href: "/blog",
  },
];

export const skillsDesc = [
  {
    title: "frontEnd",
    desc: "frontEndDesc",
  },
  {
    title: "backEnd",
    desc: "backEndDesc",
  },
  {
    title: "other",
    desc: "otherDesc",
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
    borderColor: "black", // Border color on hover
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black", // Border color when focused
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
    borderColor: "white", // Border color on hover
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white", // Border color when focused
  },
};

export const inputDark = {
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "15px",
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
};
export const InputLight = {
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "15px",
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
};
