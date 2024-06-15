import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { allproducts } from "../components/AppData";

function ProductsPage() {
  return (
    <div>
      <NavbarComp />
      <div className="container mt-5">
        <h1 className="text-center mb-5">Produk Kami</h1>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {/* Mapping data produk ke dalam komponen ProductCard */}
          {allproducts.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <Footer /> {/* Menghilangkan margin pada footer */}
    </div>
  );
}

export default ProductsPage;
