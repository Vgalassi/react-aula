import { useEffect, useState } from "react";
import ExercicioPlaceholder from "../components/ExercicioPlaceholder";

function ExercicioSeis() {
  const [time, setTime] = useState<Date>(new Date())
  const [visibility, setVisibility] = useState<boolean>(true)
  const [format, setFormat] = useState<boolean>(true)
  function handleButtonClick(setter: React.Dispatch<React.SetStateAction<boolean>>) {
    setter((prop) => !prop)
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 06 - Relogio com useEffect"
        arquivoMarkdown="06-relogio-com-useeffect.md"
      />
      {visibility && (
          <h1 className="text-2xl font-bold">
            {format 
              ? time.toLocaleTimeString('pt-BR', { hour12: false }) 
              : time.toLocaleTimeString('pt-BR', { hour12: true })}
          </h1>
        )}
      <button onClick={() => handleButtonClick(setVisibility)} className="bg-white border-1 text-black m-2 cursor-pointer rounded-sm p-1">
        {visibility ? "Ocultar" : "Mostrar"}
      </button>
      
      {visibility && <button onClick={() => handleButtonClick(setFormat)} className="bg-white border-1 text-black m-2 cursor-pointer rounded-sm p-1">
        {format ? "Trocar para 12h" : "Trocar para 24h"}
      </button>}
      

    </>
  );

}

export default ExercicioSeis;
