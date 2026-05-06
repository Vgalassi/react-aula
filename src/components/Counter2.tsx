
import useContador from "../hooks/UseContador";
export default function Counter2(){

    const {value,increment,decrement,reset} = useContador()

    return(
        <div className="p-2 bg-black text-white ">
            <p>Contador 2</p>
            <p>{value}</p>
            <div>
                <button className="bg-blue-500 m-1 text-white rounded-sm p-1" onClick={increment}>Aumentar</button>
                <button className="bg-red-500 m-1 text-white rounded-sm p-1" onClick={decrement}>Diminuir</button>
                <button className="bg-green-500 m-1 text-white rounded-sm p-1" onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}
