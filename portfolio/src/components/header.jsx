//import the nav componet 
import Nav from './navigation';

// Create a functional component called Header
function Header() {
    return (
        <header className='bg-secondary text-start'>
            <h1>Riley's Portfolio</h1>
            <Nav />
        </header>
    );
}

// Export the Header component
export default Header;