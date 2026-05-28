import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default Product;