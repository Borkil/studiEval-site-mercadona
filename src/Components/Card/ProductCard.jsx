import LeftSectionCard from "./LeftSectionCard.jsx";
import RightSectionCard from "./RightSectionCard.jsx";

export default function ProductCard({ product }) {
  return (
    <div className=" rounded-lg p-2 flex justify-between border-solid border-2 ">
      <LeftSectionCard product={product} />
      <RightSectionCard product={product} />
    </div>
  );
}
