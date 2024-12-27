import { useNavigate } from "react-router-dom";
import watodoAxios from "../../libs/axios/watodoAxios";
import { useQuery } from "@tanstack/react-query";
import { ProjectDetail } from "../../types/project/projectDetail";

const useGetProjectDetail = (projectId?: string) => {
  const navigate = useNavigate();

  const fetchProjectDetail = async () => {
    try {
      const { data } = await watodoAxios.get<ProjectDetail>(`/project/${projectId}`);
      if (data) return data;
    } catch (err: any) {
      if (err.response) {
        const { data } = err.response;
        if (data.message === "You're not project member") {
          navigate("/");
        }
      }
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["projectDetail", projectId],
    queryFn: fetchProjectDetail,
    enabled: !!projectId,
  });

  return {
    data,
    isLoading
  }
};

export default useGetProjectDetail;
