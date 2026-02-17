import { MentionSources } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionSources';
import { ArgusMentionSources } from '@models/swagger/App/Domain/Reputation/Repo/Argus/Reputation/Mentions/ArgusMentionSources';

export type MentionsConnectionGetResponseDto = {
  mentionSources?: MentionSources | ArgusMentionSources;
  success: boolean;
};
