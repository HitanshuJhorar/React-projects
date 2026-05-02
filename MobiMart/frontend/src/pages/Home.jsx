import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Featured from "../components/home/Featured";
import WhyChoose from "../components/home/WhyChoose";
import { getProducts } from "../services/productAPI";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await getProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.response?.data?.message || "Unable to load products right now.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pt-20 sm:pt-24">
      <Hero />
      <Services />
      <Featured products={products} error={error} isLoading={isLoading} />
      <WhyChoose />
    </div>
  );
};

export default Home;
