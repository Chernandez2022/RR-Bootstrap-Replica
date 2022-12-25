import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form ";

export default function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "1300px",
            minHeight: "420px",
            marginBottom: "50px",
            backgroundColor: "#DEEED6",
          }}
          className="black-text"
        >
          <div
            style={{
              top: "auto",
              width: "570px",
              marginLeft: "100px",
              marginBottom: "50px",
              marginTop: "75px",
            }}
          >
            <Card.text style={{ fontSize: "2.5em", fontwight: "bold" }}>
              Order Groceries for delivery <br /> Or pickup
            </Card.text>
            <Card.Text style={{ fontSize: "1em" }}>
              Anything you wish from your local stores right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.control
                  size="lg"
                  type="text"
                  placeholder="Enter Address"
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
        <div>
          <img
            style={{
              height: "420px",
              width: "20%",
              position: "absolute",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            scr="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg"
          />
        </div>
      </div>
    </div>
  );
}
