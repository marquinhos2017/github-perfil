import { useState } from "react";

import Perfil_2 from "./components/Perfil/index_2";
import RepoList from "./components/RepoList"


function App() {
  const [formulariostaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");
  

  return (
   <>
   <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
 
   

   {nomeUsuario.length > 4 && (
    <>
      <Perfil_2 nomeUsuario={nomeUsuario} />

<RepoList nomeUsuario={nomeUsuario}/>

    </>
   )}
   
   
   
    
   </>
  )
}

export default App
