import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPlay, FaMugHot, FaUtensils, FaCouch, FaHeart } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div>
      <div className="heroBack">
        <Container className="h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col lg="6"></Col>
            <Col lg="6">
              <div className="d-flex flex-column justify-content-center w-100 h-100">
                <p
                  className="fs-2"
                  style={{
                    color: "#c8a96b",
                    fontFamily: "Playfair Display",
                  }}
                >
                  CRAFT . CULTURE . QUALITY
                </p>
                <p
                  style={{
                    color: "#e8dcc0",
                    fontFamily: "Playfair Display",
                    fontSize: "65px",
                  }}
                >
                  The Art of Fine Coffee
                </p>
                <p
                  className="fs-4 w-75 mt-"
                  style={{ color: "#e8dcc0", fontFamily: "Redaction" }}
                >
                  Welcome to Brewed, where passion meets perfection in every
                  single drop.
                </p>
                <div className="d-flex gap-3 mt-5">
                  <button
                    className="btn fw-semibold"
                    style={{
                      color: "#dddad4",
                      backgroundColor: "#c8a96b",
                      fontSize: "18px",
                    }}
                  >
                    Explore Our Menu
                  </button>
                  <button
                    className="btn fw-semibold"
                    style={{
                      color: "#dddad4",
                      border: "1px solid #c8a96b",
                      fontSize: "18px",
                    }}
                  >
                    <FaPlay style={{ color: "#c8a96b" }} /> Watch Our Story
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
<Container style={{ marginTop: "-100px" }}>
      <Row className="g-4">

        <Col lg="3" sm="6">
          <Card
            style={{ backgroundColor: "#f7f3ec", border: "none" }}
            className="p-4 text-center shadow-sm h-100"
          >
            <div className="d-flex justify-content-center w-100">
              <FaMugHot style={{ color: "#c8a96b" }} className="fs-1" />
            </div>
            <p className="fw-semibold mt-3 fs-5" style={{ color: "#3a2e2b" }}>
              Quality Coffee
            </p>
            <p className="text-muted small">
              We source the finest beans <br /> from around the world.
            </p>
          </Card>
        </Col>

        <Col lg="3" sm="6">
          <Card
            style={{ backgroundColor: "#f7f3ec", border: "none" }}
            className="p-4 text-center shadow-sm h-100"
          >
            <div className="d-flex justify-content-center w-100">
              <FaUtensils style={{ color: "#c8a96b" }} className="fs-1" />
            </div>
            <p className="fw-semibold mt-3 fs-5" style={{ color: "#3a2e2b" }}>
              Tasty Food
            </p>
            <p className="text-muted small">
              Delicious meals made with <br /> fresh, local ingredients.
            </p>
          </Card>
        </Col>


        <Col lg="3" sm="6">
          <Card
            style={{ backgroundColor: "#f7f3ec", border: "none" }}
            className="p-4 text-center shadow-sm h-100"
          >
            <div className="d-flex justify-content-center w-100">
              <FaCouch style={{ color: "#c8a96b" }} className="fs-1" />
            </div>
            <p className="fw-semibold mt-3 fs-5" style={{ color: "#3a2e2b" }}>
              Cozy Atmosphere
            </p>
            <p className="text-muted small">
              A warm and welcoming space <br /> to relax and unwind.
            </p>
          </Card>
        </Col>

        <Col lg="3" sm="6">
          <Card
            style={{ backgroundColor: "#f7f3ec", border: "none" }}
            className="p-4 text-center shadow-sm h-100"
          >
            <div className="d-flex justify-content-center w-100">
              <FaHeart style={{ color: "#c8a96b" }} className="fs-1" />
            </div>
            <p className="fw-semibold mt-3 fs-5" style={{ color: "#3a2e2b" }}>
              Made with Love
            </p>
            <p className="text-muted small">
              Every cup and plate is <br /> crafted with care.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default HeroSection;
