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
      <ul>
        <li onClick={() => setFilter("all")}>all</li>
        {listCategory.map((category) => (
          <li
            className="bg-green-200"
            key={"non" + category.id}
            onClick={() => setFilter(category.label)}
          >
            {category.label}
          </li>
        ))}
      </ul>
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
