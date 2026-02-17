import { AITextObjectType } from '@models/swagger/App/Domain/AI/Entities/Text/AIText';

export const AIAssistantMockRequestAdjust = {
  url: '/app/api/client/ai/text/NaN/adjust', // actual url from code inspect in chrome: http://localhost:6006/app/api/client/ai/text/NaN/adjust
  method: 'POST',
  status: 200,
  delay: 1000,
  response: {
    aiText: {
      adjustedText:
        "Thank you so much for your kind words and 5-star review! We aim to provide beautiful and artistic memories for our clients. It's fantastic to know that you felt comfortable throughout the photoshoot. We always strive to capture unique dynamics. Moreover, we're glad the final images exceeded your expectations and the editing was tastefully done. We appreciate your recommendation and can't wait to work with you again!",
      objectType: AITextObjectType.App_Domain_AI_Entities_Text_AIText,
    },
  },
};
