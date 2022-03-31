import React, { useState, useEffect } from "react";
import '../../css/dracula.css';
import '../../css/style.css';
import '../../css/editor.css';
import '../../css/menu-lateral-direito.css';
import '../../css/menu-lateral-esquerdo.css';
import hljs from 'highlight.js';
import Localbase from 'localbase';


function SubMain() {
    const [cor, setCor] = useState("#6BD1FF");
    const [linguagem, setLinguagem] = useState("javascript");
    const [codeString, setCodeString] = useState("");
    const [nomeProjeto, setNomeProjeto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState(0);

    const CorBorda = (e) => {
        setCor(e.target.value);
    }

    useEffect(() => {
        const boxTexto = document.querySelector("[data-box-texto]");
        boxTexto.style.background = cor;
    });

    const highlight = () => {
        const codeString = document.querySelector("[data-box-texto]").innerText;
        setCodeString(codeString);
        let codeArea = document.querySelector("[data-box-texto]").querySelector("code");

        codeArea.textContent = codeString;

        hljs.highlightElement(codeArea);

    }

    const handleLinguagem = (e) => {
        setLinguagem(`code-area ${e.target.value}`);
    };

    const handleNomeProjeto = (e) => {
        const nome = e.target.value;
        setNomeProjeto(nome);
    }
    const handleDescricao = (e) => {
        e.preventDefault();
        const descricao = e.target.value;
        setDescricao(descricao);
    }

    function pegaID(min, max) {
        min = Math.ceil(0);
        max = Math.floor(1000);
        return setId(Math.floor(Math.random() * (max - min)) + min);

    }

    const salvarDados = () => {
        let db = new Localbase('db');
        pegaID();
        db.collection('users').add({
            cor, linguagem, codeString, nomeProjeto, descricao, id
        });

    }

    return (
        <>
            <section className="campo-highlight">
                <div className="box-texto" data-box-texto>
                    <code className={`code-area ${linguagem}`} contentEditable="true" placeholder="editor de código">

                    </code>
                </div>
                <button className="sin-highlight" onClick={highlight}>Visualizar com o highlight</button>
            </section>
            <section className="menu-lateral-direito">
                <div className="seu-projeto">
                    <h2 className="menu-titulo">SEU PROJETO</h2>
                    <input type="text" className="input caixa-texto-nome-projeto" onChange={handleNomeProjeto} placeholder="Nome do seu projeto" />
                    <input type="text" className="input caixa-texto-descricao-projeto" onChange={handleDescricao} placeholder="Descrição do seu projeto" />
                </div>
                <div className="personalizacao">
                    <h2 className="menu-titulo">PERSONALIZAÇÃO</h2>
                    <div className="opcoes-personalizacao">
                        <select className="input tipo-codigo" onChange={handleLinguagem} data-tipo-codigo>
                            <option value="javascript">JavaScript</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                        </select>
                        <input type="color" className="color-picker" name="color-picker" value={cor} onChange={CorBorda} /><br />
                    </div>
                    <button className="botao-salvar" onClick={salvarDados}>Salvar projeto</button>
                </div>
            </section>
        </>
    );
}

export default SubMain;