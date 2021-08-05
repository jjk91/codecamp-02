import Button01 from "../../commons/buttons/Button01";
import Input01 from "../../commons/inputs/Input01";

export default function QuizPageUi(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Input01
        type="text"
        inputName="작성자"
        register={{ ...props.register("writer") }}
        errorMessage={props.errors.writer?.message}
      />
      <Input01
        type="password"
        inputName="비밀번호"
        register={{ ...props.register("password") }}
        errorMessage={props.errors.password?.message}
      />
      <Input01
        type="text"
        inputName="제목"
        register={{ ...props.register("title") }}
        errorMessage={props.errors.title?.message}
      />
      <Input01
        type="text"
        inputName="내용"
        register={{ ...props.register("contents") }}
        errorMessage={props.errors.contents?.message}
      />
      <Button01
        buttonName="게시물 등록하기"
        type="submit"
        isActive={props.isActive}
      />
    </form>
  );
}
