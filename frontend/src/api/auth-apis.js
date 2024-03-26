import axios from "../config/axios-config";
export const registerUser = async (data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.first_name + " " + data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("file", data.avatar);
    const response = await axios.post("/user/register", formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/user/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userDetails = async () => {
  try {
    const response = await axios.get("/user/details");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
