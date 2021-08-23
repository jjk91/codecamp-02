import { Menu, Dropdown } from "antd";
import styled from "@emotion/styled";
import Dropdown01Ui from "./dropdown.presenter";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

// const LOGOUT_USER = gql`
//   mutation logoutUser {
//     logoutUser
//   }
// `;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;
const WrapperDropdown = styled(Dropdown)`
  background-color: transparent;
  border: none;
`;
const UserMenu = styled(Menu)`
  /* background-color: yellow; */
  width: 256px;
  /* height: 256px; */
  border-radius: 15px;
`;
const ButtonImg = styled.img``;

export default function Dropdown01() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // const onClickLogout = () =>{
  //   logoutUser({
  //     variables:
  //   })
  // }
  const [isOpen, setIsOpen] = useState(false);
  const menu = (
    <UserMenu>
      <Dropdown01Ui setIsOpen={setIsOpen} data={data} />
    </UserMenu>
  );

  return (
    <>
      <WrapperDropdown
        overlay={menu}
        placement="topRight"
        trigger={["click"]}
        arrow
        visible={isOpen}
      >
        <ButtonImg src="/images/Polygon 1.svg" onClick={onClickOpen} />
      </WrapperDropdown>
    </>
  );
}
