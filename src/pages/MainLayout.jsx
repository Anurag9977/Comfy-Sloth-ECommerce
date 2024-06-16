import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Footer, Navbar, PageLoader } from "../components";
import { customFetch } from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { setProducts } from "../features/products/productsSlice";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const loader = async () => {
  const response = await customFetch.get("/react-store-products");
  const allProducts = response.data;
  const featuredProducts = allProducts
    .filter((product) => product.featured === true)
    .slice(0, 3);
  return { allProducts, featuredProducts };
};

const MainLayout = () => {
  const dispatch = useDispatch();
  const { allProducts, featuredProducts } = useLoaderData();
  useEffect(() => {
    dispatch(setProducts({ allProducts, featuredProducts }));
  }, []);
  const navigation = useNavigation();
  const { isLoading } = useAuth0();
  const isPageLoading = navigation.state === "loading" || isLoading;
  return (
    <>
      <Navbar />
      <section className="pt-8 pb-16 min-h-[calc(100dvh-9rem)] flex flex-col">
        {isPageLoading ? <PageLoader /> : <Outlet />}
      </section>
      <Footer />
    </>
  );
};
export default MainLayout;
