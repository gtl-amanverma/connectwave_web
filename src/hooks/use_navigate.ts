import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goTo = (path: string, replace: boolean = false) => {
    navigate(`${path}?lang=en&token=123`, { replace });
  };

  return goTo;
};

export default useCustomNavigate;
