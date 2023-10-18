import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AuthContext,
  AuthcontextType,
} from "./../components/auth/auth.context";

const ProtectedLayout = () => {
  const navigate = useNavigate();

  const { me } = useContext(AuthContext) as AuthcontextType;

  useEffect(() => {
    if (!me.data && !me.loading) {
      navigate("/auth/login");
    }
  }, [me]);

  return me.loading ? <p>Authenticating...</p> : <Outlet />;
};

export default ProtectedLayout;
