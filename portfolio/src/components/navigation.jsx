// import link and useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom'
import '../CSS/navigation.css';
// Create a functional component called Nav
function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='bg-primary ms-auto navbar'>
            <li>
                <Link to='/' className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} text-white`}>
                    About Me
                </Link>
            </li>
            <li>
                <Link to='/portfolio' className={`${currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'} text-white`}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to='/contact' className={`${currentPage === '/contact' ? 'nav-link active' : 'nav-link'} text-white`}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to='/resume' className={`${currentPage === '/resume' ? 'nav-link active' : 'nav-link'} text-white`}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}

// Export the Nav component
export default Nav;