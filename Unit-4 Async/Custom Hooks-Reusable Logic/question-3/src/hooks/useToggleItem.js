import { useState } from "react";

function useToggleItems(initialValue = [], initialPosition = 0) {
  // Ensure valid initial position
  const validPosition = initialPosition < initialValue.length ? initialPosition : 0;

  const [position, setPosition] = useState(validPosition);

  const toggleState = () => {
    setPosition((prev) => (prev + 1) % initialValue.length);
  };

  return [initialValue[position], toggleState];
}

export default useToggleItems;
