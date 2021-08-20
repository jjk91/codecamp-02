import { Menu, Dropdown, Button } from "antd";
import styled from "@emotion/styled";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";
import Dropdown01Ui from "./dropdown.presenter";
import { useState } from "react";

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
  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const [isOpen, setIsOpen] = useState(false);
  const menu = (
    <UserMenu>
      <Dropdown01Ui setIsOpen={setIsOpen} />
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
