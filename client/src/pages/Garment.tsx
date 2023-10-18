import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mybtn } from "../components/Button";
import ForUsertype from "../components/ForUsertype";
import SingleItem from "../components/SingleItem";
import { getAllCategoriesService } from "../services/allservices";
const Garment = () => {
  const catagoryTypeUser = ["men", "women", "kids", "homelilen"];
  const [searchParam] = useSearchParams();
  // console.log("garmentsparams", searchParam.get("delivery"));

  const [data, setData] = useState<any[]>([]);
  const [catagoryType, setCatagoryType] = useState("men");

  const fetchData = async (qt: string) => {
    setData(await getAllCategoriesService(qt));
  };

  const handleOnclick = (catagory: string) => {
    setCatagoryType(catagory);
    // console.log(catagory);
  };

  useEffect(() => {
    fetchData(catagoryType);
  }, [catagoryType]);

  return (
    <div>
      <p className=" text-lg font-bold m-4">Select Garments</p>
      <div className="flex gap-3 m-4 ">
        {catagoryTypeUser.map((catagory) => (
          <ForUsertype
            key={catagory}
            catagory={catagory}
            onCLick={() => handleOnclick(catagory)}
            catagoryType={catagoryType}
          />
        ))}
      </div>
      {data.length ? (
        data.map((element, index) => (
          <SingleItem
            id={element._id}
            name={element.name}
            image={element.imgUrl}
            price={element.price}
            key={element._id}
          />
        ))
      ) : (
        <> </>
      )}
      <div className=" bg-[#E3887B]  flex justify-center p-4 rounded-lg text-white font-semibold  mx-3 mt-6 w-11/12">
        <Link
          to={`/cheekout?delivery=${searchParam.get("delivery")}`}
          className=" "
        >
          <Mybtn className=" ">Go To CheekOut</Mybtn>
        </Link>
      </div>
    </div>
  );
};

export default Garment;
