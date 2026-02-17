import { IconNames } from '@vanguard/Icon/IconNames';

import { abbreviateNumber } from './round-number';
type DifficultyInfo = {
  difficulty: string;
  iconName: IconNames;
  color: string;
  backgroundColor: string;
  text: string;
};
export const getDifficulty = (keywordData: any): DifficultyInfo => {
  let difficulty = 'Low';
  let iconName = IconNames.low;
  let color = 'var(--s500)';
  let backgroundColor = 'var(--s100)';
  let text = 'This keyword is easy to rank (Low difficulty)';

  if (keywordData.scorePercent && keywordData.scorePercent > 80) {
    difficulty = 'High';
    iconName = IconNames.high;
    color = 'var(--e500)';
    backgroundColor = 'var(--e100)';
    text = 'This keyword is hard to rank (High difficulty)';
  } else if (keywordData.scorePercent && keywordData.scorePercent > 50) {
    difficulty = 'Medium';
    iconName = IconNames.medium;
    color = 'var(--w500)';
    backgroundColor = 'var(--w100)';
    text = 'This keyword is medium to rank (Medium difficulty)';
  }

  return { difficulty, iconName, color, backgroundColor, text };
};

export const getSearchVolume = (keywordData: any, searchVolumeShowLocal: boolean) => {
  const searchVolumeData =
    !searchVolumeShowLocal && keywordData?.volumeCountrywide !== 0
      ? keywordData?.volumeCountrywide
      : keywordData?.volumeLocal;

  const searchVolumePercentage = Math.round((1 - Math.exp(-(searchVolumeData ?? 0 + 1) / 5000)) * 100);
  const searchVolumeValue = abbreviateNumber(searchVolumeData ?? 0);

  return { searchVolumeValue: searchVolumeValue, searchVolumePercentage: searchVolumePercentage };
};
