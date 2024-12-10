import Section from "../components/Section";
import pnSykkel from "../assets/images/pn-sykkel.jpg";
import me from "../assets/images/meg.jpg";
import portrett from "../assets/images/portrett.jpg";

export default function AboutSection() {
  return (
    <Section id="about" className="">
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="mt-5 sm:w-3/4">
          <p className="text-zinc-400">
            Hi, I'm Petter-Nikolai Kristoffersen, a passionate frontend
            developer based in Oslo, Norway. With a strong foundation in modern
            web technologies, I specialize in creating intuitive and visually
            engaging user interfaces that provide seamless digital experiences.
          </p>
          <p className="mt-4 text-zinc-400">
            When I'm not coding, I like to stay active. Depending on the season,
            you'll find me running, riding my road bike, or cross-country
            skiing. I also enjoy writing riffs on my guitar, and I'm the lead
            guitarist in a band called{" "}
            <span className="font-semibold text-accent">
              <a
                href="https://open.spotify.com/artist/7zV9rZTvgM3AKRTPv1cqAr?si=T51QrhCHTB-xs21bJw72Kw"
                target="_blank"
                rel="noopener noreferrer"
              >
                PERALTA
              </a>
            </span>
            . I'm always excited to collaborate on innovative projects that
            challenge me to grow as a developer and creator.
          </p>
          <p className="mt-4 text-zinc-400">
            In December 2024, I graduated from a 2-year frontend development
            program at Noroff Vocational School. In January 2025, I will embark
            on a 2-year program in backend development to further expand my
            knowledge. I'm currently seeking new and exciting opportunities to
            apply my skills and knowledge in a professional setting. If you're
            interested in working together, feel free to{" "}
            <span className="font-semibold text-accent">
              <a href="#contact">contact me</a>
            </span>
            . I'd love to hear from you!
          </p>
          <div>
            <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <li>
                <img
                  src={portrett}
                  alt="Portrait of Petter at a restaurant"
                  className="h-80 w-full rounded-2xl object-cover object-top"
                />
              </li>
              <li>
                <img
                  src={pnSykkel}
                  alt="Petter riding his road bike"
                  className="object-top-30 h-80 w-full rounded-2xl object-cover"
                />
              </li>
              <li>
                <img
                  src={me}
                  alt="Petter playing guitar live"
                  className="object-top-30 h-80 w-full rounded-2xl object-cover"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
