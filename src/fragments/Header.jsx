import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-20"
      style={{ backgroundImage: 'url("./src/assets/bg.svg")' }}
    >
      <header className="bg-cover bg-center text-white py-20">
        <div className="container mx-auto flex">
          <div className="">
            <Text type="h1" className="text-4xl font-bold">
              PT. PUTRA SINAR MAS
            </Text>
            <Text type="h2" className="text-2xl mt-4 font-bold mb-5">
              Membangun Masa Depan Pertanian dengan Produk Unggulan untuk
              Pertumbuhan
              <span className="text-yellow-400"> Vegetatif </span> dan{" "}
              <span className="text-yellow-400"> Generatif </span> yang Optimal
            </Text>
            <Button onClick={() => alert("Hubungi Kami")} className="mt-6">
              Hubungi Kami Disini
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
