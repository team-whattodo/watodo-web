import { UseFormSetError } from "react-hook-form";
import watodoAxios from "../../libs/axios/watodoAxios";
import { useProjectStore } from "../../stores/project/useProjectStore";
import { MakeTaskForm } from "../../types/reactHookFrom/makeTaskForm";

const useMakeTask = (
  parentType: "sprint" | "wbs",
  setError: UseFormSetError<MakeTaskForm>,
  parentId?: string
) => {
  const { project, setProject } = useProjectStore();

  const makeTask = async (makeTaskForm: MakeTaskForm) => {
    if (!parentId) return;
    try {
      const { data } = await watodoAxios.post(`/task/${parentType}`, {
        ...makeTaskForm,
        parentId,
      });
      if (data && project) {
        if (project.sprint) {
          setProject({ ...project, sprint: data });
          return;
        }
        if (project.wbs) {
          setProject({ ...project, wbs: data });
          return;
        }
      }
    } catch (err: any) {
      if (err.response) {
        const { data } = err.response;
        if (data.message === "You're not project member") {
          setError("root", {
            type: "manual",
            message: "프로젝트의 멤버가 아닙니다.",
          });
          return;
        }
        if (data.message === "Branch is already connected") {
          setError("root", {
            type: "manual",
            message: "이미 연결된 브랜치 입니다.",
          });
          return;
        }
        setError("root", {
          type: "manual",
          message: "네트워크 에러",
        });
      }
    }
  };

  return makeTask;
};

export default useMakeTask;
