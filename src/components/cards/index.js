import './cards.css'
import Batman from '../../assets/images/batman.png'
import CatWoman from '../../assets/images/cat.png'
import GordonPolicy from '../../assets/images/gd.png'
import Pinguim from '../../assets/images/pinguin.png'


function Cards() {
    return (
        <section className="sectionCards-container">
            <div className="content-Cards">
                <h2>Elenco Destaque ⭐</h2>
                <div>
                    <div className="card">
                        <img className="actorImage" src={Batman}></img>
                        <span className="nome">Robert Pattinson</span>
                    </div>

                    <div className="card">
                        <img className="actorImage" src={GordonPolicy}></img>
                        <span className="nome">Jeffrey Wright</span>
                    </div>

                    <div className="card">
                        <img className="actorImage" src={CatWoman}></img>
                        <span className="nome">Zoe Kravitz</span>
                    </div>
                    <div className="card">
                        <img className="actorImage" src={Pinguim}></img>
                        <span className="nome">Colin Farrell</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards