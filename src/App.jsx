import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Current from "./components/Current/Current";
import { useDispatch, useSelector } from "react-redux";
import { getLatLon } from "./store/weather/weatherSlice.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatLon("Tashkent"));
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          <main className="main">
            <Current />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
