import SideListPageUi from "./UsedMarketListSideList.presenter";

export default function SideListPage(props: any) {
  return (
    <>
      <SideListPageUi baskets={props.baskets} />
    </>
  );
}
