import { useNavigate } from "react-router-dom";
import watodoAxios from "../../libs/axios/watodoAxios";
import { MakeSprintForm } from "../../types/reactHookFrom/makeSprintForm";
import { UseFormSetError } from "react-hook-form";

const useMakeSprint = (
  setError: UseFormSetError<MakeSprintForm>,
  parentId?: string
) => {
  const navigate = useNavigate();
  const makeSprint = async (makeSprintForm: MakeSprintForm) => {
    if (!parentId) return;
    try {
      await watodoAxios.post("/sprint", { ...makeSprintForm, parentId });
      navigate(`/project/${parentId}`);
    } catch (err: any) {
      if (err.response) {
        const { data } = err.response;
        if (data.message === "You're not project member") {
          setError("root", {
            type: "manual",
            message: "프로젝트의 멤버가 아닙니다.",
          });
          navigate("/");
          return;
        }
        setError("root", {
          type: "manual",
          message: "네트워크 에러",
        });
      }
    }
  };

  return makeSprint;
};

export default useMakeSprint;
