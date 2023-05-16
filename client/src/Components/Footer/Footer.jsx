//IMPORT IMAGES
import { Link } from "react-router-dom"
import logofoot from "../../Imgs/LogosSVG/logo-color.png"
//IMPORT STYLES:
import "./Footer.css"
//IMPORT :
const linked = "https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png"

// import { useState } from "react"
// import { useDispatch } from "react-redux"
// //IMPORT ACTION:
// import {postSuscribe} from "../../redux/actions"

const Footer = () =>{

    const logoPng = logofoot
    //----------------------Armé esto para el form , pero no se si esta bien ------
    // const [suscribe, setSuscribe] = useState({
    //     email:"",
    // });
    // const dispatch = useDispatch();

    // const handleSubmit =() =>{
    //     let form = true;
    //     if(suscribe["email"] === null){ form = false; alert("Please complete the field")}

    //     if(form){
    //         dispatch(postSuscribe(suscribe))
    //         .then(() => alert("Email added"));
    //         } else {
    //         return alert("Please try again");
    //         }
    //     }
        
    return(
        <div name="ContainterFooter" className="ContainterFooter">

            {/* -----------Logo FootLand --------------*/}
            <div name="LogoFooter" className="divLogo">
                <img src={logoPng} alt="LogoFoodLand" className="LogoFooter"/>
            </div>

            {/* -----------Linkedins y Menu--------------*/}

             <div name="Menu" className="MenuFooter">
                <div name="contact" className="contact">
                    <h2>Developed by:</h2>
                    <a href="/"  key="Linkeding2" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Bárbara Espinola</a>
                    <a href="/"  key="Linkeding3" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Mateo Mugnaini</a>
                    <a href="/"  key="Linkeding1" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Sofia Perone</a>
                    <a href="/"  key="Linkeding4" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Carlos Eduardo Palomo Serna</a>
                    <a href="/"  key="Linkeding5" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Gustavo Gomez Villafañe</a>
                    <a href="/"  key="Linkeding6" className="linksFooter"><img src={linked} alt="logoLink" className="Linke"/>Jeffer Camilo Romero</a>
                </div>
                <div name="Menupages" className="menuPages">
                <h2>Menu</h2>
                    <Link to="/" name=""  className="linksMenu">Home</Link>
                    <Link to="/allProducts" name=""  className="linksMenu">Products</Link>
                    <Link to="/" name=""  className="linksMenu">Contacs us</Link>
                    <Link to="/about" name=""   className="linksMenu">About</Link>
                </div>

            {/* -----------Form to Suscribe --------------*/}
                <div name="RegisterEmail">
                <h2>¡Follow us ♥ !"</h2>
                {/*<form onSubmit={handleSubmit}>
                    <form > 
                        <h2>Suscribe to Foodland ♥</h2>
                        <p>subscribe and know our offers</p>
                        {/* <input type="email" placeholder="Email" class="SuscribeEmail" value={suscribe.email}></input> */}
                        {/* <input type="email" placeholder="Email" className="SuscribeEmail"></input>
                        <button type="submit" className="SuscribeButton">Enter</button>
                    </form>  */}

                    <h3>¡Find us on our social networks!</h3>
                    <img name="iconFooterSocial" className="iconFooterSocial" alt="FBIcon" src="https://tinypic.host/images/2023/04/27/facebook.png"/>
                    <img name="iconFooterSocial" className="iconFooterSocial" alt="IGICon" src="https://tinypic.host/images/2023/04/27/instagram.png"/>
                    <img name="iconFooterSocial" className="iconFooterSocial" alt="WAICon" src="https://tinypic.host/images/2023/04/27/whatsapp.png"/>
                    <a href="https://www.soyhenry.com/"><img src="https://tinypic.host/images/2023/04/26/logoOG.png" name="LogoHenry" alt="LogoHenry" className="LogoHenry"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer