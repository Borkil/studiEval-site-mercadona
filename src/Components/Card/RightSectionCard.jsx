import PriceCard from "./PriceCard.jsx";
import PriceDealCard from "./PriceDealCard.jsx";
import FinishDateDealCard from "./FinishDateDealCard.jsx";

export default function RightSectionCard({ product }) {

  return (
    <div className=" w-full flex flex-col justify-between">
      <h3 className="text-xs font-semibold">{product.label}</h3>
      <p className="text-xs">{product.description}</p>
      {definePriceComponent(product)}
    </div>
  );
}

function definePriceComponent(product){
  const price = [];

  if (!product.isDeal) {
    price.push(
      <PriceCard price={product.price} key={product.id + product.price} />
    );
  } else {
    price.push([
      <FinishDateDealCard
        date={product.finishDealAt}
        key={product.id + product.FinishDealAt}
      />,
      <PriceDealCard
        price={product.price}
        percentage={product.percentage}
        priceDeal={product.priceDeal}
        key={product.id + product.priceDeal}
      />,
    ]);
  }

  return price
}
