import axios from "axios";
import { useState } from "react";

export default function AxiosPage() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [dataid, setDataid] = useState("");
  // const [data3, setData3] = useState("")
  // const [data4, setData4] = useState("")

  async function handleClickDate() {
    const aaa = await axios.get("https://koreanjson.com/posts"); // API 주소 or API 이름 (rest-API)
    setDataid(aaa.data[5].id);
    setData(aaa.data[5].title);
    setData2(aaa.data[5].content);
    // console.log(aaa.data)
    // setDate(aaa.data)
    // setDate2(aaa.data)
  }

  // 화살표 함수
  // const handleClickDate2 = async () => {
  //     const bbb = await axios.get("https://koreanjson.com/posts/5")
  //     setData3(bbb.data.title)
  //     setData4(bbb.data.content)
  // }

  return (
    <>
      <div>{dataid}</div>
      <hr />
      <div>{data}</div>
      <hr />
      <div>{data2}</div>
      <hr />
      <button onClick={handleClickDate}>데이터 불러오기</button>
      <hr />
      {/* <div>게시물</div>
            <hr />
            <div>{date3}</div>
            <hr />
            <div>{date4}</div>
            <hr />
            <button onClick={handleClickDate2}>데이터 불러오기</button> */}
    </>
  );
}
