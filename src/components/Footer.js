import React from 'react';
import '../styles/Footer.css'

class Footer extends React.Component{

    render(){
        return(            
          


<footer>

    <div class="box__money">
        <div className='test'>

        <ul className='money'>
            <li className='normal'><img src='../../image/visa.png'></img></li>
            <li className='normal'><img src='../../image/american-express.png'></img></li>
            <li className='crypto'><img src='../../image/bitcoin-cash.png'></img></li>
            <li className='crypto'><img src='../../image/ethereum.png'></img></li>
            <li className='crypto'><img src='../../image/bitcoin.png'></img></li>
            <li className='crypto'><img src='../../image/litecoin.png'></img></li>
            <li className='text'>And 50+ more</li>
        </ul>            
        </div>
    </div>
    <div class="box__socials">
        <ul className='socials'>
          <li><img src='../../image/facebook.png'></img></li>
          <li><img src='../../image/instagram.png'></img></li>
          <li><img src='../../image/gorjeo.png'></img></li>
          <li><img src='../../image/discord.png'></img></li>
        </ul>            
        <hr></hr>
    </div>
    
<div class="container__footer">
    <div class="box__footer">
        <div className='chick'>
            <h2>chicks gold</h2>
                <p>support@chiksgold.com</p>
        </div>
    </div>

    <div class="box__footer">
        <h2>Chicks Gold</h2>
        <p>Game</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Sitemap</p>
    </div>

    <div class="box__footer">
        <h2>Support</h2>
        <p>Contac Us</p>
        <p>FAQ</p>
    </div>


    <div class="box__footer">
        <h2>Legal</h2>
        <p>Pricay Policy</p>
        <p>Terms of service</p>
        <p>Copyright</p>              
    </div>

    <div class="box__footer">
        <h2>Redes Sociales</h2>
        <span> <img src='../../image/clasificacion.png'></img>TrusPilot Reviews</span>
    </div>

</div>

<div class="box__copyright">
    <p>© 2017-2020 ChicksGold.com. All Rights Reserved</p>
</div>
</footer>

           
        );
    }
}
export default Footer;