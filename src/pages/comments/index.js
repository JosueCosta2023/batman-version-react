import React, { useEffect, useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './style.css'
import listCommentary from '../../assets/jsonArchives/commentarys.json'
import logoSemFundo from '../../assets/images/log.png'

function Comments() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(listCommentary.comentarios)
    }, [])
    return(
        <>
            <Header/>
            <section className="sectionComments">
                <div className="contentComments">
                    <div className="sideImage">
                        <img src={logoSemFundo}/>
                        <p className="text">Avaliações ⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="sideCommentary">
                        {
                            data.map((comentario, index) => (

                                <div className="cardCommentary" key={index} style={{backgroundColor: comentario.background}}>
                                    <p className="comentario">"{comentario.comentario}"</p>
                                    <div className="detalhesUsuario">
                                        <span >{comentario.nome_usuario}</span>
                                        <span >{comentario.data_comentario}</span>
                                    </div>
                                </div>    
                            ))

                        }
                    </div>
                </div>

                <div className="FormCommentsContent">
                    <form>
                        <div className="content-input">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome" id="nome"/>
                        </div>

                        <div className="content-input">
                            <label htmlFor="comentario">Comentario:</label>
                            <input type="text" name="comentario" id="comentario"/>
                        </div>

                        <button>Deixe seu Comentario</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Comments