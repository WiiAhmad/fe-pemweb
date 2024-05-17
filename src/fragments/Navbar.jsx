import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div className="w-full container mx-auto">
      <nav className="flex justify-between">
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-bold">
            <span>
              <img src="/src/assets/psm_logo.svg" alt="" />
            </span>
            <span>PT. PUTRA SINAR MAS</span>
          </span>
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/home" className="bg-transparent text-black">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/product" className="bg-transparent text-black">
              Produk
            </Link>
          </li>
          <li>
            <Link to="/contact" className="bg-transparent text-black">
              Kontak
            </Link>
          </li>
          <li>
            <Button>Daftar</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
