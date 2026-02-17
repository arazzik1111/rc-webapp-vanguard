/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { AffiliateRegistrationResponseSchema } from '@models/swagger/AffiliateRegistrationResponseSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetRegistrationAffiliateByResellerNameOpts = { FE_UNIQUE_ID?: string };

export class RegistrationStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getRegistrationAffiliateByResellerNameAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get affiliate registration data for new users
   *
   */
  getRegistrationAffiliateByResellerName(
    resellerName: string,
    queryParams?: GetRegistrationAffiliateByResellerNameOpts,
    signal?: AbortSignal,
  ): Observable<AffiliateRegistrationResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/registration/affiliate/${resellerName}`), queryParams, signal);
  }

  static getRegistrationAffiliateByResellerNameThunk = createAsyncThunk<
    AffiliateRegistrationResponseSchema,
    { resellerName: string; queryParams?: GetRegistrationAffiliateByResellerNameOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get affiliate registration data for new users
     *
     */
    'getRegistrationAffiliateByResellerName',
    async (
      { resellerName, queryParams }: { resellerName: string; queryParams?: GetRegistrationAffiliateByResellerNameOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getRegistrationAffiliateByResellerNameAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          registrationStore.getRegistrationAffiliateByResellerName(resellerName, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getRegistrationAffiliateByResellerNameAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getRegistrationAffiliateByResellerNameAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getRegistrationAffiliateByResellerNameUrlRegEx = new RegExp(
    '/rest_api/v1/registration/affiliate/{resellerName}',
  );
  static getRegistrationAffiliateByResellerNameUrlMockRequest =
    '/rest_api/v1/registration/affiliate/{resellerName}(.*)';
}
export const registrationStore = new RegistrationStore();
