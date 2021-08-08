import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";

const localUrl = "http://myjson.dit.upm.es/api/bins/wcn";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl);
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BuyPage;
