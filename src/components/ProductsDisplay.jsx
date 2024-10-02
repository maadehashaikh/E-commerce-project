import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom"; // Import Link

const ProductsDisplay = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* First row of images */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to="/category/furniture">
            <Image
              src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to={"/category/groceries"}>
            <Image
              src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to={"/category/beauty"}>
            <Image
              src="https://images.pexels.com/photos/2732197/pexels-photo-2732197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }} // Ensures consistent sizing
            />
          </Link>
        </Col>

        {/* Category Text */}
        <Col xs={12} className="text-center my-3">
          <p className="p-3 text-gray-600 shadow-lg rounded-xl font-bold">
            Furniture , Makeup And Dairy Products
          </p>
        </Col>

        {/* Second row of images */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to={"/category/fragrances"}>
            <Image
              src="https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to={"/category/beauty"}>
            <Image
              src="https://images.pexels.com/photos/17545642/pexels-photo-17545642/free-photo-of-cosmetics-in-vial-boxes-and-bottle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }} // Adjusts the second image
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to="/category/groceries">
            <Image
              src="https://images.pexels.com/photos/17334212/pexels-photo-17334212/free-photo-of-egg-carton-with-a-cut-raw-egg-to-show-the-inside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        {/* Category Text */}
        <Col xs={12} className="text-center my-3">
          <p className="p-3 text-gray-600 shadow-lg rounded-xl font-bold">
            Fragrances Makeup And Dairy Products
          </p>
        </Col>

        {/* Third row of images */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to="/category/beauty">
            <Image
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to="/category/beauty">
            <Image
              src="https://images.pexels.com/photos/18978369/pexels-photo-18978369/free-photo-of-palette-of-eye-shadows-with-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-4">
          <Link to="/category/beauty">
            <Image
              src="https://images.pexels.com/photos/11635441/pexels-photo-11635441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rounded
              className="border-2 border-black img-fluid w-100 transform transition-transform duration-300 hover:scale-95"
              style={{ height: "500px", objectFit: "cover" }} // Fixes the size in small viewports
            />
          </Link>
        </Col>

        {/* Category Text */}
        <Col xs={12} className="text-center my-3">
          <p className="p-3 text-gray-600 shadow-lg rounded-xl font-bold">
            Makeup, Skin Care, And Blushes
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDisplay;
