import "./index.scss";
import logoSec1 from "../../assets/images/icon_sec1.png";

export function Section1() {
    return (
        <section className="section1">
            <div className="container sec1">
                <div className="imgSec1">
                    <img src={logoSec1} alt="" />
                </div>
                <div className="infoSec1">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis omnis facere non quae est eveniet, cupiditate doloribus voluptate, possimus, iusto iure corrupti maxime fugit! Tempore quis nesciunt tempora est ipsa!</p>
                </div>
            </div>
        </section>
    )
}