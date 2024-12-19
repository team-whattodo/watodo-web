import { useForm } from "react-hook-form";
import axios from "axios";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import * as S from "./style";
import DohyeonText from "../../components/DohyeonText";
import { COLOR } from "../../constants/colors";
import { SignupForm } from "../../types/reactHookFrom/signupForm";
import { EMAIL_REGEX } from "../../constants/regex";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<SignupForm>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      nickname: "",
      username: "",
      password: "",
      pat: "",
    },
  });

  const onSubmit = async (signupForm: SignupForm) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        signupForm
      );
      if (data) {
        localStorage.setItem("ACCESS_TOKEN", data.accessToken);
        localStorage.setItem("REFRESH_TOKEN", data.refreshToken);
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
  const nickname = watch("nickname", "");
  const username = watch("username", "");
  const pat = watch("pat", "");

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.SignupBox>
          <S.TitleWrap>
            <DohyeonText color={COLOR[500]} fontSize="3.2rem">
              회원가입
            </DohyeonText>
            <S.Logo src="/assets/WATODO.svg" />
          </S.TitleWrap>
          <StyledInput
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
            $fontSize="1.6rem"
            placeholder="example@watodo.kr"
          />
          <S.Warning>{errors.email && errors.email.message}</S.Warning>
          <StyledInput
            type="text"
            {...register("username", {
              required: "한 글자 이상 입력해주세요.",
            })}
            $fontSize="1.6rem"
            placeholder="watodo"
          />
          <S.Warning>{errors.username && errors.username.message}</S.Warning>
          <StyledInput
            type="text"
            {...register("nickname", {
              required: "한 글자 이상 입력해주세요.",
            })}
            $fontSize="1.6rem"
            placeholder="김투두"
          />
          <S.Warning>{errors.email && errors.email.message}</S.Warning>
          <StyledInput
            type="password"
            {...register("password", {
              required: true,
            })}
            $fontSize="1.6rem"
            placeholder="************"
          />
          <S.Warning>{errors.password && errors.password.message}</S.Warning>
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
        </S.SignupBox>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
