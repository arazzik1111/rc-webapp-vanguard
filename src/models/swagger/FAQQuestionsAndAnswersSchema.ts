import { FAQAnswers } from '@models/swagger//FAQAnswers';

export type FAQQuestionsAndAnswersSchema = {
  question?: string;
  answer?: FAQAnswers[];
};
