import React from "react";
import f from "./Forecast.module.scss";
import { getDate } from "../../utils/getDate";

const Day = ({ day, i }) => {
  const tempMax = Math.round(day?.temp?.max);
  const tempMin = Math.round(day?.temp?.min);
  const { description, icon } = day.weather[0];
  const weekDay =
    i == 0 ? "Сегодня" : i == 1 ? "Завтра" : getDate(day.dt, "week");
  const monthDay = getDate(day.dt, "day");
  const month = getDate(day.dt, "month");
  return (
    <div className={f.forecast__card}>
      <div className={f.forecast__card_top_text}>
        <h3 className={f.forecast__card_h}>{weekDay}</h3>
        <p className={f.forecast__card_p}>
          {monthDay} {month}
        </p>
      </div>
      <div className={f.forecast__card_img}>
        <img src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt="" />
      </div>
      <div className={f.forecast__card_bottom_text}>
        <h3 className={f.forecast__card_h}>{tempMax}°</h3>
        <p className={f.forecast__card_p}>{tempMin}°</p>
        <p className={f.forecast__card_p_bottom}>{description}</p>
      </div>
    </div>
  );
};

export default Day;
