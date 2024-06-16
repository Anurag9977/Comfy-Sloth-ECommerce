import { carouselImages } from "../utils/CardContents";

const Carousel = () => {
  return (
    <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-300 rounded-box">
      {carouselImages.map((item) => {
        return (
          <div key={item.id} className="carousel-item">
            <img
              src={item.image}
              className="rounded-box h-72 w-80 xl:h-96 xl:w-96 object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
export default Carousel;
