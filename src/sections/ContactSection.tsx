import Section from "../components/Section";
import SoMeLinks from "../components/SoMeLinks";
import { FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <Section id="contact" className="justify-between">
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <p className="mb-6 mt-5 max-w-2xl text-lg text-zinc-400">
          I'd love to hear from you! Whether it's a project inquiry,
          collaboration idea, or just to say hi, feel free to reach out.
        </p>
        <a
          href="mailto:pnkristoffersen@gmail.com"
          className="mb-6 text-2xl font-semibold text-zinc-400 underline hover:text-accent"
        >
          <div className="flex items-center gap-5">
            <FaEnvelope />
            <span>
              <p className="text-sm">pnkristoffersen@gmail.com</p>
            </span>
          </div>
        </a>
        <SoMeLinks className="mt-5" />
      </div>
      <div className="mt-10 flex flex-col items-center">
        <p className="mb-10 text-center text-sm text-zinc-400">
          Made with 💻 and ☕ by Petter-Nikolai Kristoffersen
        </p>
      </div>
    </Section>
  );
}
