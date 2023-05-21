import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/firebase.config.js";
import { useState } from "react";
import Image from "next/image";
import ProductCardCategory from "./ProductCardCategory.jsx";


export default function LeftSectionCard({product}) {
  // Récuperation de l'image
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();
  const [url, setUrl] = useState();
  const image = []
  
  if (product.image) {
    getDownloadURL(
      ref(storage, `${process.env.NEXT_PUBLIC_FIREBASE_PATH}${product.image}`)
    ).then((url) => {
      setUrl(url)
    });
  } else {
    image.push(
      <div className="bg-lime-100 bg-neutral-400 self-center"></div>
    );
  }
 

  return (
    <div className="flex flex-col justify-between w-24 me-2" >
      <Image src={url} width={100} height={100} alt="product pictures" key="image1" priority/>
      <ProductCardCategory>{product.category.label}</ProductCardCategory>
    </div>
  );
}
