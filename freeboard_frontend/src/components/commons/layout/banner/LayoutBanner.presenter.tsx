import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, SliderItem } from "./LayoutBanner.styles";

export default function LayoutBannerUi() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderItem src="/images/banner01.jpg"></SliderItem>
        <SliderItem src="/images/banner02_1.jpg"></SliderItem>
        <SliderItem src="/images/banner03.jpg"></SliderItem>
        <SliderItem src="/images/banner05.jpg"></SliderItem>
        <SliderItem src="/images/banner06.jpg"></SliderItem>
        <SliderItem src="/images/banner07.jpg"></SliderItem>
      </Slider>
    </Wrapper>
  );
}
