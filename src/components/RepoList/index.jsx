import { useEffect, useState } from "react"
import styles from './RepoList.module.css';


const RepoList = ({nomeUsuario}) => {
    const [repos,setRepois] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                console.log(resJson);
                setRepois(resJson);
            },3000);
           
        })
    }, [nomeUsuario])
    return (
        <div className={styles.container}>
                {estaCarregando ? (
                     <h1>Carregando...</h1>
                ) : (
               
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li key={repositorio} className={styles.listItem}>
                            <div className={styles.listItemName}>
                            <b  >Nome: </b> {repositorio.name }
                            </div>
                            <div className={styles.listItemLanguage}>
                            <b >Linguagem: </b> {repositorio.language }
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a><br/>
                        </li>
                    ))}
                    <li>Repositorio</li>
                </ul>
                )}
        </div>
    )
}

export default RepoList