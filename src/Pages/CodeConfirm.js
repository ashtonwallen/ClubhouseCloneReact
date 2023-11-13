import { Link } from "react-router-dom";
import style from "../Style/PhoneConfirmation.module.css";

export default function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link path="/" className={style.backBtn}>
        <img src="/images/back-arrow.png" alt="Back"></img>
      </Link>
      <div className="text-center">
        <h1
          style={{
            width: "100%",
            maxWidth: "200px",
            textAlign: "center",
            outline: "none",
          }}
        >
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            maxWidth: "200px",
            marginBottom: "1em",
            marginTop: "1em",
          }}
        />
        <p className="mt-2">
          Didn't receive code? <span>Tap to resend</span>
        </p>
      </div>
      <Link
        path="/allow_notification"
        className="primaryBtn d-flex align-items center"
      >
        Next{" "}
        <img src="/images/next-arrow.png" alt="Next" className="ml-1"></img>
      </Link>
    </div>
  );
}
