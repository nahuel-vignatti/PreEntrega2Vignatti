import { NavLink } from "react-router-dom";
import "./item.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Item({ producto }) {
  return (
    <Col xs={4} className="card">
      <img src={producto.img} alt="" className="imgLista" />
      <h5>{producto.name}</h5>
 
      <NavLink to={`/item/${producto.id}`}>        
        <Button variant="primary">Ver Detalle </Button>{" "}
      </NavLink>
    </Col>
  );
}
export default Item;
