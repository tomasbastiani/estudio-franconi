import { Route, Routes } from "react-router-dom"
import Areas from "../Components/Areas";
import Home from "../Components/Home";
import Contacto from "../Components/Contacto";
import Footer from "../Components/Footer";


function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/areas' element={<Areas />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/contact' element={<Footer />} />
        </Routes>
    )
}

export default Public