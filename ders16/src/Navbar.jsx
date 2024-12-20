import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
            <Link to="/" style={{ margin: "0 15px" }}>Haqqında</Link>
            <Link to="/projects" style={{ margin: "0 15px" }}>İş nümunələri</Link>
            <Link to="/contact" style={{ margin: "0 15px" }}>Əlaqə məlumatları</Link>
        </nav>
    );
};

export default Navbar;