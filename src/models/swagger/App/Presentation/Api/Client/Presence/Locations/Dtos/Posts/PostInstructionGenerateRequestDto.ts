export type PostInstructionGenerateRequestDto = {
  instruction: string;
  /**
   * Used mostly in X context so that we keep max 250 chars and one hashtag
   */
  keepShort?: boolean;
};
