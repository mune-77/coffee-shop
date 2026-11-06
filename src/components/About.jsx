import { Container, Row, Col, Button } from "react-bootstrap";
const AboutSection = () => {
  return (
    <section className="py-5 mt-5" style={{ backgroundColor: "#f7f3ec" }}>
      <Container className="py-5">
        <Row className=" align-items-center">
          <Col lg="6" sm="6">
            <div>
              <p
                className="text-uppercase fw-bold"
                style={{ color: "#c8a96b", letterSpacing: "2px" }}
              >
                ABOUT US
              </p>
              <p
                className="fw-bold fs-2"
                style={{
                  color: "#3a2e2b",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Warm Hospitality & Exceptional Taste
              </p>
              <p
                className="text-muted fs-5 mb-4 mt-4"
                style={{ lineHeight: "1.8" }}
              >
                Our website is undergoing a complete redesign. The content here
                is flexible for restructuring and improvement, while keeping the
                project's core identity intact. Brewed is an experiential coffee
                shop serving hot and cold coffee, along with delicious desserts.
                We care deeply about great taste and warm, friendly service. We
                are open daily from 9:00 AM to 11:00 PM.
              </p>
              <Button
                className="px-4 py-3 fw-semibold border-0 shadow-sm"
                style={{ backgroundColor: "#c8a96b", color: "#fff" }}
              >
                View Full Menu
              </Button>
            </div>
          </Col>
          <Col lg="6" sm="6">
            <div>
              <img
                src="https://img.magnific.com/premium-photo/cafe-interior-coffee-shop-inside-with-counter-bar-empty-seats-ai-generated_18714-1220.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="shadow rounded-5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutSection;
