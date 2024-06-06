import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutePage = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoutePage;
