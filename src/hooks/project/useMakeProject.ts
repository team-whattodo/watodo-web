import { UseFormSetError } from "react-hook-form";
import { MakeProjectForm } from "../../types/reactHookFrom/makeProjectForm";
import watodoAxios from "../../libs/axios/watodoAxios";
import { useNavigate } from "react-router-dom";

const useMakeProject = (setError: UseFormSetError<MakeProjectForm>) => {
  const navigate = useNavigate();

  const makeProject = async (makeProjectForm: MakeProjectForm) => {
    try {
      const { data } = await watodoAxios.post("/project", makeProjectForm);
      if (data) {
        navigate(`/project/${data.id}`);
      }
    } catch (err: any) {
      if (err.response) {
        const { data } = err.response;
        if (data.message === "Repository is already in use") {
          setError("repository", {
            type: "manual",
            message: "이미 등록된 레포지토리 입니다.",
          });
        }
        return;
      }
      setError("root", {
        type: "manual",
        message: "프로젝트 생성에 실패했습니다.",
      });
    }
  };
  return makeProject;
};

export default useMakeProject;
