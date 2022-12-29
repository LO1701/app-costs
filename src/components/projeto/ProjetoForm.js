import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjetoForm.module.css"

export default function NovoProjeto({btnText}){

    const[categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categorias",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategoria(data)
        })
        .catch(err =>console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="nome" placeholder="Insira o nome do projeto" handleOnchange="" value=""/>
            
            <Input type="number" text="Orçamento do projeto" name="orcamento" placeholder="Insira o orçamento total" handleOnchange="" value=""/>
            
            <Select name="categoria" text="Selecione a categoria" options={categoria}/>
            
            <SubmitButton text={btnText} />
        </form>
    );
}