import { Button } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
import "../main.css";
import Cards from "../components/Cards";
import imgsrc from "../assets/Rectangle 5.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavbarComp />
      <div className="bg-image">
        <div className="container">
          <h1>
            Membangun Masa Depan Pertanian dengan Produk Unggulan untuk
            Pertumbuhan Vegetatif dan Generatif yang Optimal
          </h1>
          <Button variant="success">Hubungi Kami Disini</Button>
        </div>
      </div>
      <div className="container" id="section2">
        <h1>Produk Terbaru Kami</h1>
      </div>
      <div className="container d-flex justify-content-around">
        <Cards imgsrc={imgsrc} title="Produk 1" desc="desc" />
        <Cards imgsrc={imgsrc} title="Produk 1" desc="desc" />
        <Cards imgsrc={imgsrc} title="Produk 1" desc="desc" />
        <Cards imgsrc={imgsrc} title="Produk 1" desc="desc" />
      </div>
      <div>
        <Button variant="success">Lihat Semua Produk</Button>
      </div>
      <div className="container my-5">
        <div className="text-center">
          <h1>PT. PUTRA SINAR MAS</h1>
        </div>
        <div>
          <p>
            PT. Putra Sinar Mas adalah perusahaan yang bergerak di bidang
            pertanian. Kami menyediakan berbagai macam produk pertanian yang
            berkualitas dan terjamin. Kami berkomitmen untuk membantu petani
            dalam meningkatkan hasil panen dengan produk-produk unggulan kami.
          </p>
        </div>
        <div>
          <h1>Kontak Kami</h1>
        </div>
        <div className="d-flex justify-content-around">
          <Button variant="secondary">Save changes</Button>
          <Button variant="secondary">Save changes</Button>
          <Button variant="secondary">Save changes</Button>
        </div>
        <div>
          <h1>Apa Kata Mereka</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehender in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <dir>
          <h1>Aktifitas Terbaru</h1>
        </dir>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehender in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="d-flex justify-content-around">
          <Cards imgsrc={imgsrc} />
          <Cards imgsrc={imgsrc} />
          <Cards imgsrc={imgsrc} />
          <Cards imgsrc={imgsrc} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
