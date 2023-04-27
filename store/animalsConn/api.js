import axios from "axios"
const animalsConn = axios.create({
  baseURL: "https://animal.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
