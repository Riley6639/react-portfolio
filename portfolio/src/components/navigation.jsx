// import link and useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom'

// Create a functional component called Nav
function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='bg-primary ms-auto'>
            <li>
                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li>
                <Link to='/portfolio' className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to='/contact' className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to='/resume' className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}

// Export the Nav component
export default Nav;