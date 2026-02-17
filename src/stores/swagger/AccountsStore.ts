/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { UserLastSiteSchema } from '@models/swagger/UserLastSiteSchema';
import type { UserSitesSchema } from '@models/swagger/UserSitesSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetAccountsGeneralSitesOpts = { FE_UNIQUE_ID?: string };
export type GetAccountsGeneralGetSitegetOpts = { FE_UNIQUE_ID?: string };
export type PutAccountsGeneralLastsiteOpts = { FE_UNIQUE_ID?: string };

export class AccountsStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getAccountsGeneralSitesAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get user sites
   *
   */
  getAccountsGeneralSites(
    queryParams?: GetAccountsGeneralSitesOpts,
    signal?: AbortSignal,
  ): Observable<UserSitesSchema> {
    return this.get(new EndPoint('/rest_api/v1/accounts/general/sites'), queryParams, signal);
  }

  static getAccountsGeneralSitesThunk = createAsyncThunk<
    UserSitesSchema,
    GetAccountsGeneralSitesOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get user sites
     *
     */
    'getAccountsGeneralSites',
    async (queryParams?: GetAccountsGeneralSitesOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getAccountsGeneralSitesAbortManager._push(requestId, controller);

        const result = await firstValueFrom(accountsStore.getAccountsGeneralSites(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAccountsGeneralSitesAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAccountsGeneralSitesAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getAccountsGeneralSitesUrlRegEx = new RegExp('/rest_api/v1/accounts/general/sites');
  static getAccountsGeneralSitesUrlMockRequest = '/rest_api/v1/accounts/general/sites';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getAccountsGeneralGetSitegetAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get user last site
   *
   */
  getAccountsGeneralGetSiteget(
    queryParams?: GetAccountsGeneralGetSitegetOpts,
    signal?: AbortSignal,
  ): Observable<UserLastSiteSchema> {
    return this.get(new EndPoint('/rest_api/v1/accounts/general/get/siteget'), queryParams, signal);
  }

  static getAccountsGeneralGetSitegetThunk = createAsyncThunk<
    UserLastSiteSchema,
    GetAccountsGeneralGetSitegetOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get user last site
     *
     */
    'getAccountsGeneralGetSiteget',
    async (queryParams?: GetAccountsGeneralGetSitegetOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getAccountsGeneralGetSitegetAbortManager._push(requestId, controller);

        const result = await firstValueFrom(accountsStore.getAccountsGeneralGetSiteget(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAccountsGeneralGetSitegetAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAccountsGeneralGetSitegetAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getAccountsGeneralGetSitegetUrlRegEx = new RegExp('/rest_api/v1/accounts/general/get/siteget');
  static getAccountsGeneralGetSitegetUrlMockRequest = '/rest_api/v1/accounts/general/get/siteget';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putAccountsGeneralLastsiteAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * set user last site
   *
   */
  putAccountsGeneralLastsite(
    requestBody: null,
    queryParams?: PutAccountsGeneralLastsiteOpts,
    signal?: AbortSignal,
  ): Observable<UserSitesSchema> {
    return this.put(new EndPoint('/rest_api/v1/accounts/general/lastsite'), requestBody, queryParams, signal);
  }

  static putAccountsGeneralLastsiteThunk = createAsyncThunk<
    UserSitesSchema,
    { requestBody: null; queryParams?: PutAccountsGeneralLastsiteOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * set user last site
     *
     */
    'putAccountsGeneralLastsite',
    async (
      { requestBody, queryParams }: { requestBody: null; queryParams?: PutAccountsGeneralLastsiteOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putAccountsGeneralLastsiteAbortManager._push(requestId, controller);

        const result = await firstValueFrom(accountsStore.putAccountsGeneralLastsite(requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putAccountsGeneralLastsiteAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putAccountsGeneralLastsiteAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putAccountsGeneralLastsiteUrlRegEx = new RegExp('/rest_api/v1/accounts/general/lastsite');
  static putAccountsGeneralLastsiteUrlMockRequest = '/rest_api/v1/accounts/general/lastsite';
}
export const accountsStore = new AccountsStore();
