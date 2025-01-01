import { useForm } from "react-hook-form";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";
import { MakeWbsForm } from "../../types/reactHookFrom/makeWbsForm";
import { useNavigate, useParams } from "react-router-dom";
import useMakeWbs from "../../hooks/wbs/useMakeWbs";

const MakeWbs = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<MakeWbsForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      detail: "",
    },
  });
  const makeWbs = useMakeWbs(setError, projectId);

  const title = watch("title");
  const detail = watch("detail");

  return (
    <S.Container onSubmit={handleSubmit(makeWbs)}>
      <S.Label>WBS 제목</S.Label>
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
      <S.Label>WBS 설명</S.Label>
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
      <S.Spacer />
      <S.Warning>{errors.root && errors.root.message}</S.Warning>
      <StyledButton
        disabled={
          isSubmitting || title.trim().length < 1 || detail.trim().length < 10
        }
        styleType="SUBMIT"
        type="submit"
      >
        생성하기
      </StyledButton>
      <StyledButton
        onClick={() => navigate(-1)}
        disabled={isSubmitting}
        styleType="CANCEL"
        type="button"
      >
        취소하기
      </StyledButton>
    </S.Container>
  );
};

export default MakeWbs;
