import { useNavigate, useParams } from "react-router-dom";
import { getProductId } from "../Data/products";
import { useCart } from "../Context/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();

  const product = getProductId(id);

  if (!product) {
    navigate("/");
    return null;
  }

  const productInCart = cartItem.find((item) => item.id === product.id);
  const productLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div className="Page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to cart{productLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
