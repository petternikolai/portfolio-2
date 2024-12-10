import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaGlobe } from "react-icons/fa";
import projects from "../constants/projects";

export default function MyWorkSection() {
  return (
    <Section id="my-work" className="">
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">My Work</h2>
        <p className="text-lg text-zinc-400 sm:w-2/3">
          Here are some of the projects I've worked on recently. Click on the
          icons to view the live preview or the GitHub repository.
        </p>
        <ul
          role="list"
          className="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <li
              key={project.name}
              className="flex flex-col justify-between rounded-2xl bg-zinc-900 p-6"
            >
              <div>
                <img
                  alt=""
                  src={project.image}
                  className="w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base text-zinc-500">
                  {project.description}
                </p>
              </div>
              <ul role="list" className="mt-6 flex items-center gap-x-6">
                <li>
                  <a
                    href={project.livePreviewUrl}
                    className="flex items-center text-2xl text-zinc-500 hover:text-accent"
                    target="_blank"
                  >
                    <span className="sr-only">Live Preview</span>
                    <FaGlobe />
                  </a>
                </li>
                <li>
                  <a
                    href={project.gitHubUrl}
                    className="flex items-center text-2xl text-zinc-500 hover:text-accent"
                    target="_blank"
                  >
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
