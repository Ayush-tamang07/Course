import './NavBar.css'
function NavBar(){
    return(
        <>
            <header>
                <nav>
                    <div className="nav-container">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default NavBar;