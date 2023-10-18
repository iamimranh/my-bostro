import { useContext } from "react";
import { Mybtn } from "../components/Button";
import { AuthContext, AuthcontextType } from "../components/auth/auth.context";
const Userprofile = () => {
  const { me, updateMe } = useContext(AuthContext) as AuthcontextType;
  //   console.log(me);
  const logout = () => {
    window.localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <div>
      <div className=" h-16 w-full bg-primary  text-xl font-extrabold text-white  flex   justify-center items-center ">
        Profile
      </div>
      <div className=" m-3 ">
        <p className=" shadow-md text-lg font-bold  p-2 text-primary">
          Name: {me.data?.fullName}
        </p>
        <p className="shadow-md text-lg font-bold  p-2 text-primary">
          Phone: {me.data?.phone}
        </p>
        <p className="shadow-md text-lg font-bold  p-2 text-primary">
          Address: {me.data?.address}
        </p>
        <div className=" flex justify-center mt-5  ">
          <Mybtn
            className=" w-full h-14  rounded-md   "
            onClick={() => logout()}
          >
            Log Out
          </Mybtn>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
