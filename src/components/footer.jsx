// function to return the footer component
import '../CSS/footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p>&copy; 2021 Riley</p>
            <a
            className='footer-link' 
            href="https://github.com/Riley6639">
            Github</a>
            <a
            className='footer-link'
            href="https://www.linkedin.com/in/riley-mecham-9a0241198/">
            Linkedin</a>
        </footer>
    );
}

// Export the Footer component
export default Footer;