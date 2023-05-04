import ProductCard from "./Card/ProductCard.jsx"

export default function SectionShowCard({products}){
  return(
    <section className="p-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product)=>(
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  )
}