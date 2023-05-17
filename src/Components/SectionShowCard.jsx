import ProductCard from "./Card/ProductCard.jsx";

export default function SectionShowCard({ products, category }) {
  return (
    <section className="p-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.length < 1 ? (
        <p>La catégorie, <strong>{category}</strong>, ne contient pas de produit actuellement.</p>
      ) : (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </section>
  );
}
