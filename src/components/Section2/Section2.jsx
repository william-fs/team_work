import { Sec2infos } from "../Sec2infos/Sec2infos";
import { SwiperCards } from "../SwiperCards/SwiperCards";
import { More } from "../More/More";
import "./index.scss";
import { Footer } from "../Footer/Footer";

export function Section2() {
    return(
        <section className="section2">
            <Sec2infos />
            <div className="container">
            <hr />
            </div>
            <SwiperCards />
            <More />
            <Footer />
        </section>
    )
}