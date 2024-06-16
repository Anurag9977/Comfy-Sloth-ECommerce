import { BreadCrumbs, SectionTitle } from "../components";
import aboutHeroImg from "../assets/hero-bcg.jpeg";
const About = () => {
  return (
    <main>
      <BreadCrumbs firstLink="about" />
      <section className="align-section-center my-16 px-8 lg:px-16 grid md:grid-cols-2 gap-8 justify-center items-stretch">
        <img
          src={aboutHeroImg}
          alt="about-hero"
          className="block h-72 md:h-96 w-full object-cover rounded-md shadow-md"
        />

        <div className="self-start">
          <SectionTitle text="our story" />
          <p className="my-8 leading-loose lg:leading-9 text-sm lg:text-md font-content text-justify tracking-wide ">
            Two decades ago, our story with{" "}
            <span className="font-logo text-primary text-lg">Comfy Sloth</span>{" "}
            began with a simple mission: to bring the best-in-class furniture to
            your home and office. Back then, furniture shopping felt like a
            chore - impersonal stores with generic options. We envisioned a
            different experience, a place where you could discover unique pieces
            that reflected your style and created inspiring spaces. That's the
            fire that ignited our journey, and it's still what fuels us today.
          </p>
        </div>
      </section>
    </main>
  );
};
export default About;
