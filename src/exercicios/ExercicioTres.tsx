import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { useState } from "react";

type results = {
  message: string,
  valid: boolean
  imc: null | string,
  category: string | null,
  textColor?: string

}
function ExercicioTres() {

  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) {
    setter(event.target.value)
  }

  function handleClickReset() {
    setHeight("")
    setWeight("")
  }
  function calcResults(): results {
    if (height.length == 0 || weight.length == 0) {
      return { message: "insira os valores", valid: false, imc: null, category: null }
    }
    const weightValue = Number(weight)
    const heightValue = Number(height)
    if (isNaN(weightValue) || isNaN(heightValue)) {
      return { message: "valores não são numeros", valid: false, imc: null, category: null }
    }
    if (heightValue <= 0 || weightValue <= 0) {
      return { message: "valores nao podem ser menores ou igual a 0", valid: false, imc: null, category: null }
    }
    const imc = weightValue / (heightValue * heightValue)
    const result = {
      message: "imc calculado",
      valid: true,
      imc: imc.toFixed(2),
      category: "",
      textColor: ""
    }
    if (imc < 18.5) {
      result.category = "abaixo do peso"
      result.textColor = "text-gray-400"
      return result
    }
    if (imc < 25) {
      result.category = "peso normal"
      result.textColor = "text-white"
      return result
    }
    if (imc < 30) {
      
      result.category = "sobrepeso"
      result.textColor = "text-red-800"
      return result
    }
    result.category = "obeso"
    result.textColor = "text-red-600"
    return result
  }

  const results = calcResults()

  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 03 - Calculadora de IMC"
        arquivoMarkdown="03-calculadora-de-imc.md"
      />
      <button onClick={handleClickReset}>Limpar</button>
      <label htmlFor="weight">Peso (kg)</label>
      <input type="number" name="weight" value={weight} onChange={(e) => handleInputChange(e, setWeight)} />
      <label htmlFor="height">Altura (metros)</label>
      <input type="number" name="height" value={height} id="height" onChange={(e) => handleInputChange(e, setHeight)} />
      {results.valid ? <p className={results.textColor}> Imc calculado: {results.imc} Categoria: {results.category}</p>
        : <p>Nao foi possível calcular o imc: {results.message}</p>}
    </>
  );
}



export default ExercicioTres;
