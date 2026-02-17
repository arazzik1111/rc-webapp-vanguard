/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import type { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';
import type { NotFoundException } from '@models/swagger/DDD/Infrastructure/Exceptions/NotFoundException';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../../api-config';
import { HttpStore } from '../../http.store';
import { AbortControllersManager } from '../../store-helpers/abort-controllers-manager';

export type GetClientAgencyMediaItemsLogoByJwtOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * If set to true, no EntityRegistry Argus Caching will be used
   */
  noCache?: boolean;
};

export class AgencyStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getClientAgencyMediaItemsLogoByJwtAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns The Agency Logo based on JWT encoding Agency main Account
   *
   *
   *
   *
   *
   *
   *
   *
   * @throws \ReflectionException
   */

  /**
   * Account Agency Logo from JWT
   * Returns The Agency Logo based on JWT encoding Agency main Account
   *
   *
   *
   *
   *
   *
   *
   *
   * @throws \ReflectionException
   */
  getClientAgencyMediaItemsLogoByJwt(
    jwt: string,
    queryParams: GetClientAgencyMediaItemsLogoByJwtOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.get(new EndPoint(`/app/api/client/agency/mediaItems/logo/${jwt}`), queryParams, signal);
  }

  static getClientAgencyMediaItemsLogoByJwtThunk = createAsyncThunk<
    any,
    { jwt: string; queryParams: GetClientAgencyMediaItemsLogoByJwtOpts },
    {
      rejectValue: BadRequestException | NotFoundException | InternalErrorException;
    }
  >(
    /**
     * Account Agency Logo from JWT
     * Returns The Agency Logo based on JWT encoding Agency main Account
     *
     *
     *
     *
     *
     *
     *
     *
     * @throws \ReflectionException
     */
    'getClientAgencyMediaItemsLogoByJwt',
    async (
      { jwt, queryParams }: { jwt: string; queryParams: GetClientAgencyMediaItemsLogoByJwtOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getClientAgencyMediaItemsLogoByJwtAbortManager._push(requestId, controller);

        const result = await firstValueFrom(agencyStore.getClientAgencyMediaItemsLogoByJwt(jwt, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientAgencyMediaItemsLogoByJwtAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getClientAgencyMediaItemsLogoByJwtAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getClientAgencyMediaItemsLogoByJwtUrlRegEx = new RegExp('/app/api/client/agency/mediaItems/logo/{jwt}');
  static getClientAgencyMediaItemsLogoByJwtUrlMockRequest = '/app/api/client/agency/mediaItems/logo/{jwt}(.*)';
}
export const agencyStore = new AgencyStore();
