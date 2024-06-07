function Footer(){
  return (
    <div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#0074B5", marginTop: "75px" }}
      >
        <div className="container">
          <footer className="row">
            <div className="col text-center border-end border-white">
              <div className="py-2 d-flex justify-content-center align-items-end">
                <img
                  src="/src/assets/company_logo.svg"
                  alt="Logo"
                  width="36px"
                  style={{ margin: "8px" }}
                />
                <h3 style={{ color: "white" }}>PT. PUTRA SINAR MAS</h3>
              </div>
              <ul className="nav flex-row justify-content-center">
                <li className="nav-item me-3">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "white" }}
                  >
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    href=""
                    className="text-decoration-none"
                    style={{ color: "white" }}
                  >
                    Produk
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "white" }}
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col"
              style={{ color: "white", textAlign: "center" }}
            >
              <h3 className="py-1">KONTAK KAMI</h3>
              <p>+62899-1334-4038</p>
              <p>@blablabla</p>
              <p>loremimpsum21@gmail.com</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
