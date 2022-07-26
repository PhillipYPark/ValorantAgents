import logo from "../../Assets/val-logo.png";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <img
                src={logo}
                className="header--image"
                alt="valorant logo"
            />
            <h2 className="header--title">Valorant Agents</h2>
        </header>
    )
}

export default Header