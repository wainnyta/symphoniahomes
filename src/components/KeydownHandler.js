import React, { useEffect } from 'react';
const KEYDOWN = 40;
const KEYUP = 38;
const KEYLEFT = 37;
const KEYRIGHT = 39;
const ESCAPE = 27;
const KEYCODE_A = 65;
const KEYCODE_D = 68;

const useHotkey = (keycode, onUse) => {
  useEffect(() => {
    const handleUse = (event) => {
      if (event.keyCode === keycode) onUse();
    };
    window.addEventListener('keydown', handleUse);

    return () => {
      window.removeEventListener('keydown', handleUse);
    };
  });
};

const useRightArrow = (onUse) => useHotkey(KEYRIGHT, onUse);
const useEscape = (onUse) => useHotkey(ESCAPE, onUse);
const useLeftArrow = (onUse) => useHotkey(KEYLEFT, onUse);
const useKeycodeA = (onUse) => useHotkey(KEYCODE_A, onUse);
const useKeycodeD = (onUse) => useHotkey(KEYCODE_D, onUse);

export {
  useEscape,
  useRightArrow,
  useLeftArrow,
  useHotkey,
  useKeycodeA,
  useKeycodeD,
};
