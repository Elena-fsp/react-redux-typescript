import axios from "axios";
import { API_KEY, API_URL } from "./api";



export const getDrivers = async () => {
  const response = await axios.get(`${API_URL}driver/`, {
    headers: {
      'X-Authorization': `${API_KEY}`,
    },
  })
  return response;
}
