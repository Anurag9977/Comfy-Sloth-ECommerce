const SectionTitle = ({ text }) => {
  return (
    <h1 className="mb-4 relative w-max font-heading font-bold tracking-wider leading-none text-3xl lg:text-4xl capitalize after:absolute after:-bottom-4 after:left-1/4 after:bg-primary after:w-1/2 after:h-1">
      {text.split(" ")[0]}{" "}
      <span className="text-primary">{text.split(" ")[1]}</span>
    </h1>
  );
};
export default SectionTitle;
