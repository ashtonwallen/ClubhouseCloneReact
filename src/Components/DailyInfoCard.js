import cardData from "../Data/DailyCard.json";
import style from "../Style/DailyCardInfo.module.css";

export default function DailyInfoCard() {
  return (
    <div className={style.dailyCard}>
      {cardData.map((item) => (
        <div>
          <span className={style.dataTime}>{item.time}</span>
          <div>
            <span className={style.dataTitle}>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
