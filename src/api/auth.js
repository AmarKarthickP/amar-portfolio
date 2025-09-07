import axios from 'axios'

const SITE = 'https://sam-tiger-telescope-note.trycloudflare.com'
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

