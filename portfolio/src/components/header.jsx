//import the nav componet 
import Nav from './navigation';
import '../CSS/header.css';
// Create a functional component called Header
function Header() {
    return (
        <header className='header'>
            <h1>Riley's Portfolio</h1>
            <Nav />
        </header>
    );
}

// Export the Header component
export default Header;