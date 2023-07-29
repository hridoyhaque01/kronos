import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/authSlice";

function useGetAuthCheck() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user?.email) {
      const localStore = localStorage.getItem("auth");
      const localUser = JSON.parse(localStore);
      console.log(localUser);
      if (localUser?.email) {
        dispatch(setUser(localUser));
      }
    }
    setIsLoading(false);
  }, [user?.email, dispatch]);
  return isLoading;
}

export default useGetAuthCheck;
