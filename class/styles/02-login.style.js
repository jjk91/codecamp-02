import styled from "@emotion/styled";

// Wrapper 배경은 css 구간에 backgorund-img : url("해당위치")로 배치한다
export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  background-image: url("/images/img-bg.png");
  background-size: 100%;
  padding-right: 48px;
  padding-left: 51px;
  padding-bottom: 83px;
`;

export const Head = styled.div`
  /* height: 581px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Headgroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 224px;
  margin-bottom: 162px;
`;
// /images/ic-58-main-location-unselected@2x.png
export const Headicon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 27px;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  z-index: 1000;
`;

export const Shadow = styled.div`
  width: 63px;
  height: 17px;
  background-color: rgb(255, 255, 255, 0.4);
  border-radius: 8px 6px;
  /* position : relative; // 이것을 통하여 위치를 조정할수 있게 된다. */
  margin-top: -20px; //
`;

export const Headnotice = styled.div`
  font-size: 60px;
  color: #ffffff;
  /* margin-bottom: 150px; */
`;

export const Body = styled.div`
  height: 556px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
export const Bodygroup = styled.div`
  /* height: 273px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;

export const Email = styled.input`
  background-color: transparent;
  border: 0px transparent;
  width: 540px;
  height: 24px;
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;
export const Error = styled.div`
  margin-bottom: 50px;
  color: red;
`;

export const Hr1 = styled.hr`
  border: 1px solid rgb(255, 255, 255, 0.4);
  margin-top: 0px;
`;
export const Hr2 = styled.hr`
  border: 1px solid rgb(255, 255, 255, 0.4);
`;

export const Password = styled.input`
  background-color: transparent;
  border: 0px transparent;
  width: 540px;
  height: 24px;
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
  /* flex-direction: ; */
`;

export const Login = styled.div`
  height: 76px;
  width: 540px;
  border-radius: 38px;
  background-color: rgb(255, 255, 255, 0.2);
  font-size: 26px;
  text-align: center; // 텍스트 중앙으로 하려면 text-align: center
  line-height: 76px; // 사용하고 div 높이 에 맞추자
  color: #ffffff;
  margin-bottom: 44px;
`;

export const Find = styled.div`
  font-size: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 60px;
`;

export const Idfind = styled.div``;

export const Space = styled.div`
  width: 1px;
  height: 12px;
  background-color: #ffffff;
  /* display: flex;
    justify-content: ; */
`;

export const Passwordfind = styled.div``;

export const Join = styled.div``;

export const Kakao = styled.div`
  height: 76px;
  width: 540px;
  border: 1px solid #fae100;
  border-radius: 38px;
  background-color: transparent;
  font-size: 26px;
  text-align: center; // 텍스트 중앙으로 하려면 text-align: center
  line-height: 76px; // 사용하고 div 높이 에 맞추자
  color: #fae100;
`;
