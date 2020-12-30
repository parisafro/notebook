import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={HeadersStyle}>
            <h1>TODO APP</h1>
            <Link style={linkStyle} to="/">Home</Link>|
            <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}

const HeadersStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkStyle={
    color:'white',
    padding:'10px',
    textDecoration:'none'
}
export default Header;


