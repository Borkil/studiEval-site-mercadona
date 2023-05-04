import SectionShowCard from "@/Components/SectionShowCard.jsx"


export async function getStaticProps() {
  const listProducts = [
    {
        "id": 11,
        "label": "Voluptatibus qui perspiciatis nihil.",
        "description": "Elle soutint un jour, lui expliquer un terme d'équitation qu'elle avait tort.",
        "price": 1498.38,
        "image": "/var/folders/mv/cgqwdcs948b9gwqtb8ktfr780000gn/T/a5858443cb3db81f94183260d9f4b328.png",
        "category": {
            "id": 3,
            "label": "Temporibus."
        },
        "finishDealAt": null,
        "percentage": null,
        "priceDeal": null,
        "isDeal": false,
        "isArchive": false,
        "createdAt": "2023-04-27T07:34:13+00:00",
        "updatedAt": "2023-04-27T07:34:13+00:00"
    },
    {
        "id": 12,
        "label": "Cum culpa officiis consequatur corrupti.",
        "description": "Puis, ne pensez-vous pas qu'il faudrait et quelles seraient les entrées. ",
        "price": 157.28,
        "image": "/var/folders/mv/cgqwdcs948b9gwqtb8ktfr780000gn/T/bae7b4a8955845d2cab26373039b6ffe.png",
        "category": {
            "id": 4,
            "label": "Itaque est."
        },
        "finishDealAt": null,
        "percentage": null,
        "priceDeal": null,
        "isDeal": false,
        "isArchive": false,
        "createdAt": "2023-04-27T07:34:13+00:00",
        "updatedAt": "2023-04-27T07:34:13+00:00"
    },
    {
        "id": 13,
        "label": "Qui corrupti earum ea nihil",
        "description": "Sans doute quelque bagatelle de ménage. Il fallut tirer la chose",
        "price": 1133.02,
        "image": "/var/folders/mv/cgqwdcs948b9gwqtb8ktfr780000gn/T/d3a769a12c0133c7ad529ab3507b88a4.png",
        "category": {
            "id": 3,
            "label": "Temporibus."
        },
        "finishDealAt": null,
        "percentage": null,
        "priceDeal": null,
        "isDeal": false,
        "isArchive": false,
        "createdAt": "2023-04-27T07:34:14+00:00",
        "updatedAt": "2023-04-27T07:34:14+00:00"
    },
    {
        "id": 14,
        "label": "Ex consequatur amet et.",
        "description": "Écoute, j'ai besoin de faire de petites collations,",
        "price": 242.9,
        "image": "/var/folders/mv/cgqwdcs948b9gwqtb8ktfr780000gn/T/272655a8aa765ca801ac1e163498040c.png",
        "category": {
            "id": 5,
            "label": "Debitis vel."
        },
        "finishDealAt": "2023-05-07T07:34:15+00:00",
        "percentage": 10,
        "priceDeal": 218.61,
        "isDeal": true,
        "isArchive": false,
        "createdAt": "2023-04-27T07:34:14+00:00",
        "updatedAt": "2023-04-27T07:34:14+00:00"
    }
  ];
  return {
    props: {
      listProducts,
    },
  };
}
export default function Home({listProducts}) {
  return (
    <main>
      <SectionShowCard products={listProducts}/>
    </main>
  )
}
 