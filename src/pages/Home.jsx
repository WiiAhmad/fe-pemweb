import { Button } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
import "../main.css";

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
      <div className="container">
        <h1>Produk Terbaru Kami</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
