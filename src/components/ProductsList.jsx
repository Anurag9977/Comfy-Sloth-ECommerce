import ProductListItem from "./ProductListItem";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((item) => {
        return <ProductListItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ProductsList;
