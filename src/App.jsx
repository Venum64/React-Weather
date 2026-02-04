import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Current from "./components/Current/Current";
import { useDispatch, useSelector } from "react-redux";
import { getLatLon, weatherSelector } from "./store/weather/weatherSlice.js";
import Forecast from "./components/Forecast/Forecast.jsx";

const App = () => {
  const { data } = useSelector(weatherSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatLon("Tashkent"));
  }, []);

  return (
    <>
      {data ? (
        <div className="wrapper">
          <div className="container">
            <Navbar />
            <main className="main">
              <Current />
            </main>
            <footer
              className="footer">
              <Forecast />
            </footer>
          </div>
        </div>
      ) : (
        <h1 className="server__loading">Загрузка...</h1>
      )}
    </>
  );
};

export default App;
