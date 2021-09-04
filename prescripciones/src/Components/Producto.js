import React from 'react';
import "../css/Producto.css";

const Producto = ({ prod, val }) => {
  return (
    <div>
      {prod.map((productos, index) => (
        <div className="Productos" key={index}>

          <input type="checkbox" className="checkbox" name={`checkbox${productos.id}`} id={`cbox${productos.id}`} value="first_checkbox" />
          <label htmlFor={`cbox${productos.id}`} className={`label label${val}`}>
            <div className="prod" htmlFor="checkbox1">
              <div className="imgProduct">
                <img src={productos.image} alt="" />
              </div>
              <div className={`textProuct textProuct${val}`}>
                <h3>{productos.name}</h3>
                <p>{productos.description}</p>
              </div>
            </div>
          
            </label>
        </div>

      ))}
    </div>
  );
};

export default Producto;