export const getAllServicesService = async () => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_API_URL}/services`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const getAllCategoriesService = async (categoryType: string) => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BASE_API_URL}/services-sub-categories?type=${categoryType}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await response.json();
};
export const getAllServices = async () => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_API_URL}/services`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
export const logout = async () => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_API_URL}/logout`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
export const allorders = async () => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_API_URL}/user-orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
export const detailinfo = async (id: string) => {
  const BASE_API_URL = "http://127.0.0.1:4000";

  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BASE_API_URL}/get-order-details?orderId=${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await response.json();
};
