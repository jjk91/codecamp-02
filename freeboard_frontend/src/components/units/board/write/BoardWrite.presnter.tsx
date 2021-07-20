import { IBoardWritePresenterProps } from "./BoardWrite.types";
import {
  Wrapper,
  Box,
  HeadTitle,
  Head1,
  HeadText,
  Head2,
  Body1,
  ContentsTitle,
  Body2,
  Body3,
  BodyWrapper,
  Body4,
  YoutubeUrl,
  Text,
  Input,
  Address,
  AddressDetail,
  Input2,
  PostInput,
  PostSerch,
  Footer1,
  Upload,
  Photo,
  Footer2,
  Input4,
  CheckBox,
  Footer3,
  Submit,
  Cancel,
  Edit,
} from "./BoardWrite.style";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function BoardWriteUi(props: IBoardWritePresenterProps) {
  return (
    <Wrapper>
      <Box>
        <Head1>
          {!props.isEdit && <HeadTitle>게시물 등록</HeadTitle>}
          {props.isEdit && <HeadTitle>게시물 수정</HeadTitle>}
        </Head1>

        <Head2>
          <HeadText>
            <Text>작성자*</Text>
            <Input
              name="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard?.writer || ""}
              readOnly={props.data?.fetchBoard?.writer}
            />
          </HeadText>
          <HeadText>
            <Text>비밀번호</Text>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            />
          </HeadText>
        </Head2>

        <Body1>
          <Text>제목</Text>
          <ContentsTitle
            name="title"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard?.title}
          />
        </Body1>

        <Body2>
          <Text>내용</Text>
          <Input2
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard?.contents}
          />
        </Body2>

        <Body3>
          <Text>주소</Text>

          <BodyWrapper>
            {props.isOpen && (
              <Modal title="주소검색" visible={true} onOk={props.onClickModal}>
                <DaumPostcode onComplete={props.onComplete} animation />
              </Modal>
            )}
            <PostInput
              type="text"
              placeholder="07250"
              value={props.zoneCode}
            ></PostInput>
            <PostSerch onClick={props.onClickModal}>우편번호 검색 </PostSerch>
          </BodyWrapper>

          <Address type="text" placeholder="" value={props.address}></Address>
          <AddressDetail type="text" placeholder=""></AddressDetail>
        </Body3>

        <Body4>
          <Text>유튜브</Text>
          <YoutubeUrl
            name="youtubeUrl"
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard?.youtubeUrl}
          />
        </Body4>

        <Footer1>
          <Text>사진 첨부</Text>
          <Upload>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
          </Upload>
        </Footer1>
        <Footer2>
          <Text>메인 설정</Text>
          <CheckBox>
            <Input4 type="radio" name="check"></Input4>
            <Text>유트브</Text>
            <Input4 type="radio" name="check"></Input4>
            <Text>사진</Text>
          </CheckBox>
        </Footer2>
        <Footer3>
          {/* <Modal title="등록 확인" onOk={}  ></Modal> */}
          {!props.isEdit && (
            <Submit disabled={props.disabled} onClick={props.onClickSubmit}>
              등록하기
            </Submit>
          )}
          {props.isEdit && (
            <Cancel onClick={props.onClickList}>취소하기</Cancel>
          )}
          {props.isEdit && (
            <Edit disabled={props.disabled} onClick={props.onClickUpdate}>
              수정하기
            </Edit>
          )}
        </Footer3>
      </Box>
    </Wrapper>
  );
}
