export const authUserService = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) throw new Error("Token not found");

  const response = await fetch("http://127.0.0.1:4000/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
export const registerUserService = async (data: any) => {
  const response = await fetch(`http://127.0.0.1:4000/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let result: any = "";

  if (!response.ok) {
    result = await response.text();
    throw new Error(result);
  }
  result = await response.json();
  return result;
};
export const loginUserService = async (data: any) => {
  const response = await fetch(`http://127.0.0.1:4000/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await response.json();
};
