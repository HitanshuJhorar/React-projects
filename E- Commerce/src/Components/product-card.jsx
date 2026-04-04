import { Link } from "react-router-dom";
import { useCart } from "../Context/useCart";

export default function ProductCard({ product }) {
  const { addToCart, cartItem } = useCart();
  const ProductInCart = cartItem.find((item) => item.id === product.id);
  const productlabel = ProductInCart ? `(${ProductInCart.quantity})` : "";
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.image}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link to={`/products/${product.id}`} className="btn btn-secondary">
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to cart{productlabel}
          </button>
        </div>
      </div>
    </div>
  );
}
