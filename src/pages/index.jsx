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

export default function Home({listProducts}) {
  const listDealProducts = []
  
  listProducts.forEach(product => {
    if(product.isDeal){
      listDealProducts.push(product)
    }
  })

  return (
    <main>
      <SectionShowCard products={listDealProducts}/>
    </main>
  )
}
 