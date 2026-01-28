import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

const initialState = {
  data: null,
  key: "9e8d9092cbd5bd16c0f45f45c758b915",
  city: null,
};

const { key } = initialState;

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

export const getLatLon = createAsyncThunk(
  "weatherSlice/getLatLon",
  async (city, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`
      );
      dispatch(getWeather(data[0]));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async (param) => {
    const { lat, lon, local_names } = param;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=${key}&units=metric&lang=ru`
    );
    console.log(data);
  }
);

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
