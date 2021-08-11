import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function LodingPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangePay = (event) => {
    setAmount(event.target.value);
  };

  const onClickPayment = () => {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "사진",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          createPointTransactionOfLoading({
            variables: {},
          });
          router.push(`/quiz06/payment/complete`);
          alert("결제성공");

          // 결제 성공 시 로직,
        } else {
          alert("결제실패");
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <select id="coin" onChange={onChangePay}>
        <option value="" selected>
          금액을 선택하세요
        </option>
        <option value="100">100원</option>
        <option value="200">200원</option>
        <option value="300">300원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
