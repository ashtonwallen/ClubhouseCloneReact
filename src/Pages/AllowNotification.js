import { Link } from "react-router-dom";
import style from "../Style/PhoneConfirmation.module.css";

export default function AllowNotification() {
  return (
    <div className={style.phoneConfirmContainer}>
      <div classname="text-center">
        <h1 className="mb-4">Last step</h1>
        <h1 className="mb-3">
          Enable notifications to know when people go live
        </h1>
        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like to Send You Notifications</h3>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
          </div>
          <div className={style.actionBtn}>
            <Link exact to="/home" className="mb-1">
              Don't Allow
            </Link>
            <Link exact to="/home" className="mb-1">
              Allow
            </Link>
            <img
              src="/images/handIcon.svg"
              className={style.handIcon}
              alt="Pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
