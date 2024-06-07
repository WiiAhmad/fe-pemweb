function Jumbotron(props){
  const { hreff } = props;
  return (
    <div
      className="bg-body-tertiary d-flex flex-wrap align-content-center"
      style={{
        backgroundImage: "url(src/assets/bg.svg)",
        backgroundSize: "cover",
        height: "860px",
        marginBottom: "120px"
      }}
    >
      <div className="container py-3 my-5" style={{fontWeight: "bold"}}>
        <h1 className="fs-2 fw-light" style={{ color: "#f5e400" }}>
          PT. PUTRA SINAR MAS
        </h1>
        <p className="col-md-6 fs-4" style={{ color: "white" }}>
          Membangun Masa Depan Pertanian dengan Produk Unggulan untuk
          Pertumbuhan <span style={{ color: "#f5e400" }}>Vegetatif</span> dan{" "}
          <span style={{ color: "#f5e400" }}>Generatif</span> yang Optimal
        </p>
        <button className="btn btn-success btn-lg" type="button" hreff={hreff}>
          Hubungi Kami Disini
        </button>
      </div>
    </div>
  );
}

export default Jumbotron