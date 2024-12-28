import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";

const MakeWbs = () => {
  

  return (
    <S.Container>
      <S.Label>WBS 제목</S.Label>
      <StyledInput
        type="text"
        placeholder="1글자 이상 입력해주세요."
        $fontSize="1.6rem"
      />
      <S.Warning>{""}</S.Warning>
      <S.Label>WBS 설명</S.Label>
      <S.Textarea placeholder="10글자 이상 입력해주세요." />
      <S.Warning>{""}</S.Warning>
      <StyledButton disabled={false} type="SUBMIT" onClick={() => {}}>
        생성하기
      </StyledButton>
      <StyledButton onClick={() => {}} disabled={false} type="CANCEL">
        취소하기
      </StyledButton>
    </S.Container>
  );
};

export default MakeWbs;
