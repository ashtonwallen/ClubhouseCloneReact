import { AiOutlinePlus } from "react-icons/ai";
import { BSGrid3x3Gap } from "react-icons/bs";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../Style/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.actionBtn}>
        <button>
          <AiOutlinePlus />
        </button>
        <button>
          <BSGrid3x3Gap />
        </button>
      </div>
    </>
  );
}
