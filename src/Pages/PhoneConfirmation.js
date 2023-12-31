import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../Style/PhoneConfirmation.module.css";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <Link path="/" className={style.backBtn}>
        <img src="/images/back-arrow.png" alt=""></img>
      </Link>
      <h1>Enter your phone number</h1>
      <p>
        By entering your phone number, you are agreeing to our
        <span>Terms of Service</span> and <span>Privacy Policy</span>
      </p>
      <Link
        path="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next &nbsp;
        <img src="/images/next-arrow.png" style={style.nextButton} alt="" />
      </Link>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
