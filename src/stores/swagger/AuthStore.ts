/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { AuthRequestSchema } from '@models/swagger/AuthRequestSchema';
import type { AuthResponseSchema } from '@models/swagger/AuthResponseSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type PatchAuthOpts = { FE_UNIQUE_ID?: string };

export class AuthStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static patchAuthAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Authenticate and get JWT Token
   *
   */
  patchAuth(
    requestBody: AuthRequestSchema,
    queryParams?: PatchAuthOpts,
    signal?: AbortSignal,
  ): Observable<AuthResponseSchema> {
    return this.patch(new EndPoint('/rest_api/v1/auth'), requestBody, queryParams, signal);
  }

  static patchAuthThunk = createAsyncThunk<
    AuthResponseSchema,
    { requestBody: AuthRequestSchema; queryParams?: PatchAuthOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Authenticate and get JWT Token
     *
     */
    'patchAuth',
    async (
      { requestBody, queryParams }: { requestBody: AuthRequestSchema; queryParams?: PatchAuthOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.patchAuthAbortManager._push(requestId, controller);

        const result = await firstValueFrom(authStore.patchAuth(requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchAuthAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.patchAuthAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static patchAuthUrlRegEx = new RegExp('/rest_api/v1/auth');
  static patchAuthUrlMockRequest = '/rest_api/v1/auth';
}
export const authStore = new AuthStore();
