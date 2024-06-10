
import logo from '../images/logo.png';
import '../styles/layout.css';

// navigation bar in the header for all pages
const Layout = ({ children }) => {

    return (
        <div className='container'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand me-0" href="/"><img className="logo w-50" src={logo} alt="logo"/></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 d-flex justify-content-center">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">FAQs</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Blogs</a>
                            </li>
                        </ul>
                    </div>

                    <button className="btn download my-2 my-sm-0" type="submit">Download App</button>

                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default Layout;

