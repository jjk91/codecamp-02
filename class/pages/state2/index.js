export default function State2Page() {
  // 함수형, jsx
  let count = 7;

  function 함수() {
    count = count + 1;
    document.getElementById("aaa").innerText = count;
    // alert(count)
    // alert("클릭하셨네요")
  }

  return (
    <>
      <div id="aaa">{count}</div>
      <button onClick={함수}>+1</button>
    </>
  );
}
