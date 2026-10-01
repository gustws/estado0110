import { useState } from "react";
import './App.scss';
import { Link } from 'react-router-dom';

export default function Home(){
    
    const[descricao1, setdescricao1] = useState("Texto Inicial");


    const[descricao2, setdescricao2] = useState("?");
    const[descricao3, setdescricao3] = useState("shh segredo");


    const[cor, setcor] = useState("black");
    const[var1, setvar1] = useState(false);


    function mudar(e){
        let novovalor = e.target.value;
        setdescricao1(novovalor)
    }



    function muda2(e){
        let novovalor2 = e.target.value;
        setdescricao2(novovalor2)
    }

    function mudartitulo2(e){
        setdescricao3(descricao2)
    }



    function mudarcor(e){
      let novacor = e.target.value;
      setcor(novacor)
    }

    function check(e){
        let novovalor3 = e.target.checked;
        setvar1(novovalor3)
    }


    return(

        <div className="Pagina-Inicial" style={{backgroundColor: cor}}>

            <h1>Página - Teste UseState</h1>
            <div className="funcao-texto">
                <input onChange={mudar}></input>
                <h2>{descricao1}</h2>
            </div>

            <div className="funcao-texto2">
              <input type="text" placeholder="digita ae"  onChange={muda2}></input>
              <button onClick={mudartitulo2}>muda texto</button>
              <h1>{descricao3}</h1>

            </div>



        <div className="trocacor">
              <h1>Cor:{cor} </h1>
              <input type="color" onChange={mudarcor}/>

        </div>
            <div className="checkboxdaquelejeito">
            <h1>Gosta de fazer programa???</h1>
            <input type="checkbox" onChange={check}></input>
            <h1>{var1 ? "Sim" : "Não"}</h1>
            </div>
        </div>

    );


}