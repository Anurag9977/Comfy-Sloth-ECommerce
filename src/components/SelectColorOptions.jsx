const SelectColorOptions = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="font-content font-semibold tracking-wide text-xs md:text-sm">
        Colors :{" "}
      </p>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={`w-max border-2 p-1 rounded-full flex items-center duration-100 ${
              color === selectedColor ? "border-primary" : "border-transparent "
            }`}
          >
            <button
              type="button"
              style={{ backgroundColor: color }}
              className={`h-3 w-3 md:h-4 md:w-4 rounded-full cursor-pointer`}
              onClick={() => setSelectedColor(color)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
export default SelectColorOptions;
