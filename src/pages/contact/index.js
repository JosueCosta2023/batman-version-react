import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import './style.css'
import Fomulario from "../../components/form"

function Contact() {
    return (
        <>
            <Header />
            <section className="sectionContact">
                <div className="content-contact">
                    <div className="title">
                        <h2>Contato</h2>
                    </div>
                    <Fomulario/>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default Contact