import { useEffect } from "react";
import { useState } from "react";
import SideListPageUi from "./UsedMarketListSideList.presenter";

export default function SideListPage() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const todayItems = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(todayItems);
  }, []);

  return (
    <>
      <SideListPageUi />
    </>
  );
}
