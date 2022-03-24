import React, { useState, useEffect } from "react";
import '../../../css/dracula.css';
import '../../../css/style.css';
import '../../../css/editor-comunidade.css';
import '../../../css/menu-lateral-direito.css';
import '../../../css/menu-lateral-esquerdo.css';
import Localbase from "localbase";
import CodeArea from "./comunidade--code-area";

function Prototipo() {
    const [bancoDados, setBancoDados] = useState([]);

    useEffect(() => {
        let db = new Localbase('db');
        db.collection('users').get().then(users => {

            setBancoDados(users);

        });
    }, []);

    return (
        <div className="campo-boxes">
            {bancoDados.length > 0 && bancoDados.map((banco) => (
                <CodeArea
                    banco={banco}
                    key={banco.id}
                />))}
        </div>
    );
}

export default Prototipo;