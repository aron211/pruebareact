import React from 'react';
import '../styles/Body.css'

class Body extends React.Component{

    render(){
        return(
            
            <body>

                <h3 className='tittle'>Condimentum consectectur</h3>

                <div className='barra'>
                    <select className='select_game'>
                        <option> Select a game</option>
                    </select>

                    <input type="text" className='search' placeholder="Search.."></input>
                    
                    <select className='select_price'>
                        <option>all</option>
                    </select>
                    
                    <select className='select_type'>
                        <option> all</option>
                    </select>
                </div>

                <div className='container'>
                    <div className='text-filter'>
                        <ul className='list-filter'>
                            <li> <p>Showing 20 from 125</p></li>
                            <li>
                                <select className='select-filter'>
                                    <option>Featured</option>
                                </select>
                            </li>
                        </ul>
                    </div>

                    <div className='container-card'>
                        <div className='card'>
                            <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                            <div className='stock'>In Stock</div>    
                            <img src='../../image/escudo.jpg'></img>
                            <h1>Tailored Jeans</h1>
                            <ul className='list-price'>
                                <li><p className='price'>$19.99</p></li>
                                <li><p className='price-touch'>$19.99</p></li>
                            </ul>
                            <p>Some text about the.</p>
                            <div className='buttons'>
                            <button className='btn-cancel'> CANCEL</button>
                            <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                            </div>
                        </div>

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/espada1.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>
        
                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/casco.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                    
                        </div>                        

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/armadura.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>
            
                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/esfera.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>
                
                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/espada1.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/armadura.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>        

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/casco.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>
                        
                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/espada1.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/casco.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>

                        <div className='card'>
                                    <p className='onsale'><b className='b'>•</b>  ON SALE</p>
                                    <div className='stock'>In Stock</div>    
                                    <img src='../../image/armadura1.jpg'></img>
                                    <h1>Tailored Jeans</h1>
                                    <ul className='list-price'>
                                        <li><p className='price'>$19.99</p></li>
                                        <li><p className='price-touch'>$19.99</p></li>
                                    </ul>
                                    <p>Some text about the.</p>
                                    <div className='buttons'>
                                    <button className='btn-cancel'> CANCEL</button>
                                    <button className='btn'>ADD <i className='fa fa-shopping-cart'></i></button>
                                    </div>
                        </div>
                    </div>                    
                    
                    <div className='center'>
                        <div className='pagination'>
                                <a href="#" className='next'>&laquo;</a>
                                <a href="#" className='active'>1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">...</a>
                                <a href="#">11</a>
                                <a href="#" className='next'>&raquo;</a>
                        </div>
                    </div>


                </div>                            
                
            </body>
            
        );
    }

}
export default Body;