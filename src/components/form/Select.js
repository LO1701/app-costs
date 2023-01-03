import styles from "./Select.module.css"

export default function Select({text, name, options, handleOnchange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnchange} value={value || ''}>
                <option>Selecione a opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.nome}</option>
                ))}
            </select>
        </div>
    );
}