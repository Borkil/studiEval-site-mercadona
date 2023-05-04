export default function FinishDateDealCard({date}){
  const dealDate = new Date(date).toLocaleDateString('fr-Fr',{dateStyle: 'medium'})
  
  return(
    <div className='text-sm justify-self-end self-end  '>Fin le : {dealDate}</div>
  )
}