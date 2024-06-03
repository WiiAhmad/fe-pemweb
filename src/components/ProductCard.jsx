const ProductCard = ({ imgSrc, title, description }) => {
  return (
    <div className="card mx-2" style={{ width: "350px", height: "500px" }}>
      <img src={imgSrc} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
