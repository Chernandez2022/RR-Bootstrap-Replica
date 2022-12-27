import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StoreListings() {
  return (
    <div style={{ margin: "auto" }}>
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "50px",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Browse Stores in Houston
      </h2>

      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                style={{ height: "55px", width: "50px", border: "1px solid" }}
                src="https://corporate.aldi.us/fileadmin/_processed_/7/6/csm_aldi_logo_2017_cbae513198.jpg"
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeo-HogeAxKLSjLFl1Cm0uheCIDsbJRuDTQ&usqp=CAU "
                roundedCircle
              />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid black",
                }}
                src="https://www.pngitem.com/pimgs/m/145-1457218_kroger-logo-png-kroger-pharmacy-transparent-png.png"
                roundedCircle
              />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
