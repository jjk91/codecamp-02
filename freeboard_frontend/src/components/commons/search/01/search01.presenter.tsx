import { SearchWrapper, InputSearch, Search } from "./search01.styles";

export default function SearchPageUi(props: any) {
  return (
    <>
      <SearchWrapper>
        <Search src="/images/ic-58-main-search-black.svg" />
        <InputSearch
          type="text"
          onChange={props.onChangeSearch}
          placeholder="제목을 검색해주세요."
        />
      </SearchWrapper>
    </>
  );
}
