import { useForm } from "react-hook-form";
import axios from "axios";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import * as S from "./style";
import DohyeonText from "../../components/DohyeonText";
import { COLOR } from "../../constants/colors";
import { SignupForm } from "../../types/reactHookFrom/signupForm";
import { EMAIL_REGEX, PASSWORD_REGEX, PAT_REGEX } from "../../constants/regex";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const onSubmit = async (signupForm: SignupForm) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        signupForm
      );
      navigate('/login');
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        if (data.message === "PAT is already in use") {
          setError("pat", {
            type: "manual",
            message: "이미 사용중인 PAT 입니다.",
          });
        }
        if (data.message === "Email is already in use") {
          setError("email", {
            type: "manual",
            message: "이미 사용중인 이메일 입니다.",
          });
        }
        if (data.message === "Username is already in use") {
          setError("username", {
            type: "manual",
            message: "이미 사용중인 아이디 입니다.",
          });
        }
      } else {
        setError("root", {
          type: "manual",
          message: "회원가입 실패: 네트워크 에러",
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
          <S.Label>이메일</S.Label>
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
          <S.Label>유저정보</S.Label>
          <S.Row>
            <S.HalfInput
              type="text"
              {...register("username", {
                minLength: {
                  value: 1,
                  message: "한 글자 이상 입력해주세요.",
                },
              })}
              $fontSize="1.6rem"
              placeholder="아이디"
            />

            <S.HalfInput
              type="text"
              {...register("nickname", {
                minLength: {
                  value: 1,
                  message: "한 글자 이상 입력해주세요.",
                },
              })}
              $fontSize="1.6rem"
              placeholder="닉네임"
            />
          </S.Row>
          <S.Row>
            <S.HalfWarning>
              {errors.username && errors.username.message}
            </S.HalfWarning>
            <S.HalfWarning>
              {errors.nickname && errors.nickname.message}
            </S.HalfWarning>
          </S.Row>
          <S.Label>비밀번호 & PAT</S.Label>
          <StyledInput
            type="password"
            {...register("password", {
              pattern: {
                value: PASSWORD_REGEX,
                message: "영문, 숫자, 특수문자 조합 8자 이상 입력해주세요.",
              },
              required: true,
            })}
            $fontSize="1.6rem"
            placeholder="************"
          />
          <S.Warning>{errors.password && errors.password.message}</S.Warning>
          <StyledInput
            type="password"
            {...register("pat", {
              required: true,
              pattern: {
                value: PAT_REGEX,
                message: "올바르지 않은 토큰 형식 입니다.",
              },
            })}
            $fontSize="1.6rem"
            placeholder="************"
          />
          <S.Warning>{errors.pat && errors.pat.message}</S.Warning>
          <S.Spacer />
          <S.Warning>{errors.root && errors.root.message}</S.Warning>
          <S.NavWrap>
            <S.Nav to="/login">회원이신가요?</S.Nav>
          </S.NavWrap>
          <StyledButton
            disabled={
              email.trim().length < 1 ||
              password.trim().length < 1 ||
              nickname.trim().length < 1 ||
              username.trim().length < 1 ||
              pat.trim().length < 1 ||
              isSubmitting
            }
            type="SUBMIT"
          >
            회원가입
          </StyledButton>
        </S.SignupBox>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
