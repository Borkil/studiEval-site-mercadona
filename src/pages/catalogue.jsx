import SectionShowCard from "@/Components/SectionShowCard.jsx"


export async function getStaticProps() {
  const res = await fetch('http://api-mercadona.test/api/product')
  const listProducts = await res.json()
  
  return {
    props: {
      listProducts,
    },
  };
}

export default function Catalogue({listProducts}) {
  return (
    <main>
      <SectionShowCard products={listProducts}/>
    </main>
  )
}