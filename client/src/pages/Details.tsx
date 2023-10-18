import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailinfo } from "../services/allservices";

const Details = () => {
  let { id = "" } = useParams();
  console.log(id);
  const fetchData = async () => {
    const res = await detailinfo(id);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>details</div>;
};

export default Details;
