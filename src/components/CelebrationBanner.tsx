import { useState } from "react";
import Confetti from "react-dom-confetti";

const Celebration = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: [
      "#00c811",
      "red",
      "rgb(0, 175, 202)",
      "rgb(162, 0, 255)",
      "rgb(255, 145, 0)",
    ],
  };

  const handleStartCelebration = () => {
    setIsCelebrating(true);
  };

  const handleStopCelebration = () => {
    setIsCelebrating(false);
  };

  return (
    <>
      
      <Confetti active={isCelebrating} config={config} />
      <button onClick={handleStopCelebration}>Stop Celebration</button>
    </>
  );
};

export default Celebration;
