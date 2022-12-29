import styles from "./NovoProjeto.module.css"
import ProjetoForm from "../projeto/ProjetoForm"

function NovoProjeto(){
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm btnText="Criar projeto"/>
        </div>
    );
}

export default NovoProjeto;