import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Cards(props) {
    const {imgsrc, title, desc} = props;
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Cards;
