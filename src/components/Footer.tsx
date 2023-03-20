interface Props {
  buttonColor: string;
  onJoin: () => void;
}

const Footer = ({ buttonColor, onJoin }: Props) => {
  return (
    <div className="footer-section">
      <h3>SPORTS NEW CUSTOMER OFFER</h3>
      <h2>Get up to £10 in Free Bets </h2>
      <button
        onClick={() => {
          onJoin();
        }}
        className={`button background-${buttonColor} join-now`}
      >
        Join Now
      </button>
    </div>
  );
};

export default Footer;
