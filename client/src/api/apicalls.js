import Axios from "axios";

const API_URL = `http://localhost:8080/api`;

export const login = async (email, password) => {
  try {
    const response = await Axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (email, firstName, lastName, password) => {
  try {
    const response = await Axios.post(`${API_URL}/auth/register`, {
      email,
      firstName,
      lastName,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getLoggedInProfile = async () => {
  const token = localStorage.getItem("token");

  try {
    const profile = await Axios.get(`${API_URL}/auth/me`, {
      headers: { "x-auth-token": token },
    });

    return profile.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllBlogs = async () => {
  const token = localStorage.getItem("token");
  try {
    const blog = await Axios.get(`${API_URL}/blog`, {
      headers: { "x-auth-token": token },
    });

    return blog.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createBlog = async (title, content) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const body = { title: title, content: content };
  try {
    const resp = await Axios({
      method: "POST",
      url: `${API_URL}/blog`,
      headers: { "x-auth-token": token },
      data: {
        title,
        content,
      },
    });

    return resp.data;
  } catch (error) {
    return error.response.data;
  }
};
