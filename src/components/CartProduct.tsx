import type { Product } from "../util/ProductList";

type prop = {
    product: Product
    index: number
    decreaseFunction: (index: number) => void,
    increaseFunction: (index: number) => void,
    resetFunction: (index: number) => void,
    subtotal: number
}

export default function CartProduct({ product, index, decreaseFunction, increaseFunction,resetFunction, subtotal }: prop) {
    return (

        <div className="text-black bg-white border rounded-sm p-3 min-w-[300px] max-w-[300px] flex flex-col">


            <div className="flex-grow">
                <p className="font-bold">{product.name}</p>
                <p>{product.price} $</p>
                <p>{product.quantity} items</p>
                {product.quantity > 0 && <p>Total: {subtotal} R$</p>}
            </div>


            <div className="flex justify-between mt-4">
                <button
                    className="bg-blue-500 text-white p-1 rounded-sm flex-1 mr-1"
                    onClick={() => increaseFunction(index)}
                >
                    Aumentar
                </button>
                <button
                    className="bg-red-500 text-white p-1 rounded-sm flex-1 ml-1"
                    onClick={() => decreaseFunction(index)}
                >
                    Diminuir
                </button>
                {product.quantity > 0 &&
                    <button
                        className="bg-green-500 text-white p-1 rounded-sm flex-1 ml-1"
                        onClick={() => resetFunction(index)}
                    >
                        Remover
                    </button>
                }
            </div>
        </div>
    )
}