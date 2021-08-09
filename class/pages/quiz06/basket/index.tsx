import { useEffect, useState } from "react";

export default function basketPage() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const basketInItem = JSON.parse(
      localStorage.getItem("boardBaskets") || "[]"
    );
    setBaskets(basketInItem);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {baskets.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}
    </>
  );
}
