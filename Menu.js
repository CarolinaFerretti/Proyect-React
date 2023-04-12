import React from 'react';
import Imagen1 from './img/img.1.jpg';
import Imagen2 from './img/img.2.jpg';
import Imagen4 from './img/img.4.jpg';
import Imagen5 from './img/img.5.jpg';
import Imagen6 from './img/img.6.jpg';
import Imagen7 from './img/img.7.jpg';
import Imagen8 from './img/img.8.jpg';
import Imagen9 from './img/img.9.jpg';
import Imagen10 from './img/img.10.jpg';
import Imagen11 from './img/img.11.jpg';
import Imagen12 from './img/img.12.jpg';
import Imagen13 from './img/img.13.jpg';
import Imagen14 from './img/img.14.jpg';
import Imagen15 from './img/img.15.jpg';
import Imagen16 from './img/img.16.jpg';


function Menu() {
    return (
        <div>
            <ul className='Navbar'>
                <li><button className='Butone'>My photos</button></li>
                <li><button className='Butone'>search</button></li>
                <li><button className='Butone'>Contact</button></li>
            </ul>

            <img className='Imagen1' src={Imagen1} />
            <img className='Imagen2' src={Imagen2} />
            <img className='Imagen4' src={Imagen4} />
            <img className='Imagen5' src={Imagen5} />
            <img className='Imagen6' src={Imagen6} />
            <img className='Imagen7' src={Imagen7} />
            <img className='Imagen8' src={Imagen8} />
            <img className='Imagen9' src={Imagen9} />
            <img className='Imagen10' src={Imagen10} />
            <img className='Imagen11' src={Imagen11} />
            <img className='Imagen12' src={Imagen12} />
            <img className='Imagen13' src={Imagen13} />
            <img className='Imagen14' src={Imagen14} />
            <img className='Imagen15' src={Imagen15} />
            <img className='Imagen16' src={Imagen16} />
        </div>
    );
}



export default Menu; 