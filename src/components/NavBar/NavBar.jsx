import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navContainer">
                <span className="logo">siestabooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
export default NavBar
