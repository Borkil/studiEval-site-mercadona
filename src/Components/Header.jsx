import Link from "next/link.js"


export default function Header(){
  return(
    <header  className="flex justify-center py-3 ">
      <nav>
        <h2 className='font-bold text-2xl text-green-600'>MERCADONA</h2>
        <ul>
          <li>
            <Link href='/' >Accueil</Link>
          </li>
          <li>
            <Link href='/catalogue' >Catalogue</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}