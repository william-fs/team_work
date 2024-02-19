import "./index.scss";
import imageBanner from "../../assets/images/image_by_arthur_hidden.png";

export function Header() {
    return (
        <header className="header">
            <div className="infos">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, molestias quis commodi libero culpa, hic ut nobis unde error similique officiis incidunt maxime cupiditate rerum itaque corporis ex nam inventore.</p>
            </div>
            <div className="imageBanner">
                <img src={imageBanner} alt="image_by_arthur_hidden" />
            </div>
        </header>
    )
}