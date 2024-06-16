import ProductCard from "./ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <div className="py-4 grid sm:grid-cols-2 xl:grid-cols-3 place-items-start gap-x-8 xl:gap-x-6 gap-y-10">
      {products.map((item) => {
        return <ProductCard key={item.id} {...item} size="h-40" />;
      })}
    </div>
  );
};
export default ProductsGrid;
