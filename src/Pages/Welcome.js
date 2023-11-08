import { Link } from "react-router-dom";
import style from "../Style/Welcome.module.css";

export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1>Testing</h1>

      <div className={style.welcomeInfo}>
        <p>
          We're hard at work on our latest project, fine-tuning every aspect to
          bring you something special. Our team is dedicated to delivering an
          exceptional experience, and we're excited to share it with you soon.
        </p>
        <p>
          The final touches are being applied, and while we're not ready to
          launch just yet, the wait will be worth it. Keep an eye out for
          updates and sneak peeks of what's to come. Eager to be the first to
          know when we're live?
        </p>
        <p>
          Sign up with your email, and you'll get all the latest news straight
          to your inbox. Thanks for your patience and support.
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your Username {/* <img src="" alt="" /> */}
        </Link>
        <Link exact to="/sign_in" className="d-flex align-items-center mb-3">
          Have an invite? Sign in {/* <img src="" alt="" /> */}
        </Link>
      </div>
    </div>
  );
}
