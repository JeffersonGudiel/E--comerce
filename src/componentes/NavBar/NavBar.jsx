import CartWidget from "./CartWidget/CartWidget";
import './NavBar.scss';

const NavBar = () => {
    return (
        <header>
            <h1>Nike</h1>
            <nav>
                <ul>
                    <li>Mujer</li>
                    <li>Hombres</li>
                    <li>Ninios</li>
                    <li>Deportes</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar