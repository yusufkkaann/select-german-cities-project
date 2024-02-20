import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  options: [],
  citiesWithSameState: [],
  selectedCity: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSelectedCity(state, action) {
      console.log("setSelected ACATİON PAYLOAD", action.payload);
      console.log("stateselected", state);
      state.selectedCity = action.payload;
    },
    setCitiesWithSameState(state, action) {
      console.log("action PAYLOAD SAME", action.payload);
      console.log("state", state);
      state.citiesWithSameState = action.payload;
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
  },
});
export const { setSelectedCity, setCitiesWithSameState, setOptions } =
  dataSlice.actions;
export default dataSlice.reducer;
