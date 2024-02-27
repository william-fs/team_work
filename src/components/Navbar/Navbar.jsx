import "./index.scss";
import menuH from "../../../public/menuH.png";
import { useState } from "react";

export function Navbar() {

    const [closeMenu, setCloseMenu] = useState("closeMenu");

    function openClose() {
        closeMenu ? setCloseMenu("") : setCloseMenu("closeMenu");
    }

    return (
        <nav className="navBar">
            <div className="logos">
                <h3>TeamWork</h3>
                <img className="ocMenu" src={menuH} alt="Menu" onClick={openClose} />
            </div>
            <ul className={closeMenu}>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Jobs</a>
                </li>
                <li>
                    <a href="#">Professionals</a>
                </li>
                <li>
                    <a href="#">More</a>
                </li>
            </ul>
        </nav>
    )
}