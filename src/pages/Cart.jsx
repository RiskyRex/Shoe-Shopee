

export default function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.title} - ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
