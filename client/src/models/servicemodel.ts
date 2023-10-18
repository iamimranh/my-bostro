export type Service = {
  _id: string;
  name: string;
  imgUrl: string;
};

export type ServiceCategory = {
  _id: string;
  name: string;
  type: string;
  price: string;
  imgUrl: string;
};
export type CategoryType = "men" | "women" | "kid" | "home-linen";
