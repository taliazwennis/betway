
interface Props {
  buttonColor: string;
  onCelebrate: () => void;
}

const Footer = ({ buttonColor, onCelebrate }: Props) => {
  return (
    <div className="footer-section">
      <h3>SPORTS NEW CUSTOMER OFFER</h3>
      <h2>Get up to £10 in Free Bets </h2>
      <button
        onClick={() => {
          onCelebrate();
        }}
        className={`button ${buttonColor} join-now`}
      >
        {" "}
        Join Now{" "}
      </button>
    </div>
  );
};

export default Footer;
