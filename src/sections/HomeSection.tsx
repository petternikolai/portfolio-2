import me from "../assets/images/meg.jpg";
import SoMeLinks from "../components/SoMeLinks";
import Section from "../components/Section";

export default function HomeSection() {
  return (
    <Section id="home" className="">
      <div className="mt-20 flex flex-col items-center sm:mt-56">
        <img
          alt="Portrait of Petter-Nikolai Kristoffersen"
          src={me}
          className="inline-block size-20 rounded-full"
        />
        <h1 className="mt-5 text-center text-4xl text-white">
          Petter-Nikolai Kristoffersen
        </h1>
        <h2 className="text-2xl text-accent">Frontend Developer</h2>
        <p className="text-zinc-400 sm:w-2/3">
          I'm Petter-Nikolai, a frontend developer based in Oslo. With a passion
          for crafting intuitive digital experiences, I specialize in creating
          modern, responsive web applications. Explore my work and see how I
          bring ideas to life on the web.
        </p>
        <SoMeLinks className="mt-5" />
      </div>
    </Section>
  );
}
