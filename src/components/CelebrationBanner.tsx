import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  formColor: string;
  onClose: () => void;
}

const CelebrationBanner = ({ onClose, formColor }: Props) => {
  return (
    <div
      className={` background-${formColor} celebration-banner center-in-parent `}
    >
      <IconButton
        className="close-icon"
        onClick={() => {
          onClose();
        }}
      >
        <CloseIcon />
      </IconButton>
      <div className="login-intro">
        <h2>Thank you for considering my application!</h2>
        <p> ~ Talia Zwennis</p>
      </div>
    </div>
  );
};

export default CelebrationBanner;
