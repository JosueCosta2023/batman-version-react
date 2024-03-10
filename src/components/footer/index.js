import MyLogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './style.css'
function Footer() {

    return (
        <footer className="footer-container">
            <div className='content'>
                <Link to={'/'}>
                    <img src={MyLogo} title="Ao clicar retorne a Home" />
                </Link>
                <p>Politicas e Privacidade</p>
                <span>Desenvolvido por: JOSUÉ OCANHA COSTA</span>
            </div>
        </footer>
    )
}

export default Footer