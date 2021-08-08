import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CardItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-1 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="text-secondary">
          Price : Rs. {product.productPrice}
        </CardText>
        <Button color="primary" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};
export default CardItem;
