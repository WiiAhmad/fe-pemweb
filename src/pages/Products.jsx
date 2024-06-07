import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard"; // Import ProductCard

function ProductsPage() {
  // Data produk
  const products = [
    {
      imgSrc: "/src/assets/img/products/boron_plus.jpeg",
      title: "Special Baron Plus",
      description:
        "Special Boron Super adalah pupuk organik yang menyediakan unsur mikro penting bagi tanaman. Pupuk ini meningkatkan kualitas dan kuantitas hasil panen, menghasilkan buah yang lebih padat dan tahan lama dalam proses pasca panen atau penyimpanan.",
    },
    {
      imgSrc: "/src/assets/img/products/auliyagloss.jpeg",
      title: "Auliya Gloss",
      description:
        "Auliya Gloss adalah produk campuran yang berfungsi sebagai perekat, pembasah, perata, dan penembus. Produk ini memastikan campuran pupuk dapat diterapkan secara efektif, terutama dalam kondisi hujan, sehingga tanaman tetap mendapat nutrisi tanpa terpengaruh oleh cuaca.",
    },
    {
      imgSrc: "/src/assets/img/products/bestblue_80wp.jpeg",
      title: "Best Blue 80wp",
      description:
        "Best Blue adalah fungisida berbentuk tepung mengendalikan penyakit busuk daun, terutama pada tanaman tomat. Fungisida ini efektif dalam melindungi tanaman dari serangan jamur yang dapat merusak tanaman, sehingga tanaman tomat dapat tumbuh lebih sehat dan produktif.",
    },
    {
      imgSrc: "/src/assets/img/products/actozeb2_80wp.jpeg",
      title: "Actozeb",
      description:
        "Actozeb adalah fungisida yang dirancang khusus untuk diaplikasikan pada sayuran, terutama untuk mengendalikan penyakit daun busuk pada kentang. Produk ini mampu memberikan perlindungan maksimal terhadap tanaman, menjaga kesehatan daun, dan meningkatkan kualitas hasil panen kentang.",
    },
    {
      imgSrc: "/src/assets/img/products/buan_pupuk.jpeg",
      title: "Buan",
      description:
        "Buan adalah pupuk urea cair yang menyediakan nitrogen penting bagi tanaman. Produk ini membantu mempercepat pertumbuhan dan meningkatkan hasil panen dengan memberikan nutrisi yang diperlukan secara efisien.",
    },
    {
      imgSrc: "/src/assets/img/products/rakus.jpeg",
      title: "Ratkus",
      description:
        "Ratkus adalah bahan racun untuk mengendalikan hama tikus, berbentuk tepung dan dapat diaplikasikan pada air. Produk ini dirancang untuk mengatasi masalah hama tikus yang sering merusak tanaman dan infrastruktur pertanian, sehingga membantu petani dalam menjaga lahan mereka tetap produktif.",
    },
    {
      imgSrc: "/src/assets/img/products/roscel_20ec.jpeg",
      title: "Roscel 20c",
      description:
        "Roscel 20EC adalah insektisida yang berfungsi menjaga tanaman dari serangan berbagai jenis serangga. Produk ini membantu mempertahankan kesehatan tanaman, memastikan pertumbuhan optimal, dan melindungi hasil panen dari kerusakan akibat hama.",
    },
    {
      imgSrc: "/src/assets/img/products/power_kno_merah.jpeg",
      title: "Power KNO Hijau",
      description:
        "Power KNO3 Merah adalah pupuk yang diformulasikan untuk tanaman buah dan sayur dalam fase generatif. Pupuk ini menyediakan nutrisi penting yang dibutuhkan selama tahap pembungaan dan pembuahan, meningkatkan kualitas dan kuantitas hasil panen.",
    },
    {
      imgSrc: "/src/assets/img/products/power_kno_hijau.jpeg",
      title: "Power KNO Hijau",
      description:
        "Power KNO3 Hijau adalah pupuk untuk tanaman buah dan sayur pada fase vegetatif. Produk ini membantu tanaman berkembang dengan kuat dan sehat, memberikan nutrisi yang diperlukan selama tahap awal pertumbuhan.",
    },
  ];

  return (
    <div>
      <NavbarComp />
      <div className="container mt-5">
        <h1 className="text-center mb-5">Produk Kami</h1>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {/* Mapping data produk ke dalam komponen ProductCard */}
          {products.map((product, index) => (
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
