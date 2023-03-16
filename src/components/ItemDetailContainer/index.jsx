import "./itemdetailcontainer.css";
import Products from "../../mocks/products";
import { useId, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
function ItemDetailContainer({itemId}){
    const[producto,setProducto] = useState([]);

    useEffect(() => {
        const productoPromise = new Promise((resolve, reject) =>
          setTimeout(() => resolve(Products), 2000)
        );
        productoPromise
          .then((reponse) => {

            const produBuscado = reponse.find(elem=>elem.id == itemId);
            setProducto(produBuscado);
          })
          .catch((err) => console.log(err));
      }, [itemId]);

    return <section className="itemDetail">
         <ItemDetail producto={producto}/> 
    </section>
}

export default ItemDetailContainer;