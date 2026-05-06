import { useState } from "react";

export default function useContador(maxLimit:number | undefined = undefined, minLimit: number | undefined = undefined ){
    const [value,setValue] = useState<number>(0)
    
    function increment(){
        if(!maxLimit){
            setValue((oldValue) => oldValue + 1)
            return
        }
        setValue((oldValue) => {
            if(oldValue < maxLimit){
                return oldValue +1 
            }
            return oldValue
        })

    }
    function decrement(){
        if(!minLimit){
            setValue((oldValue) => oldValue -1 )
            return
        }
        setValue((oldValue) => {
            if(oldValue > minLimit){
                return oldValue -1 
            }
            return oldValue
        }
        )
    }
    function reset(){
        setValue(0)
    }

    return {
        value,
        increment,
        decrement,
        reset
    }
}