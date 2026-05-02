import ProductCard from "../ui/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p._id || p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
