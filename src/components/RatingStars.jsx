import React from "react";

const RatingStars = ({ stars }) => {
  const ratings = Array.from({ length: 5 }, (_, index) => {
    const currentStars = index + 0.5;
    return stars >= index + 1 ? (
      <>
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-yellow-400 cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-yellow-400 cursor-default"
          checked
          disabled
        />
      </>
    ) : stars >= currentStars ? (
      <>
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-yellow-400 cursor-default"
          checked
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-yellow-400 cursor-default"
          disabled
        />
      </>
    ) : (
      <>
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-1 bg-yellow-400 cursor-default"
          disabled
        />
        <input
          type="radio"
          name="rating-10"
          className="mask mask-star-2 mask-half-2 bg-yellow-400 cursor-default"
          disabled
        />
      </>
    );
  });
  return (
    <div className="rating rating-xs sm:rating-sm rating-half">
      {ratings.map((item, index) => {
        return <React.Fragment key={index}>{item}</React.Fragment>;
      })}
    </div>
  );
};
export default RatingStars;
