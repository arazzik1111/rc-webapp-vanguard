/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { FAQDataResponseSchema } from '@models/swagger/FAQDataResponseSchema';
import type { GaAccountAdsSetupUserInfoResponseSchema } from '@models/swagger/GaAccountAdsSetupUserInfoResponseSchema';
import type { GaAccountInvoiceDataResponseSchema } from '@models/swagger/GaAccountInvoiceDataResponseSchema';
import type { GaAccountOrderItemsRequestSchema } from '@models/swagger/GaAccountOrderItemsRequestSchema';
import type { GaAccountOrderItemsResponseSchema } from '@models/swagger/GaAccountOrderItemsResponseSchema';
import type { GaAccountPaymentInfoResponseSchema } from '@models/swagger/GaAccountPaymentInfoResponseSchema';
import type { GaAccountPromoDataResponseSchema } from '@models/swagger/GaAccountPromoDataResponseSchema';
import type { UpsellingResellerMigratorResponseSchema } from '@models/swagger/UpsellingResellerMigratorResponseSchema';
import type { UpsellingResellerPasswordChangedRequestSchema } from '@models/swagger/UpsellingResellerPasswordChangedRequestSchema';
import type { UpsellingResellerPasswordChangedResponseSchema } from '@models/swagger/UpsellingResellerPasswordChangedResponseSchema';
import type { UpsellingSubscriptionResellerResponseSchema } from '@models/swagger/UpsellingSubscriptionResellerResponseSchema';
import type { UpsellingSubscriptionResponseDataSchema } from '@models/swagger/UpsellingSubscriptionResponseDataSchema';
import type { UpsellingSubscriptionResponseSchema } from '@models/swagger/UpsellingSubscriptionResponseSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetUpsellingFaqBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  productId: string;
};
export type GetUpsellingResellerMigratorConfirmMigrationBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetUpsellingResellerMigratorBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutUpsellingResellerMigratorChangePasswordBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetUpsellingSubscriptionSetupPaymentInfoBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetUpsellingSubscriptionInvoiceDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetUpsellingSubscriptionPaymentInfoBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostUpsellingSubscriptionOrderItemsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostUpsellingSubscriptionFromMonthlyToYearlyBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  subscription_id: number;

  subscription_type: string;

  responseAsJson: boolean;
};
export type PostUpsellingSubscriptionUpdateSubscriptionBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  subscription_id: number;

  subscription_type: string;

  responseAsJson: boolean;
};
export type GetUpsellingSubscriptionPromoDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetUpsellingSubscriptiondataBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  productId: string;

  redirectURL?: string;
};
export type PostUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  subscription_ids: number;
};

export class UpsellingStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingFaqBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get faq data
   *
   */
  getUpsellingFaqBySiteId(
    siteId: number,
    queryParams: GetUpsellingFaqBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<FAQDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/faq/${siteId}`), queryParams, signal);
  }

  static getUpsellingFaqBySiteIdThunk = createAsyncThunk<
    FAQDataResponseSchema,
    { siteId: number; queryParams: GetUpsellingFaqBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get faq data
     *
     */
    'getUpsellingFaqBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetUpsellingFaqBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingFaqBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(upsellingStore.getUpsellingFaqBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingFaqBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingFaqBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingFaqBySiteIdUrlRegEx = new RegExp('/rest_api/v1/upselling/faq/{siteId}');
  static getUpsellingFaqBySiteIdUrlMockRequest = '/rest_api/v1/upselling/faq/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingResellerMigratorConfirmMigrationBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Confirm reseller migration from partner to DC
   *
   */
  getUpsellingResellerMigratorConfirmMigrationBySiteId(
    siteId: number,
    queryParams?: GetUpsellingResellerMigratorConfirmMigrationBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<UpsellingResellerMigratorResponseSchema> {
    return this.get(
      new EndPoint(`/rest_api/v1/upselling/reseller_migrator/${siteId}/confirm_migration`),
      queryParams,
      signal,
    );
  }

  static getUpsellingResellerMigratorConfirmMigrationBySiteIdThunk = createAsyncThunk<
    UpsellingResellerMigratorResponseSchema,
    { siteId: number; queryParams?: GetUpsellingResellerMigratorConfirmMigrationBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Confirm reseller migration from partner to DC
     *
     */
    'getUpsellingResellerMigratorConfirmMigrationBySiteId',
    async (
      {
        siteId,
        queryParams,
      }: { siteId: number; queryParams?: GetUpsellingResellerMigratorConfirmMigrationBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingResellerMigratorConfirmMigrationBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingResellerMigratorConfirmMigrationBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingResellerMigratorConfirmMigrationBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingResellerMigratorConfirmMigrationBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingResellerMigratorConfirmMigrationBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/reseller_migrator/{siteId}/confirm_migration',
  );
  static getUpsellingResellerMigratorConfirmMigrationBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/reseller_migrator/{siteId}/confirm_migration(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingResellerMigratorBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get reseller migration data for specified site
   *
   */
  getUpsellingResellerMigratorBySiteId(
    siteId: number,
    queryParams?: GetUpsellingResellerMigratorBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<UpsellingResellerMigratorResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/reseller_migrator/${siteId}`), queryParams, signal);
  }

  static getUpsellingResellerMigratorBySiteIdThunk = createAsyncThunk<
    UpsellingResellerMigratorResponseSchema,
    { siteId: number; queryParams?: GetUpsellingResellerMigratorBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get reseller migration data for specified site
     *
     */
    'getUpsellingResellerMigratorBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetUpsellingResellerMigratorBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingResellerMigratorBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingResellerMigratorBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingResellerMigratorBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingResellerMigratorBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingResellerMigratorBySiteIdUrlRegEx = new RegExp('/rest_api/v1/upselling/reseller_migrator/{siteId}');
  static getUpsellingResellerMigratorBySiteIdUrlMockRequest = '/rest_api/v1/upselling/reseller_migrator/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putUpsellingResellerMigratorChangePasswordBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Post change password
   *
   */
  putUpsellingResellerMigratorChangePasswordBySiteId(
    siteId: number,
    requestBody: UpsellingResellerPasswordChangedRequestSchema,
    queryParams?: PutUpsellingResellerMigratorChangePasswordBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<UpsellingResellerPasswordChangedResponseSchema> {
    return this.put(
      new EndPoint(`/rest_api/v1/upselling/reseller_migrator/${siteId}/changePassword`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static putUpsellingResellerMigratorChangePasswordBySiteIdThunk = createAsyncThunk<
    UpsellingResellerPasswordChangedResponseSchema,
    {
      siteId: number;
      requestBody: UpsellingResellerPasswordChangedRequestSchema;
      queryParams?: PutUpsellingResellerMigratorChangePasswordBySiteIdOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Post change password
     *
     */
    'putUpsellingResellerMigratorChangePasswordBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: {
        siteId: number;
        requestBody: UpsellingResellerPasswordChangedRequestSchema;
        queryParams?: PutUpsellingResellerMigratorChangePasswordBySiteIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putUpsellingResellerMigratorChangePasswordBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.putUpsellingResellerMigratorChangePasswordBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putUpsellingResellerMigratorChangePasswordBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putUpsellingResellerMigratorChangePasswordBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putUpsellingResellerMigratorChangePasswordBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/reseller_migrator/{siteId}/changePassword',
  );
  static putUpsellingResellerMigratorChangePasswordBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/reseller_migrator/{siteId}/changePassword(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingSubscriptionSetupPaymentInfoBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get ads setup user info.
   *
   */
  getUpsellingSubscriptionSetupPaymentInfoBySiteId(
    siteId: number,
    queryParams?: GetUpsellingSubscriptionSetupPaymentInfoBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountAdsSetupUserInfoResponseSchema> {
    return this.get(
      new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/setupPaymentInfo`),
      queryParams,
      signal,
    );
  }

  static getUpsellingSubscriptionSetupPaymentInfoBySiteIdThunk = createAsyncThunk<
    GaAccountAdsSetupUserInfoResponseSchema,
    { siteId: number; queryParams?: GetUpsellingSubscriptionSetupPaymentInfoBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get ads setup user info.
     *
     */
    'getUpsellingSubscriptionSetupPaymentInfoBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetUpsellingSubscriptionSetupPaymentInfoBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingSubscriptionSetupPaymentInfoBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingSubscriptionSetupPaymentInfoBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionSetupPaymentInfoBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionSetupPaymentInfoBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingSubscriptionSetupPaymentInfoBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/setupPaymentInfo',
  );
  static getUpsellingSubscriptionSetupPaymentInfoBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/setupPaymentInfo(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingSubscriptionInvoiceDataBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get budget options based on dailyBudget and modify Text based on Budget Options
   *
   */
  getUpsellingSubscriptionInvoiceDataBySiteId(
    siteId: number,
    queryParams?: GetUpsellingSubscriptionInvoiceDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountInvoiceDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/invoiceData`), queryParams, signal);
  }

  static getUpsellingSubscriptionInvoiceDataBySiteIdThunk = createAsyncThunk<
    GaAccountInvoiceDataResponseSchema,
    { siteId: number; queryParams?: GetUpsellingSubscriptionInvoiceDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get budget options based on dailyBudget and modify Text based on Budget Options
     *
     */
    'getUpsellingSubscriptionInvoiceDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetUpsellingSubscriptionInvoiceDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingSubscriptionInvoiceDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingSubscriptionInvoiceDataBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionInvoiceDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionInvoiceDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingSubscriptionInvoiceDataBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/invoiceData',
  );
  static getUpsellingSubscriptionInvoiceDataBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/invoiceData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingSubscriptionPaymentInfoBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get users payment info
   *
   */
  getUpsellingSubscriptionPaymentInfoBySiteId(
    siteId: number,
    queryParams?: GetUpsellingSubscriptionPaymentInfoBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountPaymentInfoResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/paymentInfo`), queryParams, signal);
  }

  static getUpsellingSubscriptionPaymentInfoBySiteIdThunk = createAsyncThunk<
    GaAccountPaymentInfoResponseSchema,
    { siteId: number; queryParams?: GetUpsellingSubscriptionPaymentInfoBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get users payment info
     *
     */
    'getUpsellingSubscriptionPaymentInfoBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetUpsellingSubscriptionPaymentInfoBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingSubscriptionPaymentInfoBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingSubscriptionPaymentInfoBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionPaymentInfoBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionPaymentInfoBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingSubscriptionPaymentInfoBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/paymentInfo',
  );
  static getUpsellingSubscriptionPaymentInfoBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/paymentInfo(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postUpsellingSubscriptionOrderItemsBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get order items for cost summary page (and force activate ads if parameter is sent).
   *
   */
  postUpsellingSubscriptionOrderItemsBySiteId(
    siteId: number,
    requestBody: GaAccountOrderItemsRequestSchema,
    queryParams?: PostUpsellingSubscriptionOrderItemsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountOrderItemsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/orderItems`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postUpsellingSubscriptionOrderItemsBySiteIdThunk = createAsyncThunk<
    GaAccountOrderItemsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountOrderItemsRequestSchema;
      queryParams?: PostUpsellingSubscriptionOrderItemsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get order items for cost summary page (and force activate ads if parameter is sent).
     *
     */
    'postUpsellingSubscriptionOrderItemsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountOrderItemsRequestSchema;
        queryParams?: PostUpsellingSubscriptionOrderItemsBySiteIdOpts;
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
        this.postUpsellingSubscriptionOrderItemsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.postUpsellingSubscriptionOrderItemsBySiteId(
            siteId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionOrderItemsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionOrderItemsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postUpsellingSubscriptionOrderItemsBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/orderItems',
  );
  static postUpsellingSubscriptionOrderItemsBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/orderItems(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Upselling monthly subscription to yearly subscription
   *
   */
  postUpsellingSubscriptionFromMonthlyToYearlyBySiteId(
    siteId: number,
    requestBody: null,
    queryParams: PostUpsellingSubscriptionFromMonthlyToYearlyBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<UpsellingSubscriptionResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/fromMonthlyToYearly`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdThunk = createAsyncThunk<
    UpsellingSubscriptionResponseSchema,
    {
      siteId: number;
      requestBody: null;
      queryParams: PostUpsellingSubscriptionFromMonthlyToYearlyBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Upselling monthly subscription to yearly subscription
     *
     */
    'postUpsellingSubscriptionFromMonthlyToYearlyBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: null;
        queryParams: PostUpsellingSubscriptionFromMonthlyToYearlyBySiteIdOpts;
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
        this.postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.postUpsellingSubscriptionFromMonthlyToYearlyBySiteId(
            siteId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/fromMonthlyToYearly',
  );
  static postUpsellingSubscriptionFromMonthlyToYearlyBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/fromMonthlyToYearly(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postUpsellingSubscriptionUpdateSubscriptionBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Upselling subscription
   *
   */
  postUpsellingSubscriptionUpdateSubscriptionBySiteId(
    siteId: number,
    requestBody: null,
    queryParams: PostUpsellingSubscriptionUpdateSubscriptionBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<UpsellingSubscriptionResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/updateSubscription`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postUpsellingSubscriptionUpdateSubscriptionBySiteIdThunk = createAsyncThunk<
    UpsellingSubscriptionResponseSchema,
    {
      siteId: number;
      requestBody: null;
      queryParams: PostUpsellingSubscriptionUpdateSubscriptionBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Upselling subscription
     *
     */
    'postUpsellingSubscriptionUpdateSubscriptionBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: null;
        queryParams: PostUpsellingSubscriptionUpdateSubscriptionBySiteIdOpts;
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
        this.postUpsellingSubscriptionUpdateSubscriptionBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.postUpsellingSubscriptionUpdateSubscriptionBySiteId(
            siteId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionUpdateSubscriptionBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptionUpdateSubscriptionBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postUpsellingSubscriptionUpdateSubscriptionBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/updateSubscription',
  );
  static postUpsellingSubscriptionUpdateSubscriptionBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/updateSubscription(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingSubscriptionPromoDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Returns the information used in Promo Modal on Ads Onboarding
   *
   */
  getUpsellingSubscriptionPromoDataBySiteId(
    siteId: number,
    queryParams?: GetUpsellingSubscriptionPromoDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountPromoDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/subscription/${siteId}/promoData`), queryParams, signal);
  }

  static getUpsellingSubscriptionPromoDataBySiteIdThunk = createAsyncThunk<
    GaAccountPromoDataResponseSchema,
    { siteId: number; queryParams?: GetUpsellingSubscriptionPromoDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Returns the information used in Promo Modal on Ads Onboarding
     *
     */
    'getUpsellingSubscriptionPromoDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetUpsellingSubscriptionPromoDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingSubscriptionPromoDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingSubscriptionPromoDataBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionPromoDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptionPromoDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingSubscriptionPromoDataBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscription/{siteId}/promoData',
  );
  static getUpsellingSubscriptionPromoDataBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscription/{siteId}/promoData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getUpsellingSubscriptiondataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Returns upselling subscription data
   *
   */
  getUpsellingSubscriptiondataBySiteId(
    siteId: number,
    queryParams: GetUpsellingSubscriptiondataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<UpsellingSubscriptionResponseDataSchema> {
    return this.get(new EndPoint(`/rest_api/v1/upselling/subscriptiondata/${siteId}`), queryParams, signal);
  }

  static getUpsellingSubscriptiondataBySiteIdThunk = createAsyncThunk<
    UpsellingSubscriptionResponseDataSchema,
    { siteId: number; queryParams: GetUpsellingSubscriptiondataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Returns upselling subscription data
     *
     */
    'getUpsellingSubscriptiondataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetUpsellingSubscriptiondataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getUpsellingSubscriptiondataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          upsellingStore.getUpsellingSubscriptiondataBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptiondataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getUpsellingSubscriptiondataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getUpsellingSubscriptiondataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/upselling/subscriptiondata/{siteId}');
  static getUpsellingSubscriptiondataBySiteIdUrlMockRequest = '/rest_api/v1/upselling/subscriptiondata/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Upselling world4you from Radar to RankingCoach
   *
   */
  postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteId(
    siteId: number,
    requestBody: null,
    queryParams: PostUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<UpsellingSubscriptionResellerResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/upselling/subscriptiondata/${siteId}/upsellingSubscriptionReseller`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdThunk = createAsyncThunk<
    UpsellingSubscriptionResellerResponseSchema,
    {
      siteId: number;
      requestBody: null;
      queryParams: PostUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Upselling world4you from Radar to RankingCoach
     *
     */
    'postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: null;
        queryParams: PostUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdOpts;
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
        this.postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdAbortManager._push(
          requestId,
          controller,
        );

        const result = await firstValueFrom(
          upsellingStore.postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteId(
            siteId,
            requestBody,
            queryParams,
            signal,
            contentType,
          ),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/upselling/subscriptiondata/{siteId}/upsellingSubscriptionReseller',
  );
  static postUpsellingSubscriptiondataUpsellingSubscriptionResellerBySiteIdUrlMockRequest =
    '/rest_api/v1/upselling/subscriptiondata/{siteId}/upsellingSubscriptionReseller(.*)';
}
export const upsellingStore = new UpsellingStore();
