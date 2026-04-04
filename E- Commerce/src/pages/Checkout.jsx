import { useCart } from "../Context/useCart";

export default function CheckOut() {
  const { getCartItemWihProducts, updateQunatity, removeFromCart,getCartTotal,clearCart } = useCart();
  const cartItems = getCartItemWihProducts();
  const total=getCartTotal();

  function placeOrder(){
        alert("Successful order!")
        clearCart();
  }

  return (
    <div className="Page">
      <div className="container">
        <h1 className="page-tiitle">CheckOut</h1>
        <div className="checkout-conatiner">
          <div className="checkout-items">
            <h2 className="checkout-section-tittle">Order Summary</h2>
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="chekout-item-image"
                />
                <div className="checkout-item-detail">
                  <h3 className="checkout-item-name">{item.product.name}</h3>
                  <p className="checkout-item-price">
                    ${item.product.price} each
                  </p>
                </div>
                <div className="checkout-items-control">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQunatity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQunatity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="checkout-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="checkout-summary">
                <h2 className="checkout-section-tittle">Total</h2>
                <div className="checkout-total">
                    <p className="checkout-total-label">subtotal:</p>
                    <p className="checkout-total-value">${total.toFixed(2)}</p>
                </div>
                <div className="checkout-total">
                    <p className="checkout-total-label">Total:</p>
                    <p className="checkout-total-value checkout-total-final">
                        ${total.toFixed(2)}
                    </p>
                </div>
                <button className="btn btn-primary btn-large btn-block" onClick={placeOrder}>
                    Place Order
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
