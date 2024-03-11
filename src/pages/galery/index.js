import React, { useEffect, useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import imageJson from '../../assets/jsonArchives/cardImages.json'
import './style.css'
import imagemOffline from '../../assets/images/defaultImage.jpg'


function Galery() {
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(imageJson.imagens)
    }, [])
    return(
        <>
            <Header/>
            <section className="section-imagens">
                <div className="content-imagens">
                    {data.map((personagem, index) => (
                        <div key={index} className="imagem-card">
                            {
                                personagem.url ? 
                                <img className="imagem" alt={personagem.name} title={personagem.descricao} src={personagem.url}/>          
                                :
                                <img className="imagem" alt="Imagem Não carregada" title="Carregamento de desta imagem falhou" src={imagemOffline} />
                            }
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Galery