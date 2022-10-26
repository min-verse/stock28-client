import React, { useRef, useState } from "react";
import smoothjazz from "../data/smoothjazz.mp3";

function Logo() {
  const [playing, setPlaying] = useState(false);

  const smoothJazz = useRef(new Audio(smoothjazz));

  function handleLogoClick() {
    if (!playing) {
      smoothJazz.current.play();
      smoothJazz.current.loop = true;
    } else {
      smoothJazz.current.pause();
    }
    setPlaying(!playing);
  }

  return (
    <h1 className="logo">
      <span onClick={handleLogoClick} role="img" aria-label="paw">
      📈
      </span>
      Stock28
      <span onClick={handleLogoClick} role="img" aria-label="paw">
      📈
      </span>
    </h1>
  );
}

export default Logo;
