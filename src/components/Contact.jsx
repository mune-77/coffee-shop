import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const ContactSection = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f7f3ec" }}>
      <Container className="py-4">
        <div className="text-center">
          <p
            className="text-uppercase fw-bold small"
            style={{ color: "#c8a96b", letterSpacing: "2px" }}
          >
            get in touch
          </p>
          <p
            className="fs-1"
            style={{
              color: "#3a2e2b",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Contact Us
          </p>
        </div>
        <Row>
          <Col lg="5" sm="12" className="mt-5">
            <div className="pe-lg-4 mt-3">
              <h4
                className="fw-bold"
                style={{
                  color: "#3a2e2b",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Visit Our Coffee Shop
              </h4>
              <p className="text-muted mt-4">
                Have a question or just want to say hello? we'd love to hear
                from you. Drop by or send us a message.
              </p>
              <div className="d-flex align-items-center mt-4">
                <FaMapMarkerAlt
                  className="fs-5 me-3 mt-1"
                  style={{ color: "#c8a96b" }}
                />
                <div>
                  <h6
                    className="fw-bold mb-1 mt-2"
                    style={{ color: "#3a2e2b" }}
                  >
                    Location
                  </h6>
                  <p className="text-muted mb-0">
                    Downtown, Coffee Street, City Center
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaPhoneAlt
                  className="fs-5 me-3 mt-1"
                  style={{ color: "#c8a96b" }}
                />
                <div>
                  <h6
                    className="fw-bold mb-1 mt-2"
                    style={{ color: "#3a2e2b" }}
                  >
                    Phone
                  </h6>
                  <p className="text-muted mb-0">+1 (012) 345-6789</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaEnvelope
                  className="fs-5 me-3 mt-1"
                  style={{ color: "#c8a96b" }}
                />
                <div>
                  <h6
                    className="fw-bold mb-1 mt-2"
                    style={{ color: "#3a2e2b" }}
                  >
                    Email
                  </h6>
                  <p className="text-muted mb-0">hello@example.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="fw-semibold"
                    style={{ color: "#3a2e2b" }}
                  >
                    Your Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    className="py-2 border-0 bg-light"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="fw-semibold"
                    style={{ color: "#3a2e2b" }}
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="py-2 border-0 bg-light"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label
                    className="fw-semibold"
                    style={{ color: "#3a2e2b" }}
                  >
                    Your Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message here..."
                    className="py-2 border-0 bg-light"
                  />
                </Form.Group>
                <Button
                  className="w-100 py-3 fw-semibold border-0 shadow-sm"
                  style={{ backgroundColor: "#c8a96b", color: "#fff" }}
                >Send Massage</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactSection;
