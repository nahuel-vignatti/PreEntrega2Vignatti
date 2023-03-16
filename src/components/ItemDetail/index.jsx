import ItemCount from "../ItemCount";
import { Container } from "react-bootstrap";
import "./itemdetail.css";

function ItemDetail({ producto }) {
  const onAdd = (cant) => {
    console.log("Se agregaron " + cant);
  };
  return (
    <article>
      <Container className="d-flex flex-row gap-5">
        <div className="imgCtn">
          <img
            src={producto.img}
            alt="imagen de producto"
            className="imgProdu"
          />
        </div>
        <div className="infoProdu">
          <h2>{producto.name}</h2>
          <p>{producto.descripcion}</p>
          <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
