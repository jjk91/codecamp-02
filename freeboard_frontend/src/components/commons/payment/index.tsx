import { useContext, useState } from "react";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { GlobalContext } from "../../../../pages/_app";

const CREATE_POING_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      impUid
    }
  }
`;

// const FETCH_POING_TRANSACTIONS = gql`
//   query fetchPointTransactionsCountOfSelling {
//     fetchPointTransactionsCountOfSelling
//   }
// `;
const PointWrapper = styled.div`
  display: flex;
`;
const PointChargeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;
const RechargeModal = styled(Modal)``;
const RechargeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const PointImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
`;
const RechargeButton = styled.button`
  /* background-color: midnightblue; */
  /* color: white; */
  font-size: 16px;
  font-weight: bold;
  width: 384px;
  height: 52px;
`;

const PointSelect = styled.select`
  height: 40px;
  width: 384px;
  border: none;
  border-bottom: 2px solid black;
  margin-bottom: 40px;
`;

const PointText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const PointButton = styled.div`
  color: midnightblue;
  border: none;
`;

export default function Payment(props: any) {
  const { setUserInfo, userInfo } = useContext(GlobalContext);

  const [amount, setAmount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    props.setIsOpen(false);
  };
  // const { data } = useQuery(FETCH_POING_TRANSACTIONS);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POING_TRANSACTION_OF_LOADING
  );

  const onChangePay = (event: any) => {
    setAmount(event.target.value);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onClickPayment = () => {
    setIsModalVisible(false);
    // @ts-ignore
    // eslint-disable-next-line no-undef
    IMP.init("imp49910675"); // ???: imp00000000
    // @ts-ignore
    // eslint-disable-next-line no-undef
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "???????????????",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "?????????",
        buyer_tel: "010-4242-4242",
        buyer_addr: "??????????????? ????????? ?????????",
        buyer_postcode: "01181",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          setUserInfo({
            ...userInfo,
            amount: result.data?.createPointTransactionOfLoading.amount,
          });
          // console.log(result.data.createPointTransactionOfLoading.amount);
          Modal.success({ content: "????????????" });
          alert("????????????");
          // ?????? ?????? ??? ??????,
        } else {
          Modal.error({
            content: "????????? ?????????????????????. ?????? ??????: " + rsp.error_msg,
          });
          // ?????? ?????? ??? ??????,
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
      <PointWrapper>
        <PointChargeImg src="/images/charger.svg" />
        <PointButton onClick={showModal}>????????????</PointButton>
      </PointWrapper>
      <RechargeModal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <RechargeWrapper>
          <PointImg src="/images/0004.gif" />
          <PointText>{"???????????? ????????? ??????????????????!"}</PointText>
          <PointSelect id="coin" onChange={onChangePay}>
            <option value="" selected>
              ????????? ??????
            </option>
            <option value="100">100???</option>
            <option value="500">500???</option>
            <option value="1000">1,000???</option>
          </PointSelect>
          <RechargeButton onClick={onClickPayment}>????????????</RechargeButton>
        </RechargeWrapper>
      </RechargeModal>
    </>
  );
}
