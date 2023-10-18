import { FaRegUser } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { TbCategory2 } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import appIcon from "./../images/app-icon.svg";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <div className=" shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] flex mb-3  h-16 justify-between items-center border border-primary rounded m-1 absolute inset-x-0 bottom-0">
          <div className=" p-2 bg-primary rounded-full m-1">
            <NavLink to={"/home"}>
              <GrHomeRounded className="text-3xl p-1 stroke-white" />
            </NavLink>
          </div>
          <div className="p-2 bg-primary rounded-full m-1">
            <NavLink to={"/orders"}>
              <TbCategory2 className="text-3xl p-1 stroke-white" />
            </NavLink>
          </div>
          <div className="">
            <div className="  p-2 bg-primary rounded-full m-1">
              <NavLink to={"#"}>
                <img src={appIcon} alt="" className="text-3xl p-1 " />
              </NavLink>
            </div>
          </div>
          <div className=" p-2 bg-primary rounded-full m-1">
            <NavLink to={"/cheekout"}>
              <PiShoppingCartSimpleBold className="text-3xl p-1 stroke-white " />
            </NavLink>
          </div>
          <div className=" p-2 bg-primary rounded-full m-1">
            <NavLink to={"/profile"}>
              <FaRegUser className="text-3xl p-1 stroke-white text-white " />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
