import React, { useRef, useState } from 'react';
// import axios from 'axios';
import Producto from './Producto';
import * as htmlToImage from 'html-to-image';
import { LogoRX } from "../Constants/Images";
import Swal from 'sweetalert2'
// import copy from 'copy-to-clipboard';
import "../css/Prescripcion.css";

const Prescripcion = ({ data, num }) => {

  let [infoPrescipcion, setInfoPrescipcion] = useState({
    nameDoctor: "",
    namePatient: "",
    observations: "",
    link: ""
  })

  let [isVisible, setIsVisible] = useState(false);

  let fecha = new Date();
  const Actual = fecha.toLocaleDateString();

  const ref = useRef(HTMLDivElement);


  const createImage = (idA) => {

    setIsVisible(true);

    htmlToImage.toJpeg(document.getElementById(`my-node${num}`), { quality: 0.95 })
      .then(async (dataUrl) => {

        let name = data.imgTitle;

        var link = document.createElement('a');
        link.download = name;
        link.href = dataUrl;
        link.click();

        Swal.fire({
          title: '¡Felicitaciones!',
          html: `<p>La imagen de su prescripción ha sido creada correctamente</p> <br> 
            <p style="font-size: 0.8em">Esta imagen debe enviarla a su paciente.</p>`,
          icon: 'success',
          confirmButtonText: "OK"
        })

        setIsVisible(false);
      });
  }

  const handleChange = e => {
    const newData = { ...infoPrescipcion };
    newData[e.target.name] = e.target.value;
    setInfoPrescipcion(newData);
  }

  return (
    <div className="contentPrescripcion">

      <div className="Prescripcion" ref={ref} id={`my-node${num}`}>
        <h2>{data.title}</h2>
        <div className="ipt">
          <div className="inputsTxt">
            <p>Dr(a).:</p>
            <p>Paciente:</p>
            <p>Fecha:</p>
          </div>
          <div className="inputs">
            <input className={`inputText inputText${data.idA}`} type="text" name="nameDoctor" onChange={handleChange} value={infoPrescipcion.nameDoctor} />
            <input className={`inputText inputText${data.idA}`} type="text" name="namePatient" onChange={handleChange} />
            <b>{Actual}</b>
          </div>
        </div>

        <div className="iptMovil">
          <p>Dr(a).:</p>
          <input className={`inputText inputText${data.idA}`} type="text" name="nameDoctor" onChange={handleChange} value={infoPrescipcion.nameDoctor} /> <br />
          <p>Paciente:</p>
          <input className={`inputText inputText${data.idA}`} type="text" name="namePatient" onChange={handleChange} /> <br />
          <p>Fecha:</p>
          <b>{Actual}</b>
        </div>

        <img src={LogoRX.rx} alt="" className="imgRX" />
        <Producto prod={data.productos} val={data.idA} img={false}></Producto>

        <p>Observaciones:</p>
        <textarea className={!isVisible ? `textarea textarea${data.idA}` : 'noVisible'} name="observations" id="observations" onChange={handleChange}></textarea>
        <p className={isVisible ? `observaciones observaciones${data.idA}` : "noVisible"}>{infoPrescipcion.observations}</p>

      </div>
      <div className="contentLink">
        <p>{infoPrescipcion.link === "" ? "" : `Link:`}</p>
        <p className={`pLink link${data.idA}`}>{infoPrescipcion.link}</p>
      </div>
      <button className={!isVisible ? `Prescripcionbtn btn${data.idA}` : 'noVisible'} onClick={() => createImage(data.idA)}>Generar</button>
      <h3 className={isVisible ? `enEspera enEspera${data.idA}` : "noVisible"}>Un momento, por favor.</h3>

    </div>
  );
};

export default Prescripcion;