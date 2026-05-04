import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { useState } from "react";

type task = {
  id: string,
  content: string,
  isConcluded: boolean,
}
export default function ExercicioQuatro() {
  const [input,setInput] = useState("")
  const [tasks,setTasks] = useState<Array<task>>([])
  
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setInput(event.target.value)
  }
  function handleAddButtonClick(){
    if(input == ""){
      return 
    }
    setTasks((oldTasks) => {
      const updatedTasks = [...oldTasks, {id: crypto.randomUUID(),content:input, isConcluded: false}]
      return updatedTasks
    })
    setInput("")
  }

  function handleRemoveButton( id: number){
    setTasks((oldTasks) => {
      const updatedTasks = oldTasks.filter((_, index) => index !== id);
      return updatedTasks
    })
  }

  function handleConcludedButton(id: number){
    setTasks((oldTasks) => {
      const updatedTasks = [...oldTasks]
      updatedTasks[id].isConcluded = true
      return updatedTasks
    })
  }
  return (
    <>
    <ExercicioPlaceholder
      titulo="Exercicio 04 - Lista de Tarefas Basica"
      arquivoMarkdown="04-lista-de-tarefas-basica.md"
    />
    <div className="flex justify-center flex-col items-center mb-20">
      <label htmlFor="task" >Nova tarefa</label>
      <input  className="bg-white text-black" id="task" name="task" type="text" onChange={handleInputChange} value={input} />
      <button className="bg-gray-600 cursor-pointer rounded-sm" onClick={handleAddButtonClick} >Adicionar</button>
      {tasks.length == 0 ? 
        <p> Você ainda não adicionou nenhuma tarefa</p>
      : <p>Você tem {tasks.length} tarefas:</p>
      }
      <table className="bg-white text-black">
        <tbody>
      {tasks.map((task,index) => {
        return (
        <tr className="p-10" key={task.id}>
          <td className={task.isConcluded ? "p-2 bg-green-400 text-white": "p-2" }>{task.content}</td>
          <td className="p-2 ">
              <button
              onClick={() =>{ handleConcludedButton(index)}}
              className="bg-green-400 text-white p-1 rounded-sm cursor-pointer
                hover:bg-gray-200 hover:text-green-400"
              >Concluir
             </button>
            </td>
             <td className="p-2">
            <button
            onClick={() =>{ handleRemoveButton(index)}}
             className="bg-blue-400 text-white p-1 rounded-sm cursor-pointer
              hover:bg-gray-200 hover:text-blue-400"
             >Remover
             </button>
          </td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </div>
    </>
  )
}


