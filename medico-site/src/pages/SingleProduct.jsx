import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { ProductsData } from "../DummyData/productdata"; // Import the dummy data

export default function SingleProduct() {
  const { productId } = useParams();
  console.log(productId);
  const product = ProductsData.find((product) => product.id === Number(productId));

  console.log(product);

  if (!product) {
    return (
      <div className="overflow-x-hidden">
        <PageTitle title={"Product Page"} />
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <PageTitle title={product.title} />
      {/* Add more product details here */}
    </div>
  );
}
