import NavbarComp from "../components/Navbar";
import "../main.css";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ActivityCard from "../components/ActivityCard";
import { products, activities } from "../components/AppData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavbarComp />
      <Jumbotron />

      <div className="container text-center my-4">
        <h1>Produk Terbaru Kami</h1>
        <hr style={{ color: "#f5e400" }} />
        <div className="row overflow-scroll overflow-y-hidden flex-nowrap">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
        <Link
          to="/products"
          className="btn my-5"
          style={{ backgroundColor: "#f5e400" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Produk Kami
        </Link>
      </div>

      <div
        className="container text-center rounded-3 p-3"
        style={{
          backgroundColor: "#F8F8F8",
          marginTop: "25px",
          marginBottom: "100px",
        }}
      >
        <h1 className="p-3">PT. PUTRA SINAR MAS</h1>
        <p className="px-5">
          PT. PUTRA SINAR MAS adalah perusahaan yang bergerak di sektor industri
          dan perdagangan pertanian. Kami hadir sebagai wujud komitmen untuk
          mendukung program peningkatan produktivitas pertanian, guna membangun
          masa depan pertanian yang sejahtera dengan menyediakan produk
          berkualitas tinggi dan optimal. Dengan pengalaman yang luas dan
          dedikasi yang kuat, kami berupaya untuk selalu inovatif dalam
          menciptakan solusi yang dapat meningkatkan efisiensi dan hasil
          pertanian. Selain itu, kami juga menjalin kerjasama yang erat dengan
          para petani dan mitra bisnis untuk memastikan keberlanjutan dan
          kesejahteraan bersama.
        </p>
      </div>

      <div className="container text-center flex" style={{ marginBottom: "100px" }}>
        <h1>Kontak Kami</h1>
        <hr
          style={{
            color: "#f5e400",
          }}
        />
        <div className="row gap-3 justify-content-around">
          <button
            className="btn d-inline-flex text-black gap-3 justify-content-center align-items-center"
            style={{ width: "200px", backgroundColor: "#F8F8F8" }}
          >
            <img
              src="src/assets/img/instagram_logo.svg"
              alt="instagram_logo"
              width="30"
            />
            <h4 className="m-0">Instagram</h4>
          </button>
          <button
            className="btn d-inline-flex text-black gap-3 justify-content-center align-items-center"
            style={{ width: "200px", backgroundColor: "#F8F8F8" }}
          >
            <img
              src="src/assets/img/whatsapp_logo.svg"
              alt="whatsapp_logo"
              width="30"
            />
            <h4 className="m-0">WhatsApp</h4>
          </button>
          <button
            className="btn d-inline-flex text-black gap-3 justify-content-center align-items-center"
            style={{ width: "200px", backgroundColor: "#F8F8F8" }}
          >
            <img
              src="src/assets/img/mail_logo.svg"
              alt="mail_logo"
              width="30"
            />
            <h4 className="m-0">Email</h4>
          </button>
        </div>
      </div>

      <div className="container text-center" style={{ marginBottom: "15px" }}>
        <h1>Apa Kata Mereka</h1>
        <hr
          style={{
            color: "#f5e400",
          }}
        />
        <div
          className="container rounded-3 p-5 my-5"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <img className="py-3" src="src/assets/img/stars.svg" alt="stars" />
          <p className="px-4">
            "Best Blue telah membantu saya mengatasi penyakit busuk daun pada
            tanaman tomat. Hasil panen saya meningkat secara signifikan dan
            kualitas tomat menjadi lebih baik. Saya sangat senang dengan produk
            ini dan saya telah merekomendasikannya kepada teman-teman saya yang
            juga bertani. Penggunaannya yang mudah dan efektif membuat saya
            merasa lebih percaya diri dalam merawat tanaman saya."
          </p>
        </div>
        <div className="position-relative text-center" style={{ top: "-60px" }}>
          <img
            src="src/assets/img/test_profile.svg"
            alt="person"
            className="mx-auto mb-3"
            style={{ width: "100px", height: "100px", borderRadius: "80%" }}
          />
          <h3 className="mb-1" style={{ fontWeight: "bold" }}>
            Budi Santoso
          </h3>
          <p className="mb-0" style={{ fontWeight: "bold" }}>
            Petani Tomat
          </p>
        </div>
      </div>

      <div className="container text-center" style={{ marginBottom: "75px" }}>
        <h1>Aktivitas Terbaru</h1>
        <hr
          style={{
            color: "#f5e400",
          }}
        />
        <div className="row overflow-scroll overflow-y-hidden flex-nowrap">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              img={activity.img}
              date={activity.date}
              month={activity.month}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
