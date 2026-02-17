import { Mentions } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/Mentions';

export type MentionsUpdateResponseDto = {
  success: boolean;
  mentions?: Mentions;
};
