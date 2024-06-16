const SelectQuantity = ({ productQuantity, setProductQuantity, stock }) => {
  const quantityOptions = Array.from({ length: stock }, (_, index) => {
    return index + 1;
  });
  return (
    <label className="flex items-center gap-4 w-full">
      <div className="label">
        <span className="text-xs md:text-sm font-content font-semibold tracking-wide">
          Quantity :{" "}
        </span>
      </div>
      <select
        value={productQuantity}
        className="select select-sm select-primary select-bordered font-heading"
        onChange={(e) => setProductQuantity(parseInt(e.target.value))}
      >
        {quantityOptions.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default SelectQuantity;
