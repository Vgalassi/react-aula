import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { useState } from "react";
const MAXIMO = 10
const MINIMO = 0
function ExercicioUm() {
  const [contador,setContador] = useState(0)

  function incrementar(){
    setContador((oldValue) => {
      if(oldValue >= MAXIMO){
        return oldValue
      }
      return oldValue+1
    })
  }
  function decrementar(){
    setContador((oldValue) => {
      if(oldValue <= MINIMO){
        return oldValue
      }
      return oldValue-1
    })
  }
  function resetar(){
    setContador(0)
  }
  let mensagemLimite = "Contador dentro do intervalo permitido"
  if(contador == MAXIMO){
    mensagemLimite = "Você esta no limite máximo"
  }
  if(contador == MINIMO){
    mensagemLimite = "Você esta no limite mínimo"
  }
  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 01 - Contador com Limites"
        arquivoMarkdown="01-contador-com-limites.md"
      />
      <div className="flex justify-center">
        <p>{mensagemLimite}</p>
        <p className="text-2xl">Pontos: {contador}</p>
        <div>
          <button onClick={incrementar}>Aumentar</button>
          <button onClick={decrementar}>Decrementar</button>
          <button onClick={resetar}>Resetar</button>
        </div>
      </div>
    </>
  );
}

export default ExercicioUm;
