import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SoMeLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      <li>
        <a
          href="https://www.instagram.com/petternikolai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-zinc-500 hover:text-accent"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/petternikolai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-zinc-500 hover:text-accent"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/petter-nikolai-kristoffersen-a829a41b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-zinc-500 hover:text-accent"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  );
}
