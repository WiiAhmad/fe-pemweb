function ProductCard(props){
  const { imgSrc, title, description } = props;
  return (
    <div
      className="card mx-2"
      style={{
        width: "350px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        style={{ height: "45%", objectFit: "cover" }}
      />
      <div style={{ textAlign: "center", flex: 1, padding: "10px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
