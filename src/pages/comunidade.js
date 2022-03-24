import React from "react";
import Header from './components/Header';
import MenuEsquerdo from './components/menu-lateral-esquerdo';
import ComunidadeMain from './components/comunidade-components/comunidade-main';
import '../css/style.css';
function comunidade() {

    return (
        <>
            <Header />
            <main className="comunidade">
                <MenuEsquerdo />
                <ComunidadeMain />
            </main>
        </>
    );
}

export default comunidade;