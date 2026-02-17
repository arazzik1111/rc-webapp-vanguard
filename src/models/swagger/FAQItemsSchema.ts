import { FAQQuestionsAndAnswersSchema } from '@models/swagger//FAQQuestionsAndAnswersSchema';

export type FAQItemsSchema = {
  questionsAndAnswers?: FAQQuestionsAndAnswersSchema[];
  title?: string;
};
