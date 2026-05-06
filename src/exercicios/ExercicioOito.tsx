import { useState } from "react";
import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { PRODUCTS } from "../util/ProductList";
import CartProduct from "../components/CartProduct";
import type { Product } from "../util/ProductList";

function ExercicioOito() {

  const [products, setProducts] = useState<Array<Product>>(PRODUCTS)

  function increase(index: number) {
    setProducts((oldValue) => {
      return oldValue.map((product, i) => {
        if (i == index) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
    })
  }
  function decrease(index: number) {
    setProducts((oldValue) => {
      return oldValue.map((product, i) => {
        if (i == index && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 }
        }
        return product
      })
    })
  }
   function reset(index: number) {
    setProducts((oldValue) => {
      return oldValue.map((product, i) => {
        if (i == index && product.quantity > 0) {
          return { ...product, quantity: product.quantity = 0 }
        }
        return product
      })
    })
  }
  let totalPrice = 0
  products.forEach(product => {
    totalPrice += (product.price * product.quantity)
  });
  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 08 - Carrinho Componente Pai e Filhos"
        arquivoMarkdown="08-carrinho-componente-pai-filhos.md"
      />
      <p>Preço Total dos itens: {totalPrice} R$</p>
      <div className="flex flex-wrap m-5 justify-center gap-3">
        {
          products.map((product, index) => {
            return <CartProduct
              key={index}
              product={product}
              index={index}
              decreaseFunction={decrease}
              increaseFunction={increase}
              resetFunction={reset}
              subtotal={product.quantity * product.price}
            >

            </CartProduct>
          })
        }
      </div>
    </>
  );


}

export default ExercicioOito;
