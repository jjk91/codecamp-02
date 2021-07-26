import styled from "@emotion/styled";

export const Wrapper = styled.div`
  .slick-slider {
    .slick-dots {
      bottom: 10px;
      display: flex !important;
      flex-direction: column;
      position: absolute;
      width: 20px;
      right: 20px;
      bottom: 35%;

      li {
        button {
        }
      }
    }
  }
`;

export const SliderItem = styled.img`
  width: 100%;
  height: 110%;
`;
