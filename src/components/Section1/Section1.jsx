import "./index.scss";
import logoSec1 from "../../assets/images/icon_sec1.png";

export function Section1() {
    return (
        <section id="about" className="section1">
            <div className="container sec1">
                <div className="imgSec1">
                    <img src={logoSec1} alt="" />
                </div>
                <div className="infoSec1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur urna, vestibulum sagittis enim. Morbi convallis feugiat ex, non feugiat turpis fringilla ac. Integer quis purus interdum, fringilla erat ac, hendrerit libero. Aenean ac magna ut magna ultrices tristique sit amet eget lacus.</p>
                    <p>Mauris dictum velit sed magna condimentum hendrerit. Morbi egestas diam eget metus ultricies, vitae tincidunt libero fermentum. Aliquam pretium, justo a accumsan sodales, lacus dolor malesuada elit, in dignissim turpis augue condimentum purus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur urna, vestibulum sagittis enim. Morbi convallis feugiat ex, non feugiat turpis fringilla ac. Integer quis purus interdum, fringilla erat ac, hendrerit libero. Aenean ac magna ut magna ultrices tristique sit amet eget lacus.</p>
                </div>
            </div>
        </section>
    )
}