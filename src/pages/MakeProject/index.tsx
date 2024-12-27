import { useForm } from "react-hook-form";
import DohyeonText from "../../components/DohyeonText";
import StyledInput from "../../components/StyledInput";
import { COLOR } from "../../constants/colors";
import * as S from "./style";
import { MakeProjectForm } from "../../types/reactHookFrom/makeProjectForm";
import { REPOSITORY_REGEX } from "../../constants/regex";
import StyledButton from "../../components/StyledButton";
import useMakeProject from "../../hooks/project/useMakeProject";
import { useNavigate } from "react-router-dom";

const MakeProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<MakeProjectForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      detail: "",
      repository: "",
    },
  });

  const makeProject = useMakeProject(setError);
  const navigate = useNavigate();

  const title = watch("title");
  const detail = watch("detail");
  const repository = watch("repository");

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(makeProject)}>
        <S.TitleWrap>
          <DohyeonText color={COLOR[500]} fontSize="3.2rem">
            프로젝트 생성
          </DohyeonText>
          <S.Logo src="/assets/WATODO.svg" />
        </S.TitleWrap>
        <S.Label>프로젝트 이름</S.Label>
        <StyledInput
          type="text"
          {...register("title", {
            minLength: {
              value: 1,
              message: "한 글자 이상 입력해주세요.",
            },
          })}
          $fontSize="1.6rem"
          placeholder="와투두"
        />
        <S.Warning>{errors.title && errors.title.message}</S.Warning>
        <S.Label>프로젝트 설명</S.Label>
        <S.Textarea
          {...register("detail", {
            minLength: {
              value: 10,
              message: "열 글자 이상 입력해주세요.",
            },
          })}
          placeholder="와투두는 개발 일정 관리를 수월하게 하도록 하는 서비스 입니다."
        />
        <S.Warning>{errors.detail && errors.detail.message}</S.Warning>
        <S.Label>깃허브 레포지토리</S.Label>
        <StyledInput
          type="text"
          {...register("repository", {
            pattern: {
              value: REPOSITORY_REGEX,
              message: "올바르지 않은 레포지토리 형식입니다.",
            },
          })}
          $fontSize="1.6rem"
          placeholder="https://github.com/team-whattodo/watodo-web"
        />
        <S.Warning>{errors.repository && errors.repository.message}</S.Warning>
        <S.Spacer />
        <S.Warning>{errors.root && errors.root.message}</S.Warning>
        <StyledButton
          disabled={
            isSubmitting ||
            title.trim().length < 1 ||
            detail.trim().length < 1 ||
            repository.trim().length < 1
          }
          type="SUBMIT"
        >
          프로젝트 생성
        </StyledButton>
        <StyledButton
          disabled={isSubmitting}
          type="CANCEL"
          onClick={() => navigate(-1)}
        >
          취소하기
        </StyledButton>
      </S.Form>
    </S.Container>
  );
};

export default MakeProject;
