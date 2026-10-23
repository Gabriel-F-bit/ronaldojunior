'use client';
import styles from "./produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos(){
    const [prods, setProds] = useState(null);
    const [categos, setCategos] = useState(null);

    useEffect(() => {
            const fetchProds = async () => {
                try{
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if(!response.ok){
                    throw new Error(`Erro ao buscar Produtos: ${response.statusText} `)
                }
                const data =  await response.json(); // converte os dados
                console.log(data)
                setProds(data)
            }catch(e){
                console.log(`${e.message}`)
            }

            }
            fetchProds()
        }, [])
        useEffect(() => {

        const fetchCats = async () => {
            try{
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
                if(!response.ok){
                    throw new Error(`Erro ao buscar categorias: ${response.statusText}`)
                }
                const data = await response.json();
                console.log(data)
                setCategos

            }catch(e){
                console.log(`${e.message}`)
            }

        } })
    return(

        <div className={styles.page}>
        <h1>Produtos</h1>
        {prods === null ? 
        <p> Carregando lista de Produtos...</p>:

        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>categoria</th>
                    <th>estoque</th>
                    <th>preço</th>
                </tr>
            </thead>
           <tbody>
            {prods.map((prod)=> 
           
            <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nome}</td>
                <td>{prod.descricao}</td>
                <td>{prod.categoria_id}</td>
                <td>{prod.quantidade_estoque}</td>
                <td>{prod.preco}</td>
            </tr>
            
               
            
            )}
        </tbody>
        </table>
        }
        

        
        </div>
    )
}


