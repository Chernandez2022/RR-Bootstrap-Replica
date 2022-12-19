import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form ";

export default function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "1000px",
            minHeight: "420px",
            marginBottom: "50px",
            backgroundColor: "#DEEED6",
          }}
          className="black-text"
        ></Card>
        <div></div>
      </div>
    </div>
  );
}
