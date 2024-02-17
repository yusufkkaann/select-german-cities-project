import { useEffect, useState } from "react";
import { axiosCities } from "./axiosApi";

export default function useAxiosCities() {
  const [options, setOptions] = useState([]);

  const getCities = async () => {
    const response = await axiosCities.get();
    const responseData = await response.data;
    setOptions(responseData);
  };
  useEffect(() => {
    getCities();
  }, []);

  return [options];
}
