import { useState } from "react";
import Image from "next/image";

export default function ProductCard({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center p-4">No products available.</p>;
  }

  return (
    <div className="container py-5" id="products">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.flavour}>
            <div className="card shadow-sm h-100">
              <Image
                src={product.images[0] || ""}
                alt={product.flavour}
                width={400}
                height={250}
                className="card-img-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.flavour}</h5>

                <p className="mb-0">
                  {product.sizes.map(
                    (size, index) =>
                      `${size.size} - ₹${size.price}${
                        index < product.sizes.length - 1 ? ", " : ""
                      }`
                  )}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
