import { useEffect } from "react";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import Header from "../Components/Header";
import data from "../Data/RoomCard.json";
import style from "../Style/RoomInfoCard.module.css";
import DailyInfoCard from "./DailyInfoCard";

export default function RoomInfoCard({ props }) {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="/images/man_profile.png" alt="" />
                  <img src="/images/woman_profile.png" alt="" />
                </div>
                <div>
                  {item.members.map((member) => (
                    <p>
                      {member.first_name}&nbsp;
                      {member.last_name}&nbsp;
                      <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mr-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>
                    <span className="mx-2"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
