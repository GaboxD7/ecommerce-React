import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';

import'./Navbar.css';
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to={'/'} className="navbar-brand"><img src="../../imagenes/logo-bike.png" height="80px" width="140px" alt="" /></Link>
                {/* <a className= href="#!"></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><Link to={'/'} className="dropdown-item nav-item nav-link">INICIO</Link></li>
                  
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#!">Link</a>
                    </li> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                        CATEGORIA
                    </a>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <Categories/>
                    </ul>
                    </li>

               
                </ul>
                <li className='cart text-list'> <Link className='barra-link-off' to={'/cart'} ><CartWidget  /></Link></li>

                </div>
            </div>
            </nav>
    )
}

export default Navbar;