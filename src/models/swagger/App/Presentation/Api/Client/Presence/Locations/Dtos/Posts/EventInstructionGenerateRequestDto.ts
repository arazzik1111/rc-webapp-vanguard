export type EventInstructionGenerateRequestDto = {
  /**
   * Event name to be used for generating content
   */
  eventName?: string;
  /**
   * Event start time to be used for generating content
   */
  eventStartTime?: string;
  /**
   * Event end time to be used for generating content
   */
  eventEndTime?: string;
  instruction: string;
  /**
   * Used mostly in X context so that we keep max 250 chars and one hashtag
   */
  keepShort?: boolean;
};
