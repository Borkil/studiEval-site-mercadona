import SectionShowCard from "@/components/SectionShowCard.jsx"

export default function Home({listProducts}) {
  // const listDealProducts = []
  
  // listProducts.forEach(product => {
  //   if(product.isDeal){
  //     listDealProducts.push(product)
  //   }
  // })
  console.log(listProducts)

  return (
    <main>
      <SectionShowCard products={listProducts}/>
    </main>
  )
}

export async function getStaticProps() {
  // const res = await fetch('http://api-mercadona.test/api/product')
  const res = await fetch('https://api-mercadona.herokuapp.com/api/product')
  const listProducts = await res.json()
  
  return {
    props: {
      listProducts,
    },
  };
}