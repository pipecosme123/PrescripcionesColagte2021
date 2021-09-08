import React, { useRef, useState } from 'react';
import axios from 'axios';
import Producto from './Producto';
import * as htmlToImage from 'html-to-image';
import { LogoRX } from "../Constants/Images";
import Swal from 'sweetalert2'
import copy from 'copy-to-clipboard';
import "../css/Prescripcion.css";

const Prescripcion = ({ data, num }) => {

  let [infoPrescipcion, setInfoPrescipcion] = useState({
    nameDoctor: "",
    namePatient: "",
    observations: ""
  })

  let [isVisible, setIsVisible] = useState(false);

  let fecha = new Date();
  const Actual = fecha.toLocaleDateString();

  const ref = useRef(HTMLDivElement);
  var link = document.createElement('a');

  const createImage = () => {

    setIsVisible(true);

    setTimeout(() => {
      htmlToImage.toJpeg(document.getElementById(`my-node${num}`), { quality: 0.95 })
      .then(async (dataUrl) => {
        let name = data.imgTitle;

        link.download = name;
        link.href = dataUrl;

        // setTimeout(async () => { https://prescripcionescolgate.col1.co/apiPrescripciones/files  
          let res = await axios.post('/apiPrescripciones/files', {
            nameImagen: name,
            imagen: dataUrl
          })

          if (res.data.status !== 'err') {
            let cadena = res.data.status.replace('/home/kagencia/', '');

            copy(cadena);
            Swal.fire({
              title: '¡Felicitaciones!',
              html: `<p style="font-size: 0.8em">La imagen de tu prescripción ha sido creada correctamente, el link para acceder a ella ya está copiado en tu dispositivo, solo es pegarlo en el chat directo de tu paciente o si deseas, puedes copiarlo tu mismo.</p> <br> <p style="font-size: 1em">${cadena}</p>`,
              icon: 'success',
              confirmButtonText: "OK"
            })

          } else {
            Swal.fire({
              title: 'Error!',
              text: 'La imagen de tu prescripción no ha sido creada correctamente, vuelve a intentarlo.',
              icon: 'error',
              confirmButtonText: "OK"
            })
          }
          setIsVisible(false);
        // }, 300);
      });
    }, 300);

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
        <img src={LogoRX.rx} alt="" className="imgRX" />
        <Producto prod={data.productos} val={data.idA} img={false}></Producto>

        <p>Observaciones:</p>
        <textarea className={!isVisible ? `textarea textarea${data.idA}` : 'noVisible'} name="observations" id="observations" onChange={handleChange}></textarea>
        <p className={isVisible ? `observaciones observaciones${data.idA}` : "noVisible"}>{infoPrescipcion.observations}</p>
      </div>

      <button className={`Prescripcionbtn btn${data.idA}`} onClick={() => createImage()}>Generar</button>

    </div>
  );
};

export default Prescripcion;