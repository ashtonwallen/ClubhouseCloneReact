import { Link } from "react-router-dom";
import style from "../Style/Header.module.css";

export default function Header() {
  return (
    <div className={style.Header}>
      <div className={style.navItems}>
        <Link exact to="/explore">
          <img src="/images/search.png" alt="Search"></img>
        </Link>
        <Link path="/home">
          <img src="/images/invite.png" alt="" />
        </Link>
        <Link path="/explore">
          <img src="/images/calendar.png" alt="" />
        </Link>
        <Link path="/friends_invite">
          <img src="/images/noti.png" alt="" />
        </Link>
        <Link path="/profile">
          <img src="/images/b1.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
