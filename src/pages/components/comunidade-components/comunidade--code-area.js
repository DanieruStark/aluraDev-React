import React, { useRef, useEffect } from "react";
import imgPerfil from '../../../imagens/Photo.png';
import imgComents from '../../../imagens/coments.svg';
import imgLike from '../../../imagens/like.svg';
import hljs from "highlight.js";

function CodeArea({ banco }) {
    const dataBoxTexto = useRef(null);

    useEffect(() => {
        highlight()

    });

    const highlight = () => {
        hljs.highlightElement(dataBoxTexto.current);

    };

    return (
        <section className="campo-highlight-comunidade">
            <div className="box-texto--comunidade" style={{ background: `${banco.cor}` }} >
                <code className={`code-area--comunidade ${banco.linguagem}`} placeholder="editor de código" ref={dataBoxTexto}>
                    {banco.codeString}
                </code>
            </div>

            <h2 className="nomeProjeto">{banco.nomeProjeto}</h2>
            <h3 className="descricaoComunidade">{banco.descricao}</h3>
            <section className="interact-comunidade">
                <div className="interact-buttons">
                    <div className="coments-box">
                        <img src={imgComents} className='img-coments' alt="botão para ver comentários" />
                        <p className="coments">9</p>
                    </div>
                    <div className="like-box">
                        <img src={imgLike} className="img-like" alt="botão para curtir" />
                        <p className="like">9</p>
                    </div>
                </div>
                <div className="menu-login--comunidade">
                    <div className="perfil">
                        <img src={imgPerfil} className="img-perfil--comunidade" alt="foto harry" />
                        <p className="nome-perfil">@Harry</p>
                    </div>
                </div>
            </section>
        </section>
    );

}

export default CodeArea;