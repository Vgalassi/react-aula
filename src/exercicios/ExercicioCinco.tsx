import { useState } from "react";
import ExercicioPlaceholder from "../components/ExercicioPlaceholder";
import { PRODUCTS } from "../util/ProductList";


export default function ExercicioCinco() {

  const [search, setSearch] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [order,setOrder] = useState<string>("0")
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  function handSelectChange(event: React.ChangeEvent<HTMLSelectElement>){
    setCategory(event.target.value)
  }
  function handleCleanSearch(){
    setCategory("")
    setSearch("")
  }

  function handleOrderChange(event: React.ChangeEvent<HTMLSelectElement>){
    setOrder(event.target.value)
  }
  function filterProducts() {
    let filteredProducts = [...PRODUCTS]
    if (search !== "") {
      filteredProducts = filteredProducts.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase())
      })
    }
    if(category !== ""){
      filteredProducts = filteredProducts.filter((product) => {
        return product.category === category
      })
    }
    if(order === "0"){
      filteredProducts.sort((a,b) => a.price - b.price)
      return filteredProducts
    }
    filteredProducts.sort((a,b) => b.price - a.price)
    return filteredProducts
  }
  const products = filterProducts()

  return (
    <>
      <ExercicioPlaceholder
        titulo="Exercicio 05 - Filtro de Produtos"
        arquivoMarkdown="05-filtro-de-produtos.md"
      />
      <div className="bg-white text-black">
        <label htmlFor="search">Pesquise</label>
        <input value={search} type="text" id="search" onChange={handleSearchChange} />
        
        <select value={category} name="selecione categoria" id="" onChange={handSelectChange}>
          <option value="">Definir categoria</option>
          <option value="Carros">Carros</option>
          <option value="Eletrônicos">Eletronicos</option>
          <option value="Livros">Livros</option>
          <option value="Decoração">Decoração</option>
        </select>
        <select name="" id="" onChange={handleOrderChange}>
          <option value="0">Crescente</option>
          <option value="1">Decrescente</option>
        </select>
        <button onClick={handleCleanSearch}>Limpar pesquisa</button>
        <p>Foram encontrados {products.length} produtos
        </p>
        <div className="flex flex-wrap justify-center gap-4 p-5">
  
          {products.map((product, index) => (
            <div
              className="border-solid border p-4 min-w-[200px] flex-1 max-w-[300px]"
              key={index}
            >
              <p className="font-bold">{product.name}</p>
              <p>R$ {product.price}</p>
              <p className="text-gray-500 text-sm">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}


