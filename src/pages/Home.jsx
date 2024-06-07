import NavbarComp from "../components/Navbar";
import "../main.css";
import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"; 
import ActivityCard from "../components/ActivityCard";
import { products, activities } from "../components/AppData";

function Home() {
  return (
    <div>
      <NavbarComp />
      <Jumbotron />

      <div
        className="container text-center my-4"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
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
        className="container text-center rounded-3 p-3 my-4"
        style={{
          backgroundColor: "#F8F8F8",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <h1 className="p-3">PT. PUTRA SINAR MAS</h1>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          architecto ducimus nihil quisquam corrupti. Impedit non recusandae
          adipisci sint quaerat facilis expedita iusto mollitia ex aliquam
          dolore similique, voluptas dolorum dolor? Reiciendis ducimus itaque
          nesciunt. Debitis iusto natus neque temporibus vitae quam autem
          similique ipsum quas numquam consequuntur illum, dolore porro non
          fugiat sequi? Nulla quidem vel accusantium debitis suscipit.
        </p>
      </div>

      <div
        className="container text-center my-4"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1>Produk Terbaru Kami</h1>
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

      <div
        className="container text-center my-5"
      >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            architecto ducimus nihil quisquam corrupti. Impedit non recusandae
            adipisci sint quaerat facilis expedita iusto mollitia ex aliquam
            dolore similique, voluptas dolorum dolor? Reiciendis ducimus itaque
            nesciunt. Debitis iusto natus neque temporibus vitae quam autem
            similique ipsum quas numquam consequuntur illum, dolore porro non
            fugiat sequi? Nulla quidem vel accusantium debitis suscipit.
          </p>
        </div>
        <div className="position-relative text-center" style={{top: "-60px"}}>
          <img src="src/assets/img/test_profile.svg" alt="person" className="mx-auto mb-3" style={{width: "100px", height: "100px", borderRadius: "80%"}}/>
          <h3 className="mb-1" style={{fontWeight: "bold"}}>Joko Anwar</h3>
          <p className="mb-0" style={{fontWeight: "bold"}}>IT CONSULTANT</p>
        </div>
      </div>

      <div
        className="container text-center my-4"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1>Aktivitas Terbaru</h1>
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
