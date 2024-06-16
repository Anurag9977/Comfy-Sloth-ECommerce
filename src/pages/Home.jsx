import { Link } from "react-router-dom";
import { Carousel, FeaturedProducts, SectionTitle } from "../components";
import { aboutUsCards } from "../utils/CardContents";

const Home = () => {
  return (
    <main>
      <section className="align-section-center py-8 grid lg:grid-cols-2 gap-y-16 gap-x-8 place-items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading font-extrabold capitalize text-4xl lg:text-5xl tracking-wide leading-snug">
            design your <span className="text-primary">comfort zone</span>
          </h1>
          <p className="font-content lg:text-lg text-justify tracking-wide leading-loose">
            <span>Comfy Sloth</span> offers a diverse selection of products,
            from cozy armchairs to sleek desks, all designed to cultivate
            inspiring spaces. Driven by the desire to simplify furnishing.
          </p>
          <Link
            to="/products"
            className="mt-4 btn btn-sm lg:btn-md btn-primary w-max rounded-3xl font-content uppercase text-sm lg:text-base tracking-wider"
          >
            Shop Now
          </Link>
        </div>
        <div>
          <Carousel />
        </div>
      </section>
      <section className="py-8">
        <div className="bg-base-200 py-16 flex flex-col items-center">
          <SectionTitle text="featured products" />
          <div className="py-8 align-section-center ">
            <FeaturedProducts />
          </div>
          <Link
            to="/products"
            className="btn btn-sm btn-primary rounded-md text-base font-content tracking-widest"
          >
            All Products
          </Link>
        </div>
      </section>
      <section className="py-8">
        <div className="pt-8 pb-16 bg-base-200 xl:h-80">
          <div className="py-12 align-section-center grid lg:grid-cols-2 gap-y-8 gap-x-16">
            <h1 className="font-heading font-bold tracking-wide capitalize text-4xl lg:text-5xl">
              <span className="text-primary">custom furnitures</span> built only
              for you
            </h1>
            <p className="font-content text-justify text-sm md:text-base lg:text-lg leading-loose tracking-wide">
              A platform overflowing with comfy chairs, sleek desks, and
              everything in between. This isn't just a store, it's the end of
              impersonal furniture shopping.
            </p>
          </div>
          <div className="align-section-center grid lg:grid-cols-3 gap-8 items-stretch">
            {aboutUsCards.map((item) => {
              const { id, logo, title, description } = item;
              return (
                <div
                  key={id}
                  className="flex flex-col items-center bg-base-300 p-8 gap-4 rounded-md shadow-md"
                >
                  <div className="bg-primary p-4 text-2xl lg:text-3xl rounded-full text-primary-content">
                    {logo}
                  </div>
                  <h1 className="font-heading capitalize tracking-wider font-bold lg:text-lg">
                    {title}
                  </h1>
                  <p className="font-content tracking-wide text-justify text-sm leading-relaxed lg:leading-loose">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mt-8 xl:mt-72 xl:mb-16 align-section-center grid lg:grid-cols-2 gap-x-24 gap-y-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-heading text-4xl font-bold leading-normal">
            Join our newsletter and get 20% off
          </h1>
          <p className="font-content tracking-wide leading-loose text-justify">
            Why couldn't furniture shopping be personal, a way to discover
            unique pieces that spoke to your style? This isn't just a store,
            it's an end of impersonal furniture shopping.
          </p>
        </div>
        <form
          action="https://formspree.io/f/myyrqjgw"
          method="POST"
          className="flex items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="input input-bordered input-sm md:input-md rounded-md input-primary w-full font-content text-base"
          />
          <button
            type="submit"
            className="btn btn-primary btn-sm md:btn-md rounded-md font-content tracking-wider md:text-base"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
};
export default Home;
