const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#282c34' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
    );
};

export default Navbar;