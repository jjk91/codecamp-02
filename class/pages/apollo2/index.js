import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
export default function Apollo2Page() {
  const [seller, setSeller] = useState();
  const [productname, setProductName] = useState();
  const [productnamedetail, setProductNameDetail] = useState();
  const [price, setPrice] = useState();

  const [product] = useMutation(
    gql`
      mutation zzz($newseller: String, $sellerproduct: CreateProductInput!) {
        createProduct(seller: $newseller, createProductInput: $sellerproduct) {
          _id
          message
        }
      }
    `
  );

  function onChangeSeller(event) {
    setSeller(event.target.value);
  }

  function onChangeProductName(event) {
    setProductName(event.target.value);
  }

  function onChangeProductNameDetail(event) {
    setProductNameDetail(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
  }

  function onClickSubmit() {
    // console.log(writer)
    // console.log(password)
    // console.log(title)
    // console.log(contents)
    product({
      variables: {
        newseller: seller,
        sellerproduct: {
          name: productname,
          detail: productnamedetail,
          price: Number(price),
        },
      },
    });
  }

  return (
    <>
      <div></div>
      판매자:
      <input type="text" onChange={onChangeSeller} />
      <br />
      상품명:
      <input type="text" onChange={onChangeProductName} />
      <br />
      상품 상세:
      <input type="text" onChange={onChangeProductNameDetail} />
      <br />
      가격:
      <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>
  );
}
