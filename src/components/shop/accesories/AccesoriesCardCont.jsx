import { useEffect, useState } from "react"
import ProductCard from "../../ui/ProductCard"

function AccesoriesCardCont() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/hirota-2.0/api/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const accesoriesProducts = products.filter(product => product.category === "accesories")

  return (
    <div className="flex flex-col gap-2">

      {accesoriesProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  )
}

export default AccesoriesCardCont