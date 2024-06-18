import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { newArrivals } from "./newArrivals";
import { bestSelling } from "./bestSelling";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md group">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel showThumbs={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={product.name}
                className={`w-full object-cover h-80 ${
                  isHovered ? "scale-105" : ""
                } transition-transform duration-300`}
              />
            </div>
          ))}
        </Carousel>
        <div
          className={`absolute inset-0 bg-black opacity-0 ${
            isHovered ? "opacity-50" : ""
          } transition-opacity duration-300`}
        ></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="block mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const ProductCarousel = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export const ProductSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          New Arrivals
        </h2>
        <ProductCarousel products={newArrivals} />
        <h2 className="text-3xl font-bold text-gray-900 text-center mt-16">
          Best Selling Products
        </h2>
        <ProductCarousel products={bestSelling} />
      </div>
    </section>
  );
};
