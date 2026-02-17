/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { UserSettingsResponseSchema } from '@models/swagger/UserSettingsResponseSchema';
import type { UserSettingsSchema } from '@models/swagger/UserSettingsSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type PostUserSettingsUpdateByUserIdOpts = { FE_UNIQUE_ID?: string };

export class UserStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static postUserSettingsUpdateByUserIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Update user settings
   */

  /**
   *
   * Update user settings
   */
  postUserSettingsUpdateByUserId(
    userId: number,
    requestBody: UserSettingsSchema,
    queryParams?: PostUserSettingsUpdateByUserIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<UserSettingsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/user/settings/${userId}/update`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postUserSettingsUpdateByUserIdThunk = createAsyncThunk<
    UserSettingsResponseSchema,
    {
      userId: number;
      requestBody: UserSettingsSchema;
      queryParams?: PostUserSettingsUpdateByUserIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     *
     * Update user settings
     */
    'postUserSettingsUpdateByUserId',
    async (
      {
        userId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        userId: number;
        requestBody: UserSettingsSchema;
        queryParams?: PostUserSettingsUpdateByUserIdOpts;
        contentType?: 'application/json';
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.postUserSettingsUpdateByUserIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          userStore.postUserSettingsUpdateByUserId(userId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUserSettingsUpdateByUserIdAbortManager._remove(requestId);

        return result;
      } catch (err: any) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUserSettingsUpdateByUserIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postUserSettingsUpdateByUserIdUrlRegEx = new RegExp('/rest_api/v1/user/settings/{userId}/update');
  static postUserSettingsUpdateByUserIdUrlMockRequest = '/rest_api/v1/user/settings/{userId}/update(.*)';
}
export const userStore = new UserStore();
