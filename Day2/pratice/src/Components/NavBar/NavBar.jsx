import './NavBar.css'
function NavBar(){
    return(
        <>
            <header>
                <nav>
                    <div className="nav-container">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default NavBar;