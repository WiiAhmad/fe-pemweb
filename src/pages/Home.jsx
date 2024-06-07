import NavbarComp from "../components/Navbar";
import "../main.css";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ActivityCard from "../components/ActivityCard";

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
];

const activities = [
  {
    img: "/src/assets/img/activities/gathering.jpeg",
    date: "10",
    month: "April",
    title: "Buka Bersama",
    description:
      "Perayaan buka bersama (bukber) di toko Kang Jafar pada bulan Ramadan adalah momen yang sangat istimewa bagi kami dan komunitas kami. Ini bukan hanya tentang berbagi hidangan lezat setelah berpuasa sepanjang hari, tetapi juga tentang merayakan kebersamaan dan persahabatan.",
  },
  {
    img: "src/assets/img/activity_img.png",
    date: "10",
    month: "Maret",
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum aspernatur quasi similique nesciunt dolorum id sit. Voluptatum saepe cum nemo!",
  },
  {
    img: "src/assets/img/activity_img.png",
    date: "10",
    month: "Maret",
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum aspernatur quasi similique nesciunt dolorum id sit. Voluptatum saepe cum nemo!",
  },
  {
    img: "src/assets/img/activity_img.png",
    date: "10",
    month: "Maret",
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum aspernatur quasi similique nesciunt dolorum id sit. Voluptatum saepe cum nemo!",
  },
];

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
        <button className="btn my-5" style={{ backgroundColor: "#f5e400" }}>
          Produk Kami
        </button>
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

      <div className="container text-center" style={{ marginBottom: "100px" }}>
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
