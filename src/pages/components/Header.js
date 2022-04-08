import React, { useState } from "react";
import '../../css/reset.css';
import '../../css/style.css';
import '../../css/header.css';
import logo from '../../imagens/Logo-mobile.svg';
import imgPerfil from '../../imagens/Photo.png';
import lupa from '../../imagens/lupa.svg';
import xlupa from '../../imagens/x.svg';
import tablet from '../../imagens/menu-perfil-tablet.svg';
import icon1 from '../../imagens/icon1.svg';
import icon4 from '../../imagens/icon4.svg';


function Header(){

    const [click, setClick] = useState(false);
    const [clickLupa, setClickLupa] = useState(false);

    const handleClick = () =>{
        setClick(!click);
    }

    const handleClickLupa = () =>{
        setClickLupa(!clickLupa);
    }

    return(
        <header className="header">
            <div className="logo" id={clickLupa ? 'logo-active' : ''}>
                <img src={logo} className="logo-img" alt="logo alura"/>
            </div>
            <input className="caixa-texto-header input" id={clickLupa ? 'caixa-texto-header-active' : ''} type='text' placeholder="Busque por algo"/>
            <div className="menu-login">
                <div className="perfil">
                    <img src={imgPerfil} alt="foto harry"/>
                    <p className="nome-perfil"> Harry</p>
                </div>
            </div>
            <div className="lupa">
                <button className="btn-lupa" onClick={handleClickLupa}>
                    <img src={lupa} id="lupa" className={clickLupa ? 'active' : ''} alt="menu lupa"/>
                    <img src={xlupa} id="x-lupa" className={clickLupa ? '' : 'active'} alt="para fechar menu lupa"/>
                </button>
            </div>
            <nav className="menu-hamburger">
                <button className="btn-hamburguer" onClick={handleClick}>
                    <img src={tablet} id="hamburguer" className={click ? 'active' : ''} alt="menu hamburguer"/>
                    <img src={xlupa} id="img" className={click ? '' : 'active'} alt="para fechar menu lupa"/>
                </button>
                <ul className="menu-suspenso" id={click ? 'menu-suspenso-active' : ''}>
                    <li className="li-lateral foco">
                        <a className="index" href="/">
                            <img src={icon1} alt="página atual"/>
                            <p className="menu-link">Editor de Código</p>
                        </a>
                    </li>
                    <li className="li-lateral li-lateral-item">
                        <a href="/comunidade">
                            <img src={icon4} alt="ir para página comunidade"/>
                            <p className="menu-link">Comunidade</p>
                        </a>
                    </li>
                    <li className="li-perfil">
                        <div className="perfil">
                            <img src={imgPerfil} alt="foto harry"/>
                            <p className="nome-perfil"> Harry</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;