import Link from "next/link.js"


export default function Header(){
  return(
    <header  className="flex justify-between p-3">
      <h2 className='font-bold text-xl text-green-600'>MERCADONA</h2>
      <nav className="w-2/4">
        <ul className="flex justify-end">
          <li className="ms-4">
            <Link href='/' >Accueil</Link>
          </li>
          <li className="ms-4">
            <Link href='/catalogue' >Catalogue</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}