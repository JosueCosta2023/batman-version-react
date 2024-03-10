import './style.css'
import batman from '../../assets/video/batman.mp4'
function PublishHome(){

    return(
        <section className="section-container">
            <div className="banner"></div>
            <div className="midia-container">      
                    <video className="video" controls autoplay>
                        <source src={batman}></source>
                    </video>

                    <div className="sinopse"> 
                        <h4>Sinopse</h4>
                        <p>"The Batman" é um filme de super-herói dirigido por Matt Reeves e estrelado por Robert Pattinson no papel principal como Bruce Wayne / Batman. O filme promete uma abordagem mais sombria e investigativa do icônico personagem da DC Comics.

                        Pelo que foi divulgado, "The Batman" se passa nos primeiros anos da carreira de Bruce Wayne como vigilante mascarado de Gotham City. O filme promete explorar suas habilidades como detetive e sua luta contra o crime organizado que assola a cidade.  </p>
                        <button>Comprar Ingresso Antecipado</button>
                    </div>
            </div>
        </section>
    )
}


export default PublishHome