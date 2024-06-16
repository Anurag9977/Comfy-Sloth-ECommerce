import { BreadCrumbs, ProductFilters, ProductsContainer } from "../components";

const Products = () => {
  return (
    <main>
      <BreadCrumbs firstLink="products" />
      <section className="align-section-center my-8 grid lg:grid-cols-[1fr_3fr] gap-y-16 gap-x-12 xl:gap-x-28">
        <ProductFilters />
        <ProductsContainer />
      </section>
    </main>
  );
};
export default Products;
