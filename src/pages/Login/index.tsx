import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginForm } from "../../types/reactHookFrom/loginForm";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import * as S from "./style";
import DohyeonText from "../../components/DohyeonText";
import { COLOR } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<LoginForm>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (loginForm: LoginForm) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        loginForm
      );
      if (data) {
        localStorage.setItem("ACCESS_TOKEN", data.accessToken);
        localStorage.setItem("REFRESH_TOKEN", data.refreshToken);
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          setError("email", {
            type: "manual",
            message: "존재하지 않는 회원입니다.",
          });
        }
        if (status === 401) {
          setError("password", {
            type: "manual",
            message: "올바르지 않은 비밀번호입니다.",
          });
        }
      } else {
        setError("root", {
          type: "manual",
          message: "로그인 실패: 네트워크 에러",
        });
      }
    }
  };

  const email = watch("email", "");
  const password = watch("password", "");

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleWrap>
          <DohyeonText color={COLOR[500]} fontSize="3.2rem">
            로그인
          </DohyeonText>
          <S.Logo src="/assets/WATODO.svg" />
        </S.TitleWrap>
        <S.Label>이메일</S.Label>
        <StyledInput
          type="text"
          {...register("email", {
            required: true,
          })}
          $fontSize="1.6rem"
          placeholder="example@watodo.kr"
        />
        <S.Warning>{errors.email && errors.email.message}</S.Warning>
        <S.Label>비밀번호</S.Label>
        <StyledInput
          type="password"
          {...register("password", {
            required: true,
          })}
          $fontSize="1.6rem"
          placeholder="************"
        />
        <S.Warning>{errors.password && errors.password.message}</S.Warning>
        <S.Spacer />
        <S.Warning>{errors.root && errors.root.message}</S.Warning>
        <S.NavWrap>
          <S.Nav to="/signup">회원이 아니신가요?</S.Nav>
        </S.NavWrap>
        <StyledButton
          disabled={
            email.trim().length < 1 ||
            password.trim().length < 1 ||
            isSubmitting
          }
          type="SUBMIT"
        >
          로그인
        </StyledButton>
      </S.Form>
    </S.Container>
  );
};

export default Login;
