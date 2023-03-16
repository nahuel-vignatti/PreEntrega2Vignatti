import ItemCount from "../ItemCount";
import { NavLink } from "react-bootstrap";
import "./item.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Item ({producto}){
 
    return <Col xs={3} className="card"> 
        <img src={producto.img} alt="" className="imgLista"/>
        <p>{producto.name}</p>       
        <Button variant="primary"><NavLink to={`/item/${producto.id}`}>Ver Detalle</NavLink>  </Button>     
        
    </Col>
    
}
export default Item;