import styles from "./NovoProjeto.module.css"
import ProjetoForm from "../projeto/ProjetoForm"
import { useNavigate } from "react-router-dom";

function NovoProjeto(){
    
    const history = useNavigate();

    function createPost(projeto){
        projeto.cost = 0;
        projeto.services = [];

        fetch('http://localhost:5000/projeto', {
            method: 'POST',
            headers: {
                'Content-type': 'aplication/json',
            },
            body: JSON.stringify(projeto),
        }).then((resp) => resp.json())
        .then((data) => {
            history('/projetos', {message: 'Projeto criado com sucesso'})
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    );
}

export default NovoProjeto;