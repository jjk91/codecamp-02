export default function BrowserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수; expires=2022-01-01";
    document.cookie = "bbb=훈이; expires=2022-01-01";
    document.cookie = "ccc=맹구; expires=2022-01-01";
  };

  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onLoadCookie = () => {
    // console.log(document.cookie);
    document.cookie = "aaa=철수";
    let loadcookie;
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("aaa=")) loadcookie = data;
    });
    console.log(loadcookie.split("=")[1]);
  };

  const onLoadLocalStorage = () => {
    const local = localStorage.getItem("bbb");
    console.log("local", local);
    // localStorage.setItem("bbb", "영희");
  };

  const onLoadSessionStorage = () => {
    // sessionStorage.setItem("ccc", "훈이");
    const session = sessionStorage.getItem("ccc");
    console.log("session", session);
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키에 저장</button>
      <button onClick={onSaveLocalStorage}>로컬스토리지에 저장</button>
      <button onClick={onSaveSessionStorage}>세션스토리지에 저장</button>
      =====================================================================
      <button onClick={onLoadCookie}>쿠키 불러오기 </button>
      <button onClick={onLoadLocalStorage}>로컬스토리지 불러오기</button>
      <button onClick={onLoadSessionStorage}>세션스토리지 불러오기</button>
    </>
  );
}
