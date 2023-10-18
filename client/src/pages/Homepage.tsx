import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ServiceContext,
  ServiceContextType,
} from "../components/auth/serviceContext";
import ex from "./../images/express.svg";
import machine from "./../images/machine.svg";
import reg from "./../images/regg.svg";

const Homepage = () => {
  const { services, fetchServices } = useContext(
    ServiceContext
  ) as ServiceContextType;

  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string>();

  const delivery = (dType: string) => {
    const service = services.data.find((item) => item._id === selectedService);
    if (!service) {
      alert("Please select a Service Type");
      return;
    }
    navigate(`/garment?service=${service._id}&delivery=${dType}`);
  };

  useEffect(() => {
    if (!services.data.length) {
      fetchServices();
    }
  }, []);

  return (
    <div>
      <p className=" text-2xl font-extrabold text-center pt-4 ">Services</p>
      <div className="grid grid-cols-4">
        {services.data.map((service, i) => (
          <div
            key={`service_${i}`}
            className=" flex flex-col justify-center items-center gap-1"
          >
            <div
              onClick={() => setSelectedService(service._id)}
              className={`${
                service._id === selectedService ? "bg-primary" : "bg-accent"
              } h-[71.628px] w-[71.628px] cursor-pointer bg-accent  rounded-full flex justify-center items-center`}
            >
              <img src={"http://localhost:4000/" + service.imgUrl} alt="" />
            </div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
      <img src={machine} alt="" className=" p-4" />
      <div className=" flex justify-center p-6 justify-between ">
        <div>
          <img
            src={reg}
            alt=""
            onClick={() => delivery("Regular")}
            className=" cursor-pointer"
          />
        </div>
        <div>
          <img
            src={ex}
            alt=""
            onClick={() => delivery("Express")}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
