import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { useState } from "react";
function ExercicioDois() {
  const [userName , setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [successMessage, setSuccesMessage] = useState("")

  function handleNameChange(event: any){
    setUserName(event.target.value)
  }
  function handleEmailChange(event: any){
    setEmail(event.target.value)
  }
  function handlePasswordChange(event: any){
    setPassword(event.target.value)
  }

  function handleSubmit(event: any){
    event.preventDefault()
    setUserName("")
    setEmail("")
    setPassword("")
    setSuccesMessage("Dados enviados com sucesso")
  }

  
  function validForm(){
    if(userName.length <= 0 && email.length <= 0 && password.length <= 0){
     return {message: "Preencha todos os dados", valid:false}
    }
    if(userName.length < 3){
      return {message: "Nome precisa ter mais do que 3 caracteres", valid: false}
    }
    if(!email.includes('@')){
      return {message: "Email precisa de @", valid: false}
    }
    if(password.length < 6){
      return {message: "Senha precisa ter 6 ou mais caracteres", valid: false}
    }
    
    return {message: "Os dados estão corretos, pode enviar!", valid: true}
  }
 
  const validation = validForm()

  
  return (
    <>
    <ExercicioPlaceholder
      titulo="Exercicio 02 - Formulario de Cadastro Simples"
      arquivoMarkdown="02-formulario-de-cadastro-simples.md"
    />
    <div className="bg-white text-black flex flex-col">
      <p>{successMessage}</p>
      <p>{validation.message}</p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome</label>
        <input  className="bg-gray "type="text" name="username" id="username" value={userName} onChange={handleNameChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
        <input className={validation.valid ?  "bg-blue-600 text-white" : undefined}  type="submit" value="enviar" disabled={!validation.valid}/>
     
    </form>
    </div>
    </>
  );
  
}

export default ExercicioDois;
