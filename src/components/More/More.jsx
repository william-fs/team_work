import './index.scss';
import morePerson from "../../assets/images/image_by_kamran-aydinov.png"

export function More() {
    return(
        <div className="more">
            <div className="container moreContent">
                <img className='moreImg' src={morePerson} alt="" />
                <div className="moreInfo">
                    <h3>More Info</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptas corrupti accusantium nesciunt dolores quis repellendus! Explicabo aliquid saepe culpa. Eligendi explicabo beatae placeat dolorum vero hic fugit quasi ut.</p>
                    <button className='btn'>Infos</button>
                </div>
            </div>
        </div>
    )
}