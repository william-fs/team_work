import './index.scss';
import logo from "../../../public/logo.png";

export function Footer() {
    return(
        <div className="container">
            <div className="footer">
                <img src={logo} alt="TeamWork" />
                <button className='btn'>My Team</button>
            </div>
        </div>
    )
}