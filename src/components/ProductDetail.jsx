import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { newArrivals } from "./newArrivals";

const ProductDetail = () => {
  const { id } = useParams();
  const product = newArrivals.find((p) => p.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8 lg:flex">
      {product ? (
        <>
          <div className="lg:w-1/2">
            <Carousel showThumbs={false}>
              {product.images.map((image, index) => (
                <div key={index} onClick={() => openModal(image)}>
                  <img
                    src={image}
                    alt={product.name}
                    className="h-96 w-full object-cover cursor-pointer"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
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
                <span className="font-bold">Fabric:</span>{" "}
                {product.fabric || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Color:</span>{" "}
                {product.color || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Weave:</span>{" "}
                {product.weave || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Border:</span>{" "}
                {product.border || "Not available"}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Blouse:</span>{" "}
                {product.blouse || "Not available"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-screen max-w-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
