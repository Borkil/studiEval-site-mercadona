import SectionShowCard from "@/Components/SectionShowCard.jsx";
import { useState } from "react";

export default function Home({ listProducts, listCategory }) {
  const [filter, setFilter] = useState("all");
  const listDealProducts = [];

  listProducts.forEach((product) => {
    if (product.category.label === filter) {
      listDealProducts.push(product);
    } else if (filter === "all") {
      listDealProducts.push(product);
    }
  });

  return (
    <main>
      <SectionShowCard products={listDealProducts} category={filter} />
      <div className="relative">
        <ul className="fixed bottom-0 right-0 bg-green-200">
          <li onClick={() => setFilter("all")}>all</li>
          {listCategory.map((category) => (
            <li
              key={"non" + category.id}
              onClick={() => setFilter(category.label)}
            >
               {category.label}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res1 = await fetch(process.env.API_URL + "/product");
  const res2 = await fetch(process.env.API_URL + "/category");

  const listProducts = await res1.json();
  const listCategory = await res2.json();
  return {
    props: {
      listProducts,
      listCategory,
    },
  };
}
