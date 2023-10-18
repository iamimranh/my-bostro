import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mybtn } from "../components/Button";
import { AuthContext, AuthcontextType } from "../components/auth/auth.context";
import { allorders } from "../services/allservices";

interface Order {
  _id: string;
}

const Allorders = () => {
  const { me, updateMe } = useContext(AuthContext) as AuthcontextType;
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate(); // Add useNavigate hook

  const fetchOrders = async () => {
    const res = await allorders();
    setOrders(res);
  };

  //   console.log(orders);

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleClickDetails = (id: string) => {
    console.log(id);
    navigate(`/detail/${id}`); // Use navigate to navigate to the desired route
  };

  return (
    <div>
      <div className="h-16 w-full bg-primary text-xl font-extrabold text-white flex justify-center items-center">
        Your Orders
      </div>
      <div>
        {orders.map((order, i) => (
          <div key={i}>
            <div className="flex justify-center mt-5 p-3">
              <Mybtn
                className="w-full h-14 rounded-md"
                onClick={() => handleClickDetails(order._id)}
              >
                Order Detail {i + 1}
              </Mybtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allorders;
