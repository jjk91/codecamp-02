import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUi() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ backgroundColor: "yellow", height: "300px" }}>
      <Slider {...settings}>
        <div>
          <h3 style={{ backgroundColor: "hotpink" }}>짱구</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "purple" }}>는</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "olive" }}>못말려</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "lightsalmon" }}>두구두구두구</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "moccasin" }}>두구두구두구</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "tomato", height: "200px" }}>꽝</h3>
        </div>
      </Slider>
    </div>
  );
}
