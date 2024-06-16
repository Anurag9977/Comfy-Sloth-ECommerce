import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductImages = () => {
  const { images } = useLoaderData();
  const numOfImages = images.length;

  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div>
      <img
        src={activeImage.url}
        alt={activeImage.filename}
        className="block h-72 lg:h-80 w-full object-cover rounded-md"
      />
      <div
        className={`grid grid-flow-col gap-1 xl:gap-2 mt-1 xl:mt-2`}
        style={{
          gridTemplateColumns: `repeat(${numOfImages}, minmax(0,1fr))`,
        }}
      >
        {images.map((image) => {
          const { id } = image;
          const activeClass =
            activeImage.id === id && "border-2 border-primary";
          return (
            <img
              key={id}
              src={image.url}
              alt={image.filename}
              className={`block border-2 border-transparent h-16 xl:h-20 w-full object-cover rounded-md cursor-pointer duration-300 hover:border-2 hover:border-primary ${activeClass}`}
              onClick={() => setActiveImage(image)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductImages;
