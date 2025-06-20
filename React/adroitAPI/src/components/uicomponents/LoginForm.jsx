import { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import logo from "../../images/AdBookPlus.png";
import { UsersRound, CircleHelp } from "lucide-react";
import { AppContext } from "../../context/AppProvider";
import IncorrectPassword from "./IncorrectPassword";

export default function LoginForm() {
  const { login, loginError } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e, email, password) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="w-5/6 h-4/5 lg:h-9/12 bg-white lg:columns-2 columns-1 flex flex-col justify-evenly  align-middle lg:block ">
        <div className="flex justify-center items-center lg:h-full">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center lg:h-full">
          <UsersRound className={styles.usersSignLoginForm} />
          <form
            className={`${styles.loginForm} flex flex-col w-2/3 gap-4.5 mt-5 mb-5`}
            action="POST"
            onSubmit={(e) => handleSubmit(e, email, password)}
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className={`bg-[var(--primary)] text-white p-2 outline-0`}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className={`bg-[var(--primary)] text-white p-2 outline-0`}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loginError && <IncorrectPassword />}

            <div className="flex justify-between ps-2px">
              <div>
                <input className="rounded" type="checkbox" /> Remember Me
              </div>

              <div>
                <CircleHelp className="inline" /> Forgot Password
              </div>
            </div>

            <button className="bg-blue-800 text-white w-32 self-center-safe p-2 rounded-xl">
              Login
            </button>
            <p className="text-center">Powered By AdroitSquare, Inc</p>
          </form>
        </div>
      </div>
    </div>
  );
}
