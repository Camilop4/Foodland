import "./About.css";

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-color.png"

const About = () => {

    const logoIcon = logo
    return(
        <div className= "aboutContainer">
        {/* <div className="logo"><img src={logoIcon}/></div> */}
        <h1 className="titleAbout">¿Qué es FOODLAND?</h1>
        <p className="textAbout">
          ¡Bienvenidos a FOODLAND, tu supermercado de confianza en el corazón del barrio!
          En FOODLAND nos enorgullece ser mucho más que un simple supermercado. Somos un emprendimiento local comprometido con brindar productos frescos, de calidad y asequibles a nuestra comunidad. Desde el momento en que cruzas nuestras puertas, te sumerges en un ambiente acogedor donde te recibimos con una sonrisa y te ofrecemos un servicio personalizado.
          Nuestra pasión por los alimentos frescos y saludables nos impulsa a seleccionar cuidadosamente cada uno de los productos que llenan nuestras estanterías. Desde frutas y verduras de temporada hasta carnes y pescados de la más alta calidad, encontrarás todo lo que necesitas para una alimentación equilibrada y deliciosa.
          Además, en FOODLAND valoramos la cercanía con nuestros clientes y nos esforzamos por conocer sus preferencias y necesidades. Nuestro equipo amable y atento está siempre dispuesto a brindarte asesoramiento y recomendaciones personalizadas, para que encuentres exactamente lo que buscas y más.
          No solo nos preocupamos por tu satisfacción, sino también por el bienestar de nuestro entorno. En FOODLAND promovemos prácticas sostenibles y colaboramos con proveedores locales para reducir nuestra huella ambiental y apoyar la economía local.
          Ven a descubrir la diferencia FOODLAND y únete a nuestra familia de clientes satisfechos. Ya sea que necesites hacer una compra rápida, encontrar ingredientes frescos para una receta especial o simplemente quieras disfrutar de un ambiente acogedor, en FOODLAND encontrarás todo eso y mucho más.
          Gracias por elegirnos como tu supermercado de barrio. ¡Esperamos verte pronto en FOODLAND, donde la calidad y la amabilidad se encuentran!
        </p>
      </div>
    )
};

export default About;
