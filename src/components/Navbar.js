import React from 'react';
import '../styles/Navbar.css'

class Navbar extends React.Component{

    render(){
        return(
            <div className="navbar">
                
                
                
                
                <ul>
                    <li className='logo'><a href=''>CHICKS GOLD</a></li>
                    <br></br>
                    <div className='left'>
                        <li ><a href=''>CURRENCY <i class="fa fa-angle-down"></i></a></li>
                        <li ><a href=''>ITEMS <i class="fa fa-angle-down"></i></a></li>
                        <li ><a href=''>ACOUNTS <i class="fa fa-angle-down"></i></a></li>
                        <li ><a href=''>SERVICE <i class="fa fa-angle-down"></i></a></li>
                        <li><a href=''>SWAP <i class="fa fa-angle-down"></i></a></li>
                        <li className='space'><a href=''>SELL <i class="fa fa-angle-down"></i></a></li>
                    </div>
                    <div className="right" >
                        <li><a href=''>USDT</a></li>
                        <li><a href=''>CART</a></li>
                        <li><button>  SIGN IN <i className='fa fa-user'></i></button></li>                    
                    </div>                    
                </ul>
            </div>
        );
    }

}
export default Navbar;