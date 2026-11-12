'use client';
import { useState } from "react";

export default function NovoProjeto() {

    const[nome, setNome] = useState();
    const[preco, setPreco] = useState();

    const enviar = () => {
        e.preventDefault();

        const precoNumber = Number(preco);
        
    }
    
    return (
        <div>
            <h1>Cadastrar produtos</h1>
            <form method="POST" action="/enviarDados">
                <fieldset>
                    <label for="Nome">Nome:</label>
                    <input type="text" id="Nome" name="Nome" placeholder="Digite seu nome seu trem" required value={nome} 
                    onChange={(e) => setNome(e.target.value)}/>

                    <label for="preco">Preco</label>
                    <input type="number" id="preco" placeholder="R$ 00,00" required  value={preco}
                    onChange={(e)  => setPreco(e.target.value)}/>

                    <button type="submit">Via</button>
                    <button type="reset">reseta</button>
                </fieldset>
            </form>
        </div>
    )
}