import Image from "next/image";

interface Props {
  onLogin: () => void;
  onRegister: () => void;
}

const Header = ({ onLogin, onRegister }: Props) => {
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
            onLogin();
          }}
          className="button"
        >
          Login
        </button>
        <button
          className="button sign-up"
          onClick={() => {
            onRegister();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
