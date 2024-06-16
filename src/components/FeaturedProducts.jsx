import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const { featuredProducts } = useSelector((store) => store.productsState);
  return (
    <div className="grid md:grid-cols-3 place-items-center gap-8">
      {featuredProducts.map((item) => {
        const { id } = item;
        return <ProductCard key={id} {...item} size="h-56" />;
      })}
    </div>
  );
};
export default FeaturedProducts;
