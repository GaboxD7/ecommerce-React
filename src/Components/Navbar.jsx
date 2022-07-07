import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Categories from './Categories';

import'./Navbar.css';
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-drk">
            <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">Bike</Link>
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
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Categories/>
                    </ul>
                    </li>
                   
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
               
                </ul>
                <li> <Link to={'/cart'} ><CartWidget  /></Link></li>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success bg-dark" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;