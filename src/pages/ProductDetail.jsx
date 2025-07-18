
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
