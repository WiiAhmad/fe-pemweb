import ProductCard from "./ProductCard";
import Text from "../components/Text";
import Button from "../components/Button";

const products = [
  { id: 1, title: "Produk #1", imageSrc: "path/to/image1" },
  { id: 2, title: "Produk #2", imageSrc: "path/to/image2" },
  { id: 3, title: "Produk #3", imageSrc: "path/to/image3" },
  { id: 4, title: "Produk #4", imageSrc: "path/to/image4" },
];

const ProductSection = () => {
  return (
    <section className="py-16">
      <Text type="h2" className="text-3xl mb-8">
        Produk Terbaru Kami
      </Text>
      <div className="flex justify-center gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
          />
        ))}
      </div>
      <Button onClick={() => alert("Produk Kami")} className="mt-8">
        Produk Kami
      </Button>
    </section>
  );
};

export default ProductSection;
