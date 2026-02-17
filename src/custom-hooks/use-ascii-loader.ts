import { randomNumberBetween } from '@helpers/random-number-between';
import { useEffect, useState } from 'react';

export const useAsciiLoader = (timing: number = 300) => {
  // const texts = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▇", "▆", "▅", "▄", "▃", "▁"];
  // const texts = ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"];
  const texts = ['_', '&nbsp'];
  const random = randomNumberBetween(0, texts.length);

  const [text, setText] = useState(random);
  useEffect(() => {
    const int = setInterval(() => {
      setText((prevState) => {
        const nextState = prevState + 1;
        if (nextState > 3) {
          return 0;
        }
        return nextState;
      });
    }, timing);

    return () => {
      clearInterval(int);
    };
  }, []);

  return [texts[text]];
};
