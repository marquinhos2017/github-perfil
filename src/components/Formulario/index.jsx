import {useState,useEffect} from "react";

const Formulario = () => {
    let [materiaA,setMateriaA] = useState(0);
    let [materiaB,setMateriaB] = useState(0);
    let [materiaC,setMateriaC] = useState(0);
    let [nome,setNome] = useState('');

    useEffect(()=> {
        console.log("O estado mudou")
    })

    useEffect(()=> {
        console.log("O estado nome mudou")
    },[nome])

    useEffect(()=> {
        console.log("O componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    },[])

    useEffect(()=> {
        console.log("O estado Nota-> Materia A mudou para:  "+ materiaA )
    },[materiaA])

    const alteraNome = (evento) => {
        //console.log(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const rederizResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;

        console.log(media);

        if(media >= 7){
            return (
                <p>Ola {nome}, Voce foi aprovado</p>
            )
        }else{
            return (
                <p>Ola {nome}, Voce nao foi aprovado</p>
            )
        }
    }

    
    
    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                )
                )}
            </ul>
            <input type="text" onChange={alteraNome} placeholder="Seu Nome"/>
            <input onChange={evento=> setMateriaA(parseInt(evento.target.value))} type="number" placeholder="Nota materia A" />
            <input onChange={evento=> setMateriaB(parseInt(evento.target.value))} type="number" placeholder="Nota materia B" />
            <input onChange={evento=> setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota materia C" />
            {rederizResultado()}
            {materiaA}
            {materiaB}
            {materiaC}
        </form>

    )
}

export default Formulario