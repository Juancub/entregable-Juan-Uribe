
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"


export default function Item({setCantidadProductos,cantidadProductos,nombre,descripcion,imagen,stock}) {

  const [cantidadStock, setCantidadStock] = useState(stock);
  
  const contar = () => {
    setCantidadStock(cantidadStock-1);
    setCantidadProductos(cantidadProductos+1);
  }

  const spanProducto = () => {
    if (cantidadStock>0) {
      return <h5>En stock: <span>{cantidadStock}</span></h5>
      
    } else {
      return <h5>En stock: <span id="agotado">agotado</span></h5>
    }
  }

  const desabilitarBoton = () => {
    if (cantidadStock>0) {
      return (
        <div id="boton">
          <button onClick={contar}>COMPRAR</button>
        </div>
      )
    } else {
      return (
        <div id="boton">
          <button disabled>COMPRAR</button>
        </div>
      )
    }
  }

  return (
    <div className='producto'>
        <div><img src={imagen} alt={nombre}/></div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        {spanProducto()}
        {desabilitarBoton()}
    </div>
  )
}
