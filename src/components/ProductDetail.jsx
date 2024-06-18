import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { newArrivals } from "./newArrivals";

const ProductDetail = () => {
  const { id } = useParams();
  const product = newArrivals.find((p) => p.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-8 lg:flex">
      {product ? (
        <>
          <div className="lg:w-1/2">
            <Carousel showThumbs={false}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={product.name}
                    className="h-96 w-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">
              {product.price}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                More Information
              </h2>
              <p className="mt-4 text-gray-600">
                Fabric: {product.fabric || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                Color: {product.color || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                Weave: {product.weave || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                Border: {product.border || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                Blouse: {product.blouse || "Not available"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
