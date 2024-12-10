import semesterProjectTwo from "../assets/images/semester-project-two.png";
import jsFrameworksCa from "../assets/images/js-frameworks-ca.png";
import projectExamTwo from "../assets/images/project-exam-two.png";
import spurven from "../assets/images/spurven.png";

type Project = {
  name: string;
  title: string;
  description: string;
  image: string;
  livePreviewUrl: string;
  gitHubUrl: string;
};

const projects: Project[] = [
  {
    name: "semester-project-2",
    title: "Semester Project 2 - Hammerdrop",
    description:
      "Hammerdrop is an online auction website where users can list items for auction, place bids, and manage their profiles.",
    image: semesterProjectTwo,
    livePreviewUrl:
      "https://petternikolai.github.io/semester-project-2/index.html",
    gitHubUrl: "https://github.com/petternikolai/semester-project-2",
  },
  {
    name: "javascript-frameworks-ca",
    title: "JavaScript Frameworks CA - ReactCart",
    description:
      "A React-based shopping cart application built with TypeScript, Vite, and Material-UI.",
    image: jsFrameworksCa,
    livePreviewUrl: "https://javascript-frameworks-ca-petter.netlify.app/",
    gitHubUrl: "https://github.com/petternikolai/javascript-frameworks-ca",
  },
  {
    name: "project-exam-two",
    title: "Project Exam 2 - Holidaze",
    description:
      "Holidaze is a booking site for hotels, cabins etc. where registered users also can opt in to be venue managers and host their own venues for users to book.",
    image: projectExamTwo,
    livePreviewUrl: "https://petternikolai.github.io/project-exam-two/",
    gitHubUrl: "https://github.com/petternikolai/project-exam-two",
  },
  {
    name: "spurven",
    title: "Spurven.no",
    description:
      "The homepage for Spurven.no, designed and developed for a friend to enhance their online presence and showcase their work.",
    image: spurven,
    livePreviewUrl: "https://spurven.no/",
    gitHubUrl: "https://github.com/petternikolai/spurven",
  },
];

export default projects;
