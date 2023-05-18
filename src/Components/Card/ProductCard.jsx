import PriceCard from "./PriceCard.jsx"
import PriceDealCard from "./PriceDealCard.jsx"
import FinishDateDealCard from "./FinishDateDealCard.jsx"
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebase.config.js";
import Image from "next/image.js";
import { useState } from "react";

export default function ProductCard({product}){
  // Récuperation de l'image
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();
  const [url, setUrl] = useState()
  const image = []

  if(product.image){
    getDownloadURL(ref(storage, `${process.env.NEXT_PUBLIC_FIREBASE_PATH}${product.image}`))
      .then((url)=>{
          setUrl(url)
      })
  }else{
    image.push(<div className="bg-lime-100 w-24 h-24 bg-neutral-400 self-center"></div>)
  }
  
  if(url){
    image.push(<Image src={url} width={100} height={100} alt="product pictures" key='image1' priority/>)
  }
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
    <div className=" rounded-lg p-2 grid grid-flow-col-dense gap-2 border-solid border-2 ">
      <div className="flex flex-col justify-between">
        {image}
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