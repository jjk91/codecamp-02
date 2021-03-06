import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="정적 게시판!" />
        <meta property="og:description" content="이 주소는 정적 주소입니다." />
        <meta
          property="og:image"
          content="https://m.blog.naver.com/mkhjsk/220706329602?view=img_1"
        />
      </Head>
      <div>여기는 게시판 입니다.</div>
    </>
  );
}
