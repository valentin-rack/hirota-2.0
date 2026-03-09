import { useEffect, useState } from "react"
import ProductCard from "../../ui/ProductCard"

function EquipmentCardCont() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/hirota-2.0/api/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const equipmentProducts = products.filter(
    product => product.category === "equipment"
  )

  return (
    <div className="flex flex-col gap-2">

      {equipmentProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  )
}

export default EquipmentCardCont