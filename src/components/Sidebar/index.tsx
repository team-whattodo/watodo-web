import { useNavigate } from "react-router-dom";
import { COLOR } from "../../constants/colors";
import useGetUser from "../../hooks/user/useGetUser";
import { useUserStore } from "../../stores/user/useUserStore";
import JuaText from "../JuaText";
import StyledButton from "../StyledButton";
import * as S from "./style";
import { SlDrawer } from "react-icons/sl";

const Sidebar = () => {
  useGetUser();
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFERSH_TOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <S.Container>
      <S.Header>
        <SlDrawer size={24} />
        <S.Text>내 프로젝트</S.Text>
      </S.Header>
      <S.ProjectWrap>
        {user?.projects.map((item) => (
          <S.ProjectItem
            key={item.id}
            onClick={() => navigate(`/project/${item.id}`)}
          >
            <JuaText color={COLOR[500]} fontSize="2rem">
              {item.title}
            </JuaText>
            <S.ProjectDetail>{item.repository}</S.ProjectDetail>
          </S.ProjectItem>
        ))}
        {user && (
          <S.NewWrap>
            <S.New onClick={() => navigate("/make")}>프로젝트 만들기</S.New>
            <S.New>프로젝트 참가하기</S.New>
          </S.NewWrap>
        )}
      </S.ProjectWrap>
      <S.Footer>
        {user ? (
          <S.UserWrap>
            <S.UsernameWrap>
              <JuaText color={COLOR[500]} fontSize="2.4rem">
                {user?.nickname}
              </JuaText>
              <S.UserInfo>{user?.username}</S.UserInfo>
            </S.UsernameWrap>
            <S.UserInfo>{user?.email}</S.UserInfo>
          </S.UserWrap>
        ) : (
          <S.UserWrap>
            <S.UserInfo>로그인 후 이용해주세요.</S.UserInfo>
          </S.UserWrap>
        )}
        {user && (
          <>
            <S.ButtonWrap>
              <StyledButton
                styleType="CANCEL"
                disabled={false}
                onClick={() => {}}
                type="button"
              >
                정보수정
              </StyledButton>
            </S.ButtonWrap>
            <S.ButtonWrap>
              <StyledButton
                styleType="DELETE"
                disabled={false}
                onClick={logout}
                type="button"
              >
                로그아웃
              </StyledButton>
            </S.ButtonWrap>
          </>
        )}
      </S.Footer>
    </S.Container>
  );
};

export default Sidebar;
