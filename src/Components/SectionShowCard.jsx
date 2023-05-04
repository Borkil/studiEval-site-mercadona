import ProductCard from "./Card/ProductCard.jsx"

export default function SectionShowCard({products}){
  return(
    <section>
      {products.map((product)=>(
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  )
}