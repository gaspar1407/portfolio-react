import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./estilos/Home.css";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import Footer from "./Footer";
import Circles from "./Circles";
import Carrusel from "./Carrusel";
import CarruselHf from "./CarruselHf";
import ReactPlayer from "react-player";
import Contact from "./Contact";

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [modal, setModal] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    /*     localStorage.setItem("theme", theme);
     */ document.body.className = theme;
  }, [theme]);

  const abrirModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <div>
      <div className={`Home ${theme}`}>
        <Circles />
        <nav className={`nav ${theme}`}>
          <Link
            className="Link-nav"
            to="section1"
            spy={true}
            smooth={true}
            duration={300}
            offset={-70}
          >
            <button className="boton">Presentación</button>
          </Link>
          <Link
            to="section2"
            className="Link-nav"
            spy={true}
            smooth={true}
            duration={300}
            offset={-70}
          >
            <button className="boton">Proyectos</button>
          </Link>
          <Link
            to="section3"
            className="Link-nav"
            spy={true}
            smooth={true}
            duration={300}
            offset={-70}
          >
            <button className="boton">Tecnologías</button>
          </Link>
          <Link
            to="section4"
            className="Link-nav"
            spy={true}
            smooth={true}
            duration={300}
            offset={-70}
          >
            <button className="boton">Contáctame</button>
          </Link>
          <input type="checkbox" id="toggle" onClick={toggleTheme}></input>
          <label for="toggle" className="buttonDark"></label>
        </nav>
        <div id="section1" /* className="body" */>
          <div className="contenedorPresentacion">
            <ReactPlayer
              url="https://youtu.be/Bqamgb8pDxo"
              playing
              controls
              className="react-player"
              width="640px"
              height="370px"
            />
          </div>

          <div className="contenedorinfo">
            <p className="texto">
              <h3 className="quiensoy">Quién soy?</h3>
              <div className="contenedorinfo">
                {/* <p className="texto"> */}
                Desarrollador Full Stack apasionado por el Front End. Curioso,
                con ganas de aprender siempre cosas nuevas que me ayuden a
                crecer profesionalmente y como persona. Con excelente capacidad
                resolutiva, siempre buscando maneras rápidas y eficaces de
                solucionar los problemas, Disfruto de trabajar en equipos donde
                pueda aprender y aportar mis conocimientos. Inicié mi
                capacitación en la academia Henry y me sigo capacitando
                constantemente en la Universidad Nacional de Gral. Sarmiento
                (UNGS) donde estoy estudiando para recibirme de técnico
                universitario en Informática. Antes de sumergirme en el mundo IT
                siempre estuve en puestos laborales relacionados al Marketing,
                lo que me ayudo a desarrollar habilidades blandas como la
                comunicación, captar las necesidades del cliente, y la empatía.
                {/*  </p> */}
              </div>
            </p>
          </div>
          <div id="section2">
            <div>
              <h3 className="quiensooy">Proyectos:</h3>
              <div className="contenedorrr">
                <div>
                  <p className="tituloProyectos">
                    <b style={{ fontWeight: "550", color: "#84c95f" }}>
                      Dogs App
                    </b>{" "}
                    es una Single Page Application realizada como proyecto
                    individual para el bootcamp de Henry utilizando React para
                    el fornt-end y Redux como state management. Todos los
                    componentes fueron creados con CSS sin uso de librerias
                    externas. La SPA consume datos de una API, a traves de un
                    Back-end desarrollado en NodeJS utilizando Express agregando
                    nuevas funcionalidades a la API original.
                  </p>
                  <div style={{ width: "50%", marginTop: "0" }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyConten: "flex-end",
                    marginTop: "0",
                    flexDirection: "column",
                    width: "80%",
                  }}
                >
                  <Carrusel />

                  <a
                    href="https://dogs-app-client-ten.vercel.app/"
                    key="faltauno"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="botonVisitar" style={{ width: "400px" }}>
                      Visitar Dogs App!
                    </button>
                  </a>
                </div>
              </div>

              <div
                className="contenedorrr"
                style={{ marginTop: "25px", alignItems: "flex-start" }}
              >
                <div>
                  <p
                    className="tituloProyectos"
                    style={{
                      width: "550px",
                      marginLeft: "60px",
                      marginRight: "20px",
                      marginBottom: "0",
                      marginTop: "0",
                    }}
                  >
                    <b style={{ fontWeight: "550", color: "#84c95f" }}>
                      Henry Fitness!
                    </b>{" "}
                    es una aplicación, realizada en el proyecto grupal de Henry,
                    que busca simplificar por una parte al usuario, con
                    infomación (staff, actividades, dirección, etc.) y con la
                    suscripción tanto al gimnacio como a las actividades del
                    mismo. Y por otra parte al administrador, brindandole todas
                    las herramientas necesarias para el manejo del dia a dia
                    (turnos, usuarios, profesionales, etc.). Cuenta con división
                    de perfiles. Uno de administrador, otra de clientes y una
                    mas para potenciales clientes, siendo las tres vistas
                    totalmente diferentes y amoldándose a las necesidades de
                    todos los tipos de usuarios.
                  </p>
                  <div style={{ width: "50%", marginTop: "0" }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyConten: "flex-end",
                    marginTop: "0",
                    flexDirection: "column",
                    width: "80%",
                  }}
                >
                  <CarruselHf />
                  <a
                    href="https://hfitness.vercel.app/"
                    key="hfitness"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="botonVisitar"
                      style={{
                        width: "400px",
                        marginBottom: "50px",
                        marginLeft: " 0px",
                      }}
                    >
                      Visitar Henry Fitness!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="section3"
            style={{ paddingTop: "180px", paddingBottom: "80px" }}
          >
            <div>
              <h3 className="quiensooy">Tecnologías:</h3>
              <div className="contenedorTecnologias">
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>javascript</Tooltip>
                  }
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/ion:logo-javascript.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>HTML</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/mdi:language-html5.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>CSS</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/teenyicons:css3-solid.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>React</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/akar-icons:react-fill.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>Redux</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/bxl:redux.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>Bootstrap</Tooltip>
                  }
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/cib:bootstrap.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>Node</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/fa-brands:node.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
              </div>
              <div
                className="contenedorTecnologias"
                style={{ marginBottom: "30px" }}
              >
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>Express</Tooltip>
                  }
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/simple-icons:express.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>Sequelize</Tooltip>
                  }
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/file-icons:sequelize.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip-${"bottom"}`}>PostgresSQL</Tooltip>
                  }
                >
                  <div className="loguitos">
                    <img
                      src="https://api.iconify.design/akar-icons:postgresql-fill.svg"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>

                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>Git</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/git.png"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>

                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={<Tooltip id={`tooltip-${"bottom"}`}>Trello</Tooltip>}
                >
                  <div className="loguitos">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/trello.png"
                      className="img"
                      alt="logo"
                    />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="quiensooy">Contáctame:</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-around",
                  marginTop: "50px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    textAlign: "start",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    marginLeft: "-100px",
                    alignItems: "flex-start",
                    marginBottom: "15px",
                  }}
                >
                  <h4
                    className="contacto"
                    style={{ marginLeft: "50px", textAlign: "start" }}
                  >
                    <img
                      src="https://api.iconify.design/carbon:email-new.svg"
                      className="imgContacto"
                      alt="logo"
                    />{" "}
                    gasparmunoz@hotmail.com
                  </h4>
                  <h4
                    className="contacto"
                    style={{ textAlign: "start", marginLeft: "50px" }}
                  >
                    <img
                      src="https://api.iconify.design/ic:baseline-phone.svg"
                      className="imgContacto"
                      alt="logo"
                    />{" "}
                    (+54)1126595851
                  </h4>

                  <button
                    className="botonVisitar"
                    onClick={(e) => abrirModal(e)}
                    style={{
                      width: "500px",
                      marginTop: "30px",
                      marginLeft: " 50px",
                    }}
                  >
                    Contáctame
                  </button>
                  <Contact setModal={setModal} modal={modal} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section4" className={`Footer ${theme}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
