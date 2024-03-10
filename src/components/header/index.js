import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.css'

function Header() {
    return(
        <header className="header-container">
            <div className='content'>
                <div className='logo'>
                    <Link to={'/'}>
                    <img src={logo} alt='Batman'/>
                    </Link>
                </div>
                <nav className='menu-desktop'>
                    <ul>
                        <Link to={'/'}>
                            <li>Home</li>       
                        </Link>
                        <Link to={'/galery'}>
                            <li>Galery</li>       
                        </Link>
                        <Link to={'/comments'}>
                            <li>Commentary</li>       
                        </Link>
                        <Link to={'/contact'}>
                            <li>Contact</li>       
                        </Link>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header