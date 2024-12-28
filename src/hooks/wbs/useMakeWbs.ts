import { UseFormSetError } from "react-hook-form";
import watodoAxios from "../../libs/axios/watodoAxios";
import { MakeWbsForm } from "../../types/reactHookFrom/makeWbsForm";
import { useNavigate } from "react-router-dom";

const useMakeWbs = (
  setError: UseFormSetError<MakeWbsForm>,
  parentId?: string
) => {
  const navigate = useNavigate();

  const makeWbs = async (makeWbsForm: MakeWbsForm) => {
    if (!parentId) return;
    try {
      await watodoAxios.post("/wbs", { ...makeWbsForm, parentId });
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
          message: "프로젝트의 멤버가 아닙니다.",
        });
      }
    }
  };

  return makeWbs
};

export default useMakeWbs;
