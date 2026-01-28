import React from "react";
import s from "./Current.module.scss";
import { presip, pressure, sun, temp, wind } from "../../utils/reExport";

const Current = () => {
  const items = [
    {
      img: temp,
      title: "Температура",
      desc: "20° - ощущается как 17°",
    },
    {
      img: pressure,
      title: "Давление",
      desc: "765 мм ртутного столба - нормальное",
    },
    {
      img: presip,
      title: "Осадки",
      desc: "Без осадков",
    },
    {
      img: wind,
      title: "Ветер",
      desc: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <section className={s.current}>
      <div className={s.current__left}>
        <p className={s.current__left_degree}>20°</p>
        <p className={s.current__left_today}>Сегодня</p>
        <p className={s.current__left_time}>Время: 21:54</p>
        <p className={s.current__left_city}>Город: Санкт-Петербург</p>
        <img src={sun} alt="" className={s.current__left_img} />
      </div>
      <div className={s.current__right}>
        {items.map((item) =>(
          <div className={s.current__right_item} key={item.title}>
            <div className={s.current__right_item_img}>
              <img src={item.img} alt="" />
            </div>
            <p className={s.current__right_item_title}>{item.title}</p>
            <p className={s.current__right_item_desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Current;
