import { useNavigate } from "react-router-dom";
import DohyeonText from "../../components/DohyeonText";
import StyledButton from "../../components/StyledButton";
import { COLOR } from "../../constants/colors";
import * as S from "./style";
import { useUserStore } from "../../stores/user/useUserStore";

const Intro = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  if(!user) {
    return (
      <S.Container>
        <DohyeonText color={COLOR[500]} fontSize="6rem">
          WATODO
        </DohyeonText>
        <S.Text>
          복잡한 개발 일정 관리를 간편하게, 왓투두
        </S.Text>
        <S.ButtonWrap>
          <S.ButtonBox>
            <StyledButton type="SUBMIT" disabled={false} onClick={() => navigate('/login')}>
              로그인
            </StyledButton>
          </S.ButtonBox>
          <S.ButtonBox>
            <StyledButton type="CANCEL" disabled={false} onClick={() => navigate('/signup')}>
              회원가입
            </StyledButton>
          </S.ButtonBox>
        </S.ButtonWrap>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <DohyeonText color={COLOR[500]} fontSize="6rem">
        WATODO
      </DohyeonText>
      <S.Text>
        <S.Accent>{user.nickname}</S.Accent>님의 팀프로젝트를 더 간편하게,
        왓투두입니다.
      </S.Text>
      <S.ButtonWrap>
        <S.ButtonBox>
          <StyledButton type="SUBMIT" disabled={false} onClick={() => navigate('/make')}>
            프로젝트 만들기
          </StyledButton>
        </S.ButtonBox>
        <S.ButtonBox>
          <StyledButton type="CANCEL" disabled={false} onClick={() => navigate('/join')}>
            프로젝트 참여하기
          </StyledButton>
        </S.ButtonBox>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default Intro;
