import { Link } from "react-router-dom";
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-base-300 ">
      <div className="grid grid-cols-3 h-[4.5rem] place-items-center p-4 align-section-center">
        <Link
          to="/"
          className="w-full font-logo text-primary text-xl lg:text-2xl tracking-wide"
        >
          Comfy Sloth
        </Link>
        <p className="flex flex-wrap justify-center items-center font-heading tracking-wide text-center text-xs lg:text-base">
          Copyright &copy; {new Date().getFullYear()}.&nbsp;
          <span>All rights reserved.</span>
        </p>
        <nav className="grid grid-cols-3 gap-x-4 justify-self-end text-lg lg:text-2xl">
          <Link>
            <FaSquareXTwitter />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaSquareGithub />
          </Link>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
