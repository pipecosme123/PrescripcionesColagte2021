import { Component } from "react";
import Swal from 'sweetalert2'
import Prescripcion from "./Prescripcion";
import "../css/App.css";
import { Productos_Especializados, Productos_Ortodoncia, Productos_HigieneBucalDiario, Productos_Hipersensibilidad_Dental, Productos_Blanqueaminto_Dental } from "../Constants/Product"
// import { render } from "@testing-library/react";useState,

class Tabs extends Component {

  state = {
    toggleState: 1
  }

  componentDidMount() {
    Swal.fire({
      title: '¡Atención!',
      text: 'Este aplicativo web no guarda la información que usted digita en ninguna base de datos',
      icon: 'info',
      confirmButtonText: 'Ok',
      showCloseButton: true
    })
  }

  //   const toggleTab = (index) => {
  //     setToggleState(index);
  //     if (window.screen.width <= 480) {
  //       window.scroll({
  //         top: 56 * 4,
  //         behavior: 'smooth'
  //       });
  //     }
  //   };

  //   if(cont === 1) {

  //   cont = cont + 1;
  // }

  // componen

  render() {

    const scrollY = (index) => {

      this.setState({ toggleState: index });

      if (window.screen.width <= 480) {
        window.scroll({
          top: 56 * 4,
          behavior: 'smooth'
        });
      }
    };

    return (
      <div className="container">
        <div className="bloc-tabs">
          <button className={this.state.toggleState === 1 ? "tabs active-tabs tabs1" : "tabs"} onClick={() => scrollY(1)}>
            <p>{Productos_Especializados.shortTitle}</p>
          </button>

          <button className={this.state.toggleState === 2 ? "tabs active-tabs tabs2" : "tabs"} onClick={() => scrollY(2)}>
            {Productos_Ortodoncia.shortTitle}
          </button>

          <button className={this.state.toggleState === 3 ? "tabs active-tabs tabs3" : "tabs"} onClick={() => scrollY(3)}>
            {Productos_HigieneBucalDiario.shortTitle}
          </button>

          <button className={this.state.toggleState === 4 ? "tabs active-tabs tabs4" : "tabs"} onClick={() => scrollY(4)}>
            {Productos_Hipersensibilidad_Dental.shortTitle}
          </button >

          <button className={this.state.toggleState === 5 ? "tabs active-tabs tabs5" : "tabs"} onClick={() => scrollY(5)}>
            {Productos_Blanqueaminto_Dental.shortTitle}
          </button >
        </div >

        <div className="content-tabs">
          <div
            className={this.state.toggleState === 1 ? "content1 active-content" : "content"}>
            <Prescripcion data={Productos_Especializados} num="1"></Prescripcion>
          </div>

          <div
            className={this.state.toggleState === 2 ? "content2 active-content" : "content"}>
            <Prescripcion data={Productos_Ortodoncia} num="2"></Prescripcion>
          </div>

          <div
            className={this.state.toggleState === 3 ? "content3 active-content" : "content"}>
            <Prescripcion data={Productos_HigieneBucalDiario} num="3"></Prescripcion>
          </div>

          <div
            className={this.state.toggleState === 4 ? "content4 active-content" : "content"}>
            <Prescripcion data={Productos_Hipersensibilidad_Dental} num="4"></Prescripcion>
          </div>

          <div
            className={this.state.toggleState === 5 ? "content5 active-content" : "content"}>
            <Prescripcion data={Productos_Blanqueaminto_Dental} num="5"></Prescripcion>
          </div>

        </div>

        {/* <FormatoPrescripciones></FormatoPrescripciones> */}
      </div >
    );
  }
}

export default Tabs;