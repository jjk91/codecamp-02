import { Wrapper, Img } from "./lazyload.styled";
import Lazyload from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <Wrapper>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/1.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/2.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/3.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/4.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/5.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/6.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/7.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/8.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/9.jpg" />
      </Lazyload>
      <Lazyload height={762} offsetVertical={300}>
        <Img src="/images/10.jpg" />
      </Lazyload>
    </Wrapper>
  );
}
