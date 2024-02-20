import { useEffect, useState } from "react";
import { axiosCities } from "./axiosApi";
import { useDispatch, useSelector } from "react-redux";
import { setOptions } from "../store/dataSlice/dataSlice";

export default function useAxiosCities() {
  // const [options, setOptions] = useState([]);
  const { options } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const getCities = async () => {
    const response = await axiosCities.get();
    const responseData = await response.data;
    //setOptions(responseData);
    dispatch(setOptions(responseData));
  };
  useEffect(() => {
    getCities();
  }, []);

  return [options];
}
