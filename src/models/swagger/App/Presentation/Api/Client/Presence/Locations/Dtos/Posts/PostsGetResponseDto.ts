import { Posts } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Posts';

export type PostsGetResponseDto = {
  posts: Posts;
  /**
   * Listings that allow deleting Posts
   */
  listingsAllowDeletePosts?: any[];
  /**
   * Listings that allow editing Posts
   */
  listingsAllowEditPosts?: any[];
  /**
   * Listings that allow deleting Events
   */
  listingsAllowDeleteEvents?: any[];
  /**
   * Listings that allow editing Events
   */
  listingsAllowEditEvents?: any[];
};
