import React, { useState } from 'react';
import "../css/Producto.css";

const Producto = ({ prod, val }) => {

  let [checkedState, setCheckedState] = useState(
    new Array(prod.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <div className="visible">
        {prod.map((productos, index) => (
          <div className="Productos" key={index}>

            <input type="checkbox" className="checkbox" name={`checkbox${productos.id}`} id={`cbox${productos.id}`} value="first_checkbox" checked={checkedState[index]} onChange={() => handleOnChange(index)} />
            <label htmlFor={`cbox${productos.id}`} className={`label label${val}`}>
              <div className="prod" htmlFor="checkbox1">
                <div className={`imgProduct ${productos.classImg}`}>
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
        <p className="recomendations">No olvide usar seda dental diariamente</p>
      </div>
    </div>
  );
  // }
};

export default Producto;