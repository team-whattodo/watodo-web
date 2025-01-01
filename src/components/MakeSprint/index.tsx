import { useForm } from "react-hook-form";
import { MakeSprintForm } from "../../types/reactHookFrom/makeSprintForm";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";
import { useNavigate, useParams } from "react-router-dom";
import useMakeSprint from "../../hooks/sprint/useMakeSprint";

const MakeSprint = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const today = new Date();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<MakeSprintForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      detail: "",
      start: "",
      deadline: "",
    },
  });

  const makeSprint = useMakeSprint(setError, projectId);

  const title = watch("title");
  const detail = watch("detail");
  const start = watch("start");
  const deadline = watch("deadline");

  return (
    <S.Container onSubmit={handleSubmit(makeSprint)}>
      <S.Label>스프린트 제목</S.Label>
      <StyledInput
        type="text"
        placeholder="1글자 이상 입력해주세요."
        $fontSize="1.6rem"
        {...register("title", {
          minLength: {
            value: 1,
            message: "한 글자 이상 입력해주세요.",
          },
        })}
      />
      <S.Warning>{errors.title && errors.title.message}</S.Warning>
      <S.Label>스프린트 설명</S.Label>
      <S.Textarea
        placeholder="10글자 이상 입력해주세요."
        {...register("detail", {
          minLength: {
            value: 10,
            message: "열 글자 이상 입력해주세요.",
          },
        })}
      />
      <S.Warning>{errors.detail && errors.detail.message}</S.Warning>
      <S.Label>스프린트 시작일 & 종료일</S.Label>
      <S.Row>
        <S.DateInput
          type="date"
          {...register("start", {
            required: true,
          })}
        />
        <S.DateInput
          type="date"
          {...register("deadline", {
            required: true,
          })}
        />
      </S.Row>
      <S.Spacer />
      <S.Warning>{errors.root && errors.root.message}</S.Warning>
      <StyledButton
        disabled={
          isSubmitting ||
          title.trim().length < 1 ||
          detail.trim().length < 10 ||
          start.trim().length < 1 ||
          deadline.trim().length < 1 ||
          new Date(start) <= today ||
          new Date(deadline) <= new Date(start)
        }
        styleType="SUBMIT"
        type="submit"
      >
        생성하기
      </StyledButton>
      <StyledButton
        disabled={isSubmitting}
        styleType="CANCEL"
        onClick={() => navigate(-1)}
        type="button"
      >
        취소하기
      </StyledButton>
    </S.Container>
  );
};

export default MakeSprint;
