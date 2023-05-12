import SectionShowCard from "@/Components/SectionShowCard.jsx"

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
 
  const res = await fetch(process.env.API_URL + '/product')
  const listProducts = await res.json()
  return {
    props: {
      listProducts,
    },
  };
}