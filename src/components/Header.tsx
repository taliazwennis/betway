import Link from "next/link";
import Image from "next/image";

interface Props {
  onLogin: (isTrue: boolean) => void
}

const Header = ({onLogin}: Props) => {
  return (
    <div className="row login-bar">
      <div className="col-6">
        <Image
          className="logo"
          src={"/betway-logo.png"}
          alt="user profile picture"
          width={538}
          height={151}
        />
      </div>
      <div className="col-6 button-group">
        <button
          onClick={() => {
            onLogin(true)
            
          }}
          className="button"
        >
          Login
        </button>
        <button className="button sign-up">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
