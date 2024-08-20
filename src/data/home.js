import Twitter from "../../public/images/icons/Twitter";
import Youtube from "../../public/images/icons/Youtube";
import Instagram from "../../public/images/icons/Instagram";
import Dribble from "../../public/images/icons/Dribble";
import Discord from "../../public/images/icons/Discord";
import AppDevelopment from "../components/icons/AppDevelopment";
import BrandIdentity from "../components/icons/BrandIdentity";
import LogoDesign from "../components/icons/LogoDesign";
import MediaMarketing from "../components/icons/MediaMarketing";
import ProductDesign from "../components/icons/ProductDesign";
import WebDevelopment from "../components/icons/WebDevelopment";

const homeData = {
  deployments: 14,
  currentWork: {
    currently: "Designing",
    name: "Flymasters",
    image: "/images/working.svg",
    imgColor: "#ffffff",
    textColor: "#4D96FF",
  },
  skills: [
    "Figma",
    // "Node.js",
    // "MySQL",
    "Swift UI",
    "Framer",
    "React",
    "Tailwind CSS",
  ],
  projects: [
    {
      name: "Medidrop",
      startDate: "July'24",
      endDate: "Current",
      link:"#",
    },
    {
      name: "Skill24em",
      startDate: "Jun'24",
      endDate: "July'24",
      link:"#",
    },
    {
      name: "Gigleaz Jobs",
      startDate: "May'24",
      endDate: "July'24",
      link:"#",
    },
    {
      name: "She Cyber Hub",
      startDate: "May'24",
      endDate: "Jun'24",
      link:"#",
    },
    {
      name: "She Cyber Hub - Dashboard",
      startDate: "May'24",
      endDate: "Jun'24",
      link:"#",
    },
    {
      name: "Bhoomi",
      startDate: "April'24",
      endDate: "May'24",
      link:"#",
    },
    {
      name: "Bhoomi Logo",
      startDate: "April'24",
      endDate: "May'24",
      link:"https://kdeshmukh.hashnode.dev/designing-the-bhoomi-logo-for-farmland-listings",
    },
  ],
  services: [
    {
      image: BrandIdentity,
      name: "Brand Identity",
      description: "Crafting identities with personality",
      color: "#d6cc99",
    },
    {
      image: LogoDesign,
      name: "Logo Design",
      description: "Creating Iconic Symbols",
      color: "#21C063",
    },
    {
      image: MediaMarketing,
      name: "Media Marketing",
      description: "Making your feed fabulous",
      color: "#E93C00",
    },
    {
      image: WebDevelopment,
      name: "Web Development",
      description: "Turning clicks into smiles",
      color: "#16AEF9",
    },
    {
      image: ProductDesign,
      name: "Product Design",
      description: "Innovating one product at a time",
      color: "#FA6DCA",
    },
    {
      image: AppDevelopment,
      name: "App Development",
      description: "Making apps that make life better",
      color: "#6366F1",
    },
  ],
  testimonials: [
    {
      name: "Nani Goud",
      image: "/images/bhoomilogo1.jpg",
      title: "CEO - Bhoomi",
      review:
        "As the owner of Bhoomi, I’m thrilled with the logo and web designs! The team’s research opened up new possibilities for app development and revenue generation.",
    },
    {
      name: "Puli Aravind Kumar",
      image: "/images/puliaravindkumar.png",
      title: "CEO - She Cyber Hub",
      review:
        "“Deshmukh delivered exceptional work for She Cyber Hub, designing and developing our landing page, complaint form, and employee dashboard in just 15 days. The landing page, with its warm colors and thoughtful layout, offers a sense of security for female victims. Deshmukh’s design truly reflects our mission to provide a safe and supportive space.”",
    },
    {
      name: "Ajay",
      image: "/images/ajay.jpg",
      title: "Founder - Affix",
      review:
        "“The user experience Deshmukh creates is exceptional, and we’re always impressed by how efficiently he operates. He’s become our go-to designer for all our projects.”",
    },
  ],
  socials: [
    {
      name: "Twitter",
      image: Twitter,
      link: "https://x.com/KDeshmukh03",
    },
    {
      name: "Youtube",
      image: Youtube,
      link: "https://www.youtube.com/@HarlockUlric",
    },
    {
      name: "Instagram",
      image: Instagram,
      link: "https://www.instagram.com/deshmukh_03/",
    },
    {
      name: "Dribble",
      image: Dribble,
      link: "https://dribbble.com/Deshmukh_03",
    },
    {
      name: "Discord",
      image: Discord,
      link: "",
    },
  ],
};
export default homeData;
