import { Link, useLoaderData } from "react-router-dom";
import { BreadCrumbs, ProductImages, ProductInfo } from "../components";
import { customFetch } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const response = await customFetch.get("/react-store-single-product", {
    params,
  });
  return response.data;
};

const SingleProduct = () => {
  const { name } = useLoaderData();
  return (
    <main>
      <BreadCrumbs firstLink="products" secondLink={name} />
      <div className="align-section-center my-8">
        <Link
          to="/products"
          className="btn btn-xs md:btn-sm btn-primary font-content text-xs md:text-sm rounded-md tracking-widest capitalize"
        >
          Back to products
        </Link>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <ProductImages />
          <ProductInfo />
        </div>
      </div>
    </main>
  );
};
export default SingleProduct;
