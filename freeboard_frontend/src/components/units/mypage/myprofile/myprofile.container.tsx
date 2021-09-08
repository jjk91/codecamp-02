import { useMutation } from "@apollo/client";
import UserInfoPageUi from "./myprofile.presenter";
import { RESET_USER_PASSWORD } from "./myprofile.queries";

export default function UserInfoPage() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const onClickSubmit = async () => {
    await resetUserPassword();
  };

  return (
    <>
      <UserInfoPageUi onClickSubmit={onClickSubmit} />
    </>
  );
}
