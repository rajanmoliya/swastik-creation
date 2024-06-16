import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import saree1 from "../assets/saree1.jpeg";
import saree2 from "../assets/saree2.jpeg";

export const newArrivals = [
  // Add your new arrivals here
  {
    id: 1,
    name: "New Saree 1",
    price: "₹750",
    description:
      "DLIGHT GREEN AND GOLD CHECKS TISSUE KOTA SAREE WITH BANARASI FANCY",
    images: [saree1],
  },
  {
    id: 2,
    name: "New Saree 2",
    price: "₹1000",
    description: "DUAL SHADE AND GOLD FLORAL BUTTIS TISSUE SAREE WITH BANARASI",
    images: [saree2],
  },
  {
    id: 3,
    name: "New Saree 3",
    price: "₹950",
    description:
      "DLIGHT GREEN AND GOLD CHECKS TISSUE KOTA SAREE WITH BANARASI FANCY",
    images: [saree1],
  },
  {
    id: 4,
    name: "New Saree 4",
    price: "₹1499",
    description: "DUAL SHADE AND GOLD FLORAL BUTTIS TISSUE SAREE WITH BANARASI",
    images: [saree2],
  },
];

const bestSelling = [
  // Add your best selling products here
  {
    id: 1,
    name: "Best Saree 1",
    price: "₹750",
    images: ["https://via.placeholder.com/400x400"],
  },
  {
    id: 2,
    name: "Best Saree 2",
    price: "₹1000",
    images: ["https://via.placeholder.com/400x400"],
  },
];

const ProductCarousel = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
    {products.map((product) => (
      <div key={product.id} className="border border-gray-200 rounded-lg p-4">
        <Carousel showThumbs={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mt-2 text-gray-600">{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 mt-4 block"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
);

export const ProductSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
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
