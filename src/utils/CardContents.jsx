import heroImg1 from "../assets/hero-bcg.jpeg";
import heroImg2 from "../assets/hero-bcg-2.jpeg";
import { RxRocket, RxSketchLogo } from "react-icons/rx";
import { FaFileSignature } from "react-icons/fa6";
export const carouselImages = [
  {
    id: 1,
    image: heroImg2,
  },
  {
    id: 2,
    image: heroImg1,
  },
];

export const aboutUsCards = [
  {
    id: 1,
    logo: <RxRocket />,
    title: "Mission",
    description:
      "To empower customers to create stylish and functional homes and workspaces through a curated selection of top-quality furniture.",
  },
  {
    id: 2,
    logo: <RxSketchLogo />,
    title: "Vision",
    description:
      "To be the leading online destination for inspiring furniture that reflects your unique style and elevates your everyday living.",
  },
  {
    id: 3,
    logo: <FaFileSignature />,
    title: "History",
    description:
      "Founded in 2011, we started with a passion for making furniture shopping convenient and enjoyable.",
  },
];
