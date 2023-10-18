import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Mybtn } from "../components/Button";

import { BASE_URL } from "../config";
import { CartContext, CartcontextType } from "./../components/auth/cartContext";

const Cheekout = () => {
  const { cartList, resetCart } = useContext(CartContext) as CartcontextType;
  const [address, setAddress] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddress(value);
  };
  const instructionHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInstruction(value);
  };

  let Subtotal = cartList.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  const confirmOrder = async () => {
    const finalOrder = {
      address: address,
      instructions: instruction,
      price: Subtotal,
      deliveryType: searchParam.get("delivery"),
      cart: cartList.map((item) => ({
        serviceSubCategory: item.product,
        quantity: item.quantity,
        service: item.service,
      })),
    };

    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(`${BASE_URL}/order`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalOrder),
      });

      // const result = await res.json();
      if (!res.ok) {
        throw new Error("Order unsuccessfull");
      }

      console.log("Order confirm");
      resetCart();
      navigate("/home");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className=" h-16 w-full bg-primary  text-xl font-extrabold text-white  flex   justify-center items-center ">
        CheekOut
      </div>
      <p className="  mx-4 mt-4 font-semibold ">Address</p>
      <div>
        <form className=" ">
          <div>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter Your Address"
              required
              className="border border-primary h-16 w-11/12 rounded-lg ml-3 shadow-md"
            />
          </div>
        </form>
      </div>
      <div>
        <p className="  mx-4 mt-4 font-semibold ">Instruction</p>

        <form className=" ">
          <div>
            <input
              type="text"
              name="Instruction"
              value={instruction}
              onChange={instructionHandle}
              placeholder="Do You Have Any Instruction"
              required
              className="border border-primary h-16 w-11/12 rounded-lg m-auto ml-3 shadow-md "
            />
          </div>
        </form>
      </div>
      <p className="mx-4 mt-4 font-semibold ">Order Summary</p>

      {cartList.length ? (
        cartList.map((each) => (
          <div
            key={each.product}
            className="  flex justify-between shadow-md m-3 p-1"
          >
            <div className="  ">
              {each.quantity} x {each.productName}
            </div>
            <div>${each.price * each.quantity}</div>
          </div>
        ))
      ) : (
        <></>
      )}
      <div className=" flex justify-between shadow-md m-3 p-1">
        <div className="  ">Subtotal</div>
        <div>
          {Subtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
      <div className=" bg-[#E3887B]  flex justify-center p-4 rounded-lg text-white font-semibold  mx-3 mt-6 w-11/12">
        <Mybtn className=" " onClick={() => confirmOrder()}>
          Confirm Laundry
        </Mybtn>
      </div>
    </div>
  );
};

export default Cheekout;
