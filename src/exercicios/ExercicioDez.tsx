import {  useReducer, useState } from "react";
import ExercicioPlaceholder from "../components/ExercicioPlaceholder";

type tasks = {
  id: string,
  name: string,
  isConcluded: boolean
}

type taskAction = 
  | {type: "create", name: string}
  | {type: "conclude", id: string}
  | {type: "remove", id: string}


function ExercicioDez() {

  function taskReducer(state: Array<tasks>,action: taskAction ){
    switch(action.type){
      case "create":
        if(action.name.trim() === ""){
          return state
        }
        return [
          ...state,
          {id: crypto.randomUUID(), name: action.name, isConcluded: false}
        ]
      case "conclude":
        const updatedConcludedTasks = [...state]
        return updatedConcludedTasks.map((task)=> {
          if(task.id === action.id){
            return {...task, isConcluded: true}
          }
          return task
        })
        return updatedConcludedTasks
      case "remove":
        const updatedTasks = state.filter((task)=> task.id !== action.id)
        return updatedTasks

    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setCreateInputValue(event.target.value)
  }

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>){
    setFilterValue(event.target.value)
  }

  const [taskState,taskDispatch] = useReducer(taskReducer,[])
  const [createInputValue,setCreateInputValue] = useState("")
  const [filterValue,setFilterValue] = useState("all")

  const concludedTasks = taskState.filter((task) => task.isConcluded)
  let tasks = taskState
  if(filterValue == "concluded"){
    tasks = concludedTasks
  }else{
    if(filterValue == "notConcluded"){
      tasks = taskState.filter((task) => !task.isConcluded )
    }
  }
  return (
    <>
    <ExercicioPlaceholder
      titulo="Exercicio 10 - Gerenciador de Tarefas com useReducer"
      arquivoMarkdown="10-gerenciador-de-tarefas-com-usereducer.md"
    />
    <div className="mb-2 ">
      <input onChange={handleInputChange} value={createInputValue} className="bg-white m-1 text-black" type="text rounded-sm" />
      <button
        onClick={() => {taskDispatch({type: "create", name: createInputValue})}}
       className="bg-blue-600 text-white rounded-sm cursor-pointer p-1">
        Criar tarefa
       </button>
       <select className="bg-white text-black" name="filtros" id="" value={filterValue} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="notConcluded">Não concluidos</option>
          <option value="concluded">Concluídos</option>
       </select>
    </div>
    { tasks.length > 0 ?
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-auto max-w-2xl">
      <p>Você tem {taskState.length} tarefas!</p>
      <p>Você concluiu {concludedTasks.length} tarefas!</p>
      
      
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tarefa</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Ações</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {tasks.map((task) => (
        <tr key={task.id} className="hover:bg-gray-50 transition-colors">
          <td className={`px-6 py-4 ${task.isConcluded ? "line-through text-gray-400 opacity-70" : "text-gray-700"}`}>
            <div className="flex items-center gap-2">
              {task.isConcluded && <span className="text-green-500">✓</span>}
              {task.name}
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              {!task.isConcluded && (
                <button 
                  className="px-3 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-md text-xs font-semibold transition cursor-pointer"
                  onClick={() => taskDispatch({type: "conclude", id: task.id})}
                >
                  Concluir
                </button>
              )}
              <button 
                className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-md text-xs font-semibold transition cursor-pointer"
                onClick={() => taskDispatch({type: "remove", id: task.id})}
              >
                Remover
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    : <p>Sem tarefas</p>}
    </>
  );

}

export default ExercicioDez;
