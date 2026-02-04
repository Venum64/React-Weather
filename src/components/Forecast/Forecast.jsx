import React from "react";
import f from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/weather/weatherSlice";
import Day from "./Day.jsx";

const Forecast = () => {
  const { data } = useSelector(weatherSelector);

  return (
    <>
      <section className={f.forecast}>
        <div className="container">
          <div className={f.forecast__content}>
            {data?.daily?.map((item, i) => (
              <Day key={i} day={item} i={i}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Forecast;
