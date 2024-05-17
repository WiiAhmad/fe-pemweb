import Image from "../components/Image";
import Text from "../components/Text";

const ProductCard = ({ imageSrc, title }) => {
  return (
    <div className="border p-4 text-center">
      <Image src={imageSrc} alt={title} />
      <Text type="p" className="mt-2">
        {title}
      </Text>
    </div>
  );
};

export default ProductCard;
