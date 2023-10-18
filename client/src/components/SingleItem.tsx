import { ChangeEvent, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext, CartcontextType } from "../components/auth/cartContext";
import { CartItem } from "../models/Cart";
import { Mybtn } from "./Button";
import { ServiceContext, ServiceContextType } from "./auth/serviceContext";

type Props = { id: string; name: string; price: number; image: any };

const SingleItem = (props: Props) => {
  const [searchParam] = useSearchParams();

  const { cartList, updateCart } = useContext(CartContext) as CartcontextType;
  const { services } = useContext(ServiceContext) as ServiceContextType;
  const [selectedOption, setSelectedOption] = useState<string>(
    searchParam.get("service") || ""
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value;
    setSelectedOption(selectedValue);
  };

  const count =
    cartList.find((item) => item.product === props.id)?.quantity || 0;

  const handleQuantity = (type: "add" | "remove") => {
    let newCount = count;
    if (type === "add") {
      newCount += 1;
    } else {
      if (count !== 0) {
        newCount -= 1;
      }
    }

    const cart: CartItem = {
      product: props.id,
      productName: props.name,
      quantity: newCount,
      service: selectedOption,
      price: props.price,
    };

    updateCart(cart);
  };

  return (
    <div className="flex gap-3 p-2 justify-between items-end border border-primary rounded  m-3">
      <div className="flex gap-3">
        <div>
          <img src={"http://localhost:4000/" + props.image} alt="" />
        </div>
        <div>
          <h3 className=" font-bold">{props.name}</h3>
          <p>${props.price}</p>
        </div>
        <div>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-[#F0F0F0] rounded-full "
          >
            {services.data.map((service) => (
              <option value={service._id} key={service._id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {count < 1 ? (
        <Mybtn
          className="w-20 font-semibold rounded  "
          onClick={() => handleQuantity("add")}
        >
          Add
        </Mybtn>
      ) : (
        <div className=" flex gap-4 m-3 bg-[#DBEBEA] p-2 rounded-full w-20 ">
          <p
            className="font-bold cursor-pointer"
            onClick={() => handleQuantity("add")}
          >
            +
          </p>
          <p className=" ">{count}</p>
          <p
            className="font-bold  cursor-pointer"
            onClick={() => handleQuantity("remove")}
          >
            -
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleItem;
