import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjetoForm.module.css"

function ProjetoForm({ handleSubmit, btnText, projectData }) {

    const [project, setProject] = useState(projectData || {});
    const [categoria, setCategoria] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:5000/categorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },  
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategoria(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, categoria:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="nome" 
                placeholder="Insira o nome do projeto" 
                handleOnchange={handleChange} 
                value={project.name} />

            <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="orcamento" 
                placeholder="Insira o orçamento total" 
                handleOnchange={handleChange} 
                value={project.budget} />

            <Select 
                name="categoria" 
                text="Selecione a categoria" 
                options={categoria} 
                handleOnchange={handleCategory} 
                value={project.categoria ? project.categoria.id : ''} />

            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjetoForm