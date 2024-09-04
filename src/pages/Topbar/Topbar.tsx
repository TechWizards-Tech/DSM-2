import './topbar.css'
import { Github } from 'lucide-react';
import logotextsemfundo from './../../assests/logotextsemfundo.png'

function Topbar() {

    return (

        <div className='topbar bg-green-800'>

            <div className='logotextsemfundo'>
                <img src={logotextsemfundo} alt="" />
            </div>

            <div className='links'>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Contato</a>
                <a href="https://github.com/TechWizards-Tech/DSM-2" target="_blank"><Github /></a>
            </div>
            
        </div>
    )
}

export default Topbar;