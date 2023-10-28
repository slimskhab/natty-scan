import React from 'react';
import "./NavigationBar.css"
import { useNavigate } from 'react-router-dom';

function NavigationBar(props) {
    const navigate=useNavigate();
    return (
        <nav className='navbar-style'>
<img src="/logo.png" style={{height:83,width:83,cursor:"pointer"}} onClick={()=>{
                navigate("/");
            }}></img>

<div className='d-flex text-white'>
    <ul className='header-bar'>
        <li className='nav-text-style' style={{marginRight:"67px"}} onClick={()=>{
                navigate("/");
            }}>Home</li>
        <li className='nav-text-style'style={{marginRight:"67px"}} onClick={()=>{
                navigate("/");
            }}>How It Works</li>
        <li className='nav-text-style' onClick={()=>{
                navigate("/");
            }}>Donations</li>
    </ul>
</div>
        </nav>
    );
}

export default NavigationBar;