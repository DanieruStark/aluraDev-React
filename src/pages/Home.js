import React from "react";
import Header from "./components/Header";
import MenuEsquerdo from "./components/menu-lateral-esquerdo";
import SubMain from "./components/sub-main";

function Home(){
    
    return(
        <>
            <Header/>
            <main>
                <MenuEsquerdo />
                <SubMain />
            </main>
        </>
    );
}

export default Home;