import React from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PublishHome from '../../components/publishHome'
import Cards from '../../components/cards'



function Home() {
    return(
        <>
            <Header/>
            <PublishHome/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home