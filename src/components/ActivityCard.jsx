function ActivityCard(props){
  const { img, title, description, date, month } = props;
  return (
    <div
      className="card rounded-3 p-0 mx-2"
      style={{ width: "360px", height: "500px" }}
    >
      <img
        className="rounded-top-3"
        src={img}
        alt="activity_img"
        width="100%"
      />

      <div
        className="position-absolute fw-bold"
        style={{ top: "210px", margin: "0" }}
      >
        <span
          className="px-4"
          style={{ backgroundColor: "#f5e400", padding: "7.5px 0" }}
        >
          {date}
        </span>
        <span
          className="px-4"
          style={{
            backgroundColor: "#0074b5",
            padding: "7.5px 0",
            color: "white",
            borderTopRightRadius: "10px",
          }}
        >
          {month}
        </span>
      </div>

      <div className="py-3 px-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
