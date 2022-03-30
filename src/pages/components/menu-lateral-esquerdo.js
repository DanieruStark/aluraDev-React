import React from "react";
import '../../css/style.css';
import '../../css/menu-lateral-esquerdo.css';
import icon1 from '../../imagens/icon1.svg';
import icon4 from '../../imagens/icon4.svg';

function MenuEsquerdo() {
    return (
        <nav className="menu-lateral-esquerdo">
            <h2 className="menu-titulo">MENU</h2>
            <ul>
                <li className="li-lateral foco">
                    <a href="/" className="index">
                        <img src={icon1} alt="página atual" />
                        <p className="menu-link">Editor de Código</p>
                    </a>
                </li>
                <li className="li-lateral li-lateral-item">
                    <a href="/comunidade">
                        <img src={icon4} alt="ir para página comunidade" />
                        <p className="menu-link">Comunidade</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuEsquerdo;