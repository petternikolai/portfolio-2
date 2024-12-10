import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons"; // Placeholder icons for Vite, TypeScript, and APIs

export default function MyWorkSection() {
  return (
    <Section id="skills" className="">
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold text-white">Skills</h2>
        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-6xl text-orange-500"
            />
            <p className="mt-4 text-lg text-zinc-400">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-6xl text-blue-500"
            />
            <p className="mt-4 text-lg text-zinc-400">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faJsSquare}
              className="text-6xl text-yellow-500"
            />
            <p className="mt-4 text-lg text-zinc-400">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faBootstrap}
              className="text-6xl text-purple-600"
            />
            <p className="mt-4 text-lg text-zinc-400">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind logo"
              className="h-16 w-16"
            />
            <p className="mt-4 text-lg text-zinc-400">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faReact}
              className="text-6xl text-blue-300"
            />
            <p className="mt-4 text-lg text-zinc-400">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
              alt="Vite logo"
              className="h-16 w-16"
            />
            <p className="mt-4 text-lg text-zinc-400">Vite</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="TypeScript logo"
              className="h-16 w-16"
            />
            <p className="mt-4 text-lg text-zinc-400">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-6xl text-zinc-400"
            />
            <p className="mt-4 text-lg text-zinc-400">Git/GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faNodeJs}
              className="text-6xl text-green-400"
            />
            <p className="mt-4 text-lg text-zinc-400">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faServer}
              className="text-6xl text-orange-400"
            />
            <p className="mt-4 text-lg text-zinc-400">RESTful APIs</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
