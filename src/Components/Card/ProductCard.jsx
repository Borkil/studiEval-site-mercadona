import PriceCard from "./PriceCard.jsx"
import PriceDealCard from "./PriceDealCard.jsx"
import FinishDateDealCard from "./FinishDateDealCard.jsx"

export default function ProductCard({product}){
  const price = []
  
  if(!product.isDeal){
    price.push(<PriceCard price={product.price} key={product.id + product.price}/>)
  }else{
    price.push([
      <FinishDateDealCard date={product.finishDealAt} key={product.id + product.FinishDealAt}/>,
      <PriceDealCard price={product.price} percentage={product.percentage} priceDeal={product.priceDeal} key={product.id + product.priceDeal}/>
    ])
  }

  return(
    <div className=" rounded-lg m-4 p-2 grid grid-flow-col-dense gap-2 max-w-sm shadow bg-neutral-100">
      <div className="flex flex-col justify-between">
        <div className="bg-lime-100 w-24 h-24 bg-neutral-400"></div>
        <div className="text-center bg-green-100 text-green-900 rounded p-1 mt-1 text-xs font-bold">{product.category.label}</div> 
      </div>
      <div className="grid justify-items-stretch col-span-4">
        <h3 className='text-xs font-semibold'>{product.label}</h3>
        <p className='text-xs'>{product.description}</p>
        {price}
      </div>

      
    </div>
  )
}