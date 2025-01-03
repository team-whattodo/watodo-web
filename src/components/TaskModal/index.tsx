import { SetStateAction, useEffect } from "react";
import * as S from "./style";
import { Task } from "../../types/task/task";
import DohyeonText from "../DohyeonText";
import { COLOR } from "../../constants/colors";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import { useForm } from "react-hook-form";
import { MakeTaskForm } from "../../types/reactHookFrom/makeTaskForm";
import useMakeTask from "../../hooks/task/useMakeTask";
import { useProjectStore } from "../../stores/project/useProjectStore";

const TaskModal = ({
  setModalVisible,
  type,
  taskData,
}: {
  setModalVisible: React.Dispatch<SetStateAction<boolean>>;
  type: "CREATE" | "EDIT";
  taskData?: Task;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
    setValue,
  } = useForm<MakeTaskForm>({
    mode: "onSubmit",
    defaultValues: {
      title: taskData?.title || "",
      branch: taskData?.branch || "",
    },
  });
  const { project } = useProjectStore();

  const parentType = project?.sprint ? "sprint" : "wbs";
  const parentId =
    parentType === "sprint" ? project?.sprint?.id : project?.wbs?.id;

  const makeTask = useMakeTask(parentType, setError, parentId);

  const title = watch("title");
  const branch = watch("branch");
  const start = watch("start");
  const deadline = watch("deadline");

  const today = new Date();

  const onSubmit = async (e: MakeTaskForm) => {
    await makeTask(e);
    setModalVisible(false);
  };

  useEffect(() => {
    if (parentType === "wbs" && type === "EDIT") {
      setValue("start", taskData?.start);
      setValue("deadline", taskData?.deadline);
    }
    return () => {
      setValue("title", "");
      setValue("branch", "");
      setValue("start", "");
      setValue("deadline", "");
    };
  }, [parentType, type]);

  return (
    <S.Shadow onClick={() => setModalVisible(false)}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <DohyeonText color={COLOR[500]} fontSize="3.2rem">
          {type === "CREATE" ? "새로운 할 일 생성하기" : "할 일 수정하기"}
        </DohyeonText>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>할 일 이름</S.Label>
          <StyledInput
            $fontSize="1.6rem"
            placeholder="한 글자 이상 입력해주세요."
            {...register("title", {
              minLength: {
                value: 1,
                message: "한 글자 이상 입력해주세요.",
              },
            })}
          />
          <S.Warning>{errors.title && errors.title.message}</S.Warning>
          <S.Label>브랜치</S.Label>
          <StyledInput
            $fontSize="1.6rem"
            placeholder="한 글자 이상 입력해주세요."
            {...register("branch", {
              minLength: {
                value: 1,
                message: "한 글자 이상 입력해주세요.",
              },
            })}
          />
          <S.Warning>{errors.branch && errors.branch.message}</S.Warning>
          {parentType === "wbs" && (
            <>
              <S.Label>시작일 & 마감일</S.Label>
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
            </>
          )}
          <S.Spacer />
          <S.Warning>{errors.root && errors.root.message}</S.Warning>
          <StyledButton
            disabled={
              isSubmitting ||
              title.trim().length < 1 ||
              branch.trim().length < 1 ||
              (parentType === "wbs" &&
                (start?.trim().length! < 1 ||
                  deadline?.trim().length! < 1 ||
                  new Date(start!) <= today ||
                  new Date(deadline!) <= new Date(start!)))
            }
            styleType="SUBMIT"
            type="submit"
          >
            {type === "CREATE" ? "생성하기" : "수정하기"}
          </StyledButton>
          <StyledButton
            disabled={isSubmitting}
            styleType="CANCEL"
            onClick={() => setModalVisible(false)}
            type="button"
          >
            취소하기
          </StyledButton>
        </S.Form>
      </S.Container>
    </S.Shadow>
  );
};

export default TaskModal;
