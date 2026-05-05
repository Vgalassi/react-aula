import { useEffect, useState } from "react";
import ExercicioPlaceholder from "../components/ExercicioPlaceholder";

function ExercicioSete() {
  const [search,setSearch] = useState<string>("")
  const [users,setUsers] = useState<Array<any>>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  async function getUsers(search: string) {
    setIsFetching(true)
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${search}`)
      const users = await response.json()
      setUsers(users.items)
      setIsFetching(false)
      setErrorMessage(undefined)
    }catch(error){
      setIsFetching(false)
      setUsers([])
      setErrorMessage("Ocorreu um erro ao buscar usuários")
    }
  }
  useEffect(() => {
    if (search.trim() == ""){
      return
    }
     const delayDebounce = setTimeout(() => {
        getUsers(search)
     }, 500);

     return () => clearTimeout(delayDebounce)
  },[search])

  function handleInput(event: React.ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)
  }

  function handleSearchButton(){
    getUsers(search)
  }
  
  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 07 - Busca de Usuarios com API"
        arquivoMarkdown="07-busca-de-usuarios-com-api.md"
      />
      <label htmlFor=""></label>
      <input value={search} onChange={handleInput} className="bg-white border-1 text-black" type="text" id="search" />
      <button onClick={handleSearchButton} className="p-1 m-1 bg-gray-400 text-black cursor-pointer rounded-sm">Enviar</button>

      <div className="flex justify-center bg-white text-black">
        {isFetching ? <p> Buscando usuários...</p>: <div>
          {users?.map((user) =>{
            return <p key={user.id}>{user.login}</p>
          })}
        </div>}
        {errorMessage && <p className="text-red-400"> {errorMessage}</p>}
      </div>
    </>
  );
}

export default ExercicioSete;
