import { API } from "../apiClient"

export const getHomes = () => {
  const data = API.getHomePlans();
  return data
}

export const getLots = () => {
  const data = API.getLots();
  return data
}