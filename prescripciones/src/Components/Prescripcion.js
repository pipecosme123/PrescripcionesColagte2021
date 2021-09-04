import React, { /*useCallback,*/ useRef, useState } from 'react';
import axios from 'axios';
import Producto from './Producto';
import * as htmlToImage from 'html-to-image';
import { LogoRX } from "../Constants/Images";
import "../css/Prescripcion.css";

const Prescripcion = ({ data, num }) => {
  
  let [imglink, setImgLink] = useState('');

  const ref = useRef(HTMLDivElement);
  var link = document.createElement('a');

  const createImage = () => {

    htmlToImage.toJpeg(document.getElementById(`my-node${num}`), { quality: 0.95 })
      .then((dataUrl) => {
        let name = data.shortTitle.replace(' ', '');
        link.download = name;
        link.href = dataUrl;

        setTimeout(async () => {
          // console.log(dataUrl);
          let res = await axios.post('http://localhost:8080/files', {
            nameImagen: name,
            imagen: dataUrl
          })
          setImgLink(res.data.status);
        }, 1000);
      });
  }

  let fecha = new Date();
  const Actual = fecha.toLocaleDateString();

  return (
    <div>
      <div ref={ref} id={`my-node${num}`} className="Prescripcion">
        <h2>{data.title}</h2>
        <div className="ipt">
          <div className="inputsTxt">
            <p>Dr(a).:</p>
            <p>Paciente:</p>
            <p>Fecha:</p>
          </div>
          <div className="inputs">
            <input className={`inputText inputText${data.idA}`} type="text" />
            <input className={`inputText inputText${data.idA}`} type="text" />
            <b>{Actual}</b>
          </div>
        </div>
        <img src={LogoRX.rx} alt="" className="imgRX" />
        <Producto prod={data.productos} val={data.idA}></Producto>

        <p>Observaciones:</p>
        <textarea className={`textarea textarea${data.idA}`} name="observaciones" id="observaciones"></textarea>
        
        {/* <textarea className={`textarea textarea${data.idA}`} name="observaciones" id="observaciones" value={info}></textarea> */}
      </div>

      <button className={`Prescripcionbtn btn${data.idA}`} onClick={() => createImage()}>Generar</button>
      <p>{imglink}</p>
    </div>
  );
};

export default Prescripcion;

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// var link = document.createElement('a');
// link.download = 'my-image-name.jpeg';
// link.href = dataUrl;
// link.click();