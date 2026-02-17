import { AITextAdjustRequestDtoTone } from '@models/swagger/App/Presentation/Api/Client/AI/Text/Dtos/AITextAdjustRequestDto';

import { AIAssistantAdjustOptions } from '../AIAssistant';

export const mapAdjustOptionsToBE = (
  option: AIAssistantAdjustOptions,
): (typeof AITextAdjustRequestDtoTone)[keyof typeof AITextAdjustRequestDtoTone] | undefined => {
  switch (option) {
    case 'bold':
      return AITextAdjustRequestDtoTone.BOLD;
    case 'formal':
      return AITextAdjustRequestDtoTone.FORMAL;
    case 'friendly':
      return AITextAdjustRequestDtoTone.FRIENDLY;
    case 'informative':
      return AITextAdjustRequestDtoTone.INFORMATIVE;
    case 'professional':
      return AITextAdjustRequestDtoTone.PROFESSIONAL;
    // case "persuasive":
    //     return AITextAdjustRequestDtoTone.PERSUASIVE;
    case 'witty':
      return AITextAdjustRequestDtoTone.WITTY;
    // case "adventurous":
    //     return AITextAdjustRequestDtoTone.ADVENTUROUS;
    default:
      return undefined;
  }
};
