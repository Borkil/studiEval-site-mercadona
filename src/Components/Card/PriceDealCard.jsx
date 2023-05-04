export default function PriceDealCard({price, percentage, priceDeal}){

  return(
    <div className="justify-self-end self-end flex">
      <p className='text-sm me-2 line-through self-center'>{price} €</p>
      <p className='text-sm me-2 self-center font-bold'>{percentage} %</p>
      <p className='text-red-500 font-bold text-m'>{priceDeal} €</p>
    </div>
  )
}