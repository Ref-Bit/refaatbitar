import { useState } from 'react';

export default function useReplay() {
  const [replay, setReplay] = useState(true);

  const toggleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return { replay, toggleReplay };
}
