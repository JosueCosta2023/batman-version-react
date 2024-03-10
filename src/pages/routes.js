import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'
import Galery from './galery'
import Contact from './contact'
import Comments from './comments'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/galery' element={<Galery/>}/>
                <Route path='/comments' element={<Comments/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router