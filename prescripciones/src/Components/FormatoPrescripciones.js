import React from 'react';
import { rx } from '../Constants/Images';

const FormatoPrescripciones = ({title, doctor, patient, date}) => {
    return (
        <div className="format">
            <div className="container">
                <h1>{title}</h1>
                <div className="dataText">
                    <div className="fieldsTxt">
                        <p>Dr(a).:</p>
                        <p>Paciente:</p>
                        <p>Fecha:</p>
                    </div>
                    <div className="inputs">
                        <p>{doctor}</p>
                        <p>{patient}</p>
                        <p>{date}</p>
                    </div>
                    <img src={rx} alt="" className="imgRX" />

                    {/* Productos  */}

                    <p>Observaciones:</p>
                    <p className="Obs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias similique quae ipsum expedita, doloremque delectus. Earum ullam iure adipisci fugiat illum iste aliquid qui voluptas ducimus, corporis mollitia beatae dolores!</p>
                </div>
            </div>
        </div>
    );
};

export default FormatoPrescripciones;