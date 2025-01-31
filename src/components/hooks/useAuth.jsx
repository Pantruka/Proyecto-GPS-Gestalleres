import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;