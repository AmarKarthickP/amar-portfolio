import axios from 'axios'

const SITE = 'http://localhost'
const BASE_URL = `${SITE}/api/method/`

export const login = async (email, password) => {
  return await axios.post(`${BASE_URL}login`, {
    usr: email,
    pwd: password
  }, {
    withCredentials: true
  })
}

export const logout = async () => {
  return await axios.post(`${BASE_URL}logout`, {}, {
    withCredentials: true
  })
}

export const getProfileImage = async (email) => {
  const res = await fetch(
    `${BASE_URL}progrssor.api.get_profile_image?email=${encodeURIComponent(email)}`,
    {
      method: "GET",
      credentials: "include"
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();

  return data;
};




