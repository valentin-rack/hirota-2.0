import Card from "./Card";

function ProductCard({ product }) {

  const { name, description, type, price, image } = product

  return (
    <Card>
      
      <div className="flex justify-between gap-3">

        <div className="flex flex-col items-start">
          <h2 className="shop-subtitle mb-1">{name}</h2>
          <p className="text-neutral-400 leading-tight text-[11px] mb-0.5">{description}</p>
          <p className="text-neutral-400 leading-tight text-[11px] mb-2.5">{type}</p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={name}
          className="w-[100px] h-[100px] object-cover rounded opacity-75"
        />

      </div>

    </Card>
  )
}

export default ProductCard