import { useNavigate } from "react-router-dom";
import watodoAxios from "../../libs/axios/watodoAxios";
import { useUserStore } from "../../stores/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user/user";
import { useEffect } from "react";

const useGetUser = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  const fetchUser = async () => {
    try {
      const { data } = await watodoAxios.get<User>("/users/me");
      if (data) {
        setUser(data);
        return data;
      }
    } catch {
      setUser(null);
      navigate("/login");
    }
  };

  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: fetchUser,
    enabled: !!accessToken,
  });

  return data;
};

export default useGetUser;
