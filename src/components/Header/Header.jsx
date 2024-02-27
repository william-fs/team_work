import "./index.scss";
import imageBanner from "../../assets/images/image_by_arthur_hidden.png";
import logo from "../../../public/logo.png";
import { Navbar } from "../Navbar/Navbar";

export function Header() {
    return (
        <header className="header">
            <Navbar />
            <div className="container headerContent">
                <div className="infos">
                    <img src={logo} alt="TeamWork" />
                    <h2>Lorem ipsum dolor sit amet
                    Vel, molestias quis <span>commodi
                    libero culpa,</span> hi nobis unde</h2>
                    <p>similique officiis incidunt maxime cupiditate rerum itaque corporis ex nam inventore.</p>
                    <div className="btnBanner">
                        <a href="#professionals">
                            <button className="btnBN btnContact">Professionals</button>
                        </a>
                        <a href="#more">
                            <button className="btnBN btnMore">More</button>
                        </a>
                    </div>
                </div>
                <div className="imageBanner">
                    <img src={imageBanner} alt="image_by_arthur_hidden" />
                </div>
            </div>
        </header>
    )
}