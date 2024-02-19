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
                    <a href="#">item1</a>
                </li>
                <li>
                    <a href="#">item2</a>
                </li>
                <li>
                    <a href="#">item3</a>
                </li>
                <li>
                    <a href="#">item4</a>
                </li>
            </ul>
        </nav>
    )
}