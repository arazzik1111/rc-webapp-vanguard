/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { GaAccountAdPreviewDataResponseSchema } from '@models/swagger/GaAccountAdPreviewDataResponseSchema';
import type { GaAccountAdsSetupUserInfoResponseSchema } from '@models/swagger/GaAccountAdsSetupUserInfoResponseSchema';
import type { GaAccountAssetDeleteRequestSchema } from '@models/swagger/GaAccountAssetDeleteRequestSchema';
import type { GaAccountAssetToggleRequestSchema } from '@models/swagger/GaAccountAssetToggleRequestSchema';
import type { GaAccountCampaignEstimatesResponseSchema } from '@models/swagger/GaAccountCampaignEstimatesResponseSchema';
import type { GaAccountInvoiceDataResponseSchema } from '@models/swagger/GaAccountInvoiceDataResponseSchema';
import type { GaAccountKeywordsCloudValidationResponseSchema } from '@models/swagger/GaAccountKeywordsCloudValidationResponseSchema';
import type { GaAccountKeywordsCountPerAdgroupResponseSchema } from '@models/swagger/GaAccountKeywordsCountPerAdgroupResponseSchema';
import type { GaAccountKeywordsGeneralInputRequestSchema } from '@models/swagger/GaAccountKeywordsGeneralInputRequestSchema';
import type { GaAccountKeywordsResponseSchema } from '@models/swagger/GaAccountKeywordsResponseSchema';
import type { GaAccountKeywordsWebappValidationResponseSchema } from '@models/swagger/GaAccountKeywordsWebappValidationResponseSchema';
import type { GaAccountLogsResponseSchema } from '@models/swagger/GaAccountLogsResponseSchema';
import type { GaAccountOrderItemsRequestSchema } from '@models/swagger/GaAccountOrderItemsRequestSchema';
import type { GaAccountOrderItemsResponseSchema } from '@models/swagger/GaAccountOrderItemsResponseSchema';
import type { GaAccountPackageAdsDataResponseSchema } from '@models/swagger/GaAccountPackageAdsDataResponseSchema';
import type { GaAccountPaymentInfoResponseSchema } from '@models/swagger/GaAccountPaymentInfoResponseSchema';
import type { GaAccountPrepaidOptionsRequestSchema } from '@models/swagger/GaAccountPrepaidOptionsRequestSchema';
import type { GaAccountPrepaidOptionsResponseSchema } from '@models/swagger/GaAccountPrepaidOptionsResponseSchema';
import type { GaAccountPromoDataResponseSchema } from '@models/swagger/GaAccountPromoDataResponseSchema';
import type { GaAccountResponseSchema } from '@models/swagger/GaAccountResponseSchema';
import type { GaAccountSaveBudgetDataSchema } from '@models/swagger/GaAccountSaveBudgetDataSchema';
import type { GaAccountSaveBudgetResponseSchema } from '@models/swagger/GaAccountSaveBudgetResponseSchema';
import type { GaAccountSynchronizeCampaignsRequestSchema } from '@models/swagger/GaAccountSynchronizeCampaignsRequestSchema';
import type { GaAdAccountKeywordsResponseSchema } from '@models/swagger/GaAdAccountKeywordsResponseSchema';
import type { GaAdAccountKeywordsSchema } from '@models/swagger/GaAdAccountKeywordsSchema';
import type { GaAdAccountLogsRequestSchema } from '@models/swagger/GaAdAccountLogsRequestSchema';
import type { GaAdAccountStatusResponseSchema } from '@models/swagger/GaAdAccountStatusResponseSchema';
import type { GaAdAssetsRequestSchema } from '@models/swagger/GaAdAssetsRequestSchema';
import type { GaAdAssetsResponseSchema } from '@models/swagger/GaAdAssetsResponseSchema';
import type { GaAdGroupBudgetDataResponseSchema } from '@models/swagger/GaAdGroupBudgetDataResponseSchema';
import type { GaAdGroupKeywordsResponseSchema } from '@models/swagger/GaAdGroupKeywordsResponseSchema';
import type { GaAdGroupKeywordsSchema } from '@models/swagger/GaAdGroupKeywordsSchema';
import type { GaAdGroupsResponseSchema } from '@models/swagger/GaAdGroupsResponseSchema';
import type { GaAdgroupsStatsResponseSchema } from '@models/swagger/GaAdgroupsStatsResponseSchema';
import type { GaAdLocationsRequestSchema } from '@models/swagger/GaAdLocationsRequestSchema';
import type { GaAdLocationsResponseSchema } from '@models/swagger/GaAdLocationsResponseSchema';
import type { GaAdSchedulingRequestSchema } from '@models/swagger/GaAdSchedulingRequestSchema';
import type { GaAdSchedulingResponseSchema } from '@models/swagger/GaAdSchedulingResponseSchema';
import type { GaAdStatusRequestSchema } from '@models/swagger/GaAdStatusRequestSchema';
import type { GaAdSuspendPackagesRequestSchema } from '@models/swagger/GaAdSuspendPackagesRequestSchema';
import type { GaInitiateUpsellRequestSchema } from '@models/swagger/GaInitiateUpsellRequestSchema';
import type { GaInitiateUpsellResponseSchema } from '@models/swagger/GaInitiateUpsellResponseSchema';
import type { GaInsightBudgetHistoryResponseSchema } from '@models/swagger/GaInsightBudgetHistoryResponseSchema';
import type { GaInsightKeywordsResponseSchema } from '@models/swagger/GaInsightKeywordsResponseSchema';
import type { GaInsightReportsResponseSchema } from '@models/swagger/GaInsightReportsResponseSchema';
import type { GaInsightTaxesResponseSchema } from '@models/swagger/GaInsightTaxesResponseSchema';
import type { GaPhoneConfirmationResponseSchema } from '@models/swagger/GaPhoneConfirmationResponseSchema';
import type { GaPhoneConfirmationSendRequestSchema } from '@models/swagger/GaPhoneConfirmationSendRequestSchema';
import type { GaPhoneConfirmationSendResponseSchema } from '@models/swagger/GaPhoneConfirmationSendResponseSchema';
import type { GaPhoneConfirmationValidateRequestSchema } from '@models/swagger/GaPhoneConfirmationValidateRequestSchema';
import type { GaPhoneConfirmationValidateResponseSchema } from '@models/swagger/GaPhoneConfirmationValidateResponseSchema';
import type { GaSavePathsRequestSchema } from '@models/swagger/GaSavePathsRequestSchema';
import type { GaSavePathsResponseSchema } from '@models/swagger/GaSavePathsResponseSchema';
import type { GaSelectedAdsRequestSchema } from '@models/swagger/GaSelectedAdsRequestSchema';
import type { GaSelectedAdsResponseSchema } from '@models/swagger/GaSelectedAdsResponseSchema';
import type { GaSuggestedAdsResponseSchema } from '@models/swagger/GaSuggestedAdsResponseSchema';
import type { GaUpdateDescriptionsRequestSchema } from '@models/swagger/GaUpdateDescriptionsRequestSchema';
import type { GaUpdateDescriptionsResponseSchema } from '@models/swagger/GaUpdateDescriptionsResponseSchema';
import type { GaUpdateHeadlinesRequestSchema } from '@models/swagger/GaUpdateHeadlinesRequestSchema';
import type { GaUpdateHeadlinesResponseSchema } from '@models/swagger/GaUpdateHeadlinesResponseSchema';
import type { InsightsDataRequestSchema } from '@models/swagger/InsightsDataRequestSchema';
import type { LineChartDataRequestSchema } from '@models/swagger/LineChartDataRequestSchema';
import type { LineChartResponseSchema } from '@models/swagger/LineChartResponseSchema';
import type { TableDataRequestSchema } from '@models/swagger/TableDataRequestSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetGaAccountStatusBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountChangeStatusBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountSuspendPackagesBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountExtensionsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountLocationsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountLocationsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountInvoiceDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountPrepaidBudgetOptionsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountPromoDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountOrderItemsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountSynchronizeCampaignsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type GetGaAccountBudgetBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountBudgetBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountPaymentinfoBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountKeywordsDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountKeywordsDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountCampaignEstimatesBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountSetupUserInfoBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountPreviewDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountPackageDataBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountLogsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountUpsellingInitiatedBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountAssetsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountAssetsSaveBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountAssetsDeleteBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountAssetsToggleStatusBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountInsightsPerformanceBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  adGroupId?: number;
};
export type PostGaAccountInsightsKeywordsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  adGroupId?: number;
};
export type PostGaAccountInsightsTaxesBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountInsightsBudgetHistoryBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  adGroupId?: number;
};
export type PostGaAccountInsightsReportsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  adGroupId?: number;
};
export type PostGaAccountInsightsAdgroupsStatsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountKeywordsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  type?: string;
};
export type PostGaAccountKeywordsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountKeywordsValidateOnGoogleBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountKeywordsValidateBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaAccountKeywordsDetailsBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountKeywordsCountPerAdgroupBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountSchedulingBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PutGaAccountSchedulingBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaAccountgroupsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  accountId: number;
};
export type GetGaGroupBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PostGaGroupBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type DeleteGaGroupBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PutGaGroupChangestatusByGroupidBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type GetGaGroupSuggestedBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;

  limit?: number;

  offset?: number;
};
export type PostGaGroupSelectedBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PutGaGroupPathsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PutGaGroupHeadlinesBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PutGaGroupDescriptionsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type GetGaGroupKeywordsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type PostGaGroupKeywordsBySiteIdOpts = {
  FE_UNIQUE_ID?: string;

  groupId: number;
};
export type GetGaPhoneconfirmationBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaPhoneconfirmationBySiteIdOpts = { FE_UNIQUE_ID?: string };
export type PostGaPhoneconfirmationValidateBySiteIdOpts = { FE_UNIQUE_ID?: string };

export class GaStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountStatusBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get campaigns status for specified site
   *
   */
  getGaAccountStatusBySiteId(
    siteId: number,
    queryParams?: GetGaAccountStatusBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdAccountStatusResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/status`), queryParams, signal);
  }

  static getGaAccountStatusBySiteIdThunk = createAsyncThunk<
    GaAdAccountStatusResponseSchema,
    { siteId: number; queryParams?: GetGaAccountStatusBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get campaigns status for specified site
     *
     */
    'getGaAccountStatusBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountStatusBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountStatusBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountStatusBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountStatusBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountStatusBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountStatusBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/status');
  static getGaAccountStatusBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/status(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountChangeStatusBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Change account status for specific site
   *
   */
  putGaAccountChangeStatusBySiteId(
    siteId: number,
    requestBody: GaAdStatusRequestSchema,
    queryParams?: PutGaAccountChangeStatusBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/account/${siteId}/changeStatus`), requestBody, queryParams, signal);
  }

  static putGaAccountChangeStatusBySiteIdThunk = createAsyncThunk<
    GaAccountResponseSchema,
    { siteId: number; requestBody: GaAdStatusRequestSchema; queryParams?: PutGaAccountChangeStatusBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Change account status for specific site
     *
     */
    'putGaAccountChangeStatusBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaAdStatusRequestSchema; queryParams?: PutGaAccountChangeStatusBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountChangeStatusBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountChangeStatusBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountChangeStatusBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountChangeStatusBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountChangeStatusBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/changeStatus');
  static putGaAccountChangeStatusBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/changeStatus(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountSuspendPackagesBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Change the suspend packages initiation to true or false for a specific site
   */

  /**
   * Change the suspend packages initiation to true or false for a specific site
   * Change the suspend packages initiation to true or false for a specific site
   */
  putGaAccountSuspendPackagesBySiteId(
    siteId: number,
    requestBody: GaAdSuspendPackagesRequestSchema,
    queryParams?: PutGaAccountSuspendPackagesBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountResponseSchema> {
    return this.put(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/suspendPackages`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static putGaAccountSuspendPackagesBySiteIdThunk = createAsyncThunk<
    GaAccountResponseSchema,
    {
      siteId: number;
      requestBody: GaAdSuspendPackagesRequestSchema;
      queryParams?: PutGaAccountSuspendPackagesBySiteIdOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Change the suspend packages initiation to true or false for a specific site
     * Change the suspend packages initiation to true or false for a specific site
     */
    'putGaAccountSuspendPackagesBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: {
        siteId: number;
        requestBody: GaAdSuspendPackagesRequestSchema;
        queryParams?: PutGaAccountSuspendPackagesBySiteIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountSuspendPackagesBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountSuspendPackagesBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountSuspendPackagesBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountSuspendPackagesBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountSuspendPackagesBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/suspendPackages');
  static putGaAccountSuspendPackagesBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/suspendPackages(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountExtensionsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get extensions for specified site
   *
   */
  getGaAccountExtensionsBySiteId(
    siteId: number,
    queryParams?: GetGaAccountExtensionsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdAssetsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/extensions`), queryParams, signal);
  }

  static getGaAccountExtensionsBySiteIdThunk = createAsyncThunk<
    GaAdAssetsResponseSchema,
    { siteId: number; queryParams?: GetGaAccountExtensionsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get extensions for specified site
     *
     */
    'getGaAccountExtensionsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountExtensionsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountExtensionsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountExtensionsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountExtensionsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountExtensionsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountExtensionsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/extensions');
  static getGaAccountExtensionsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/extensions(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountLocationsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get the locations for specified site
   *
   */
  getGaAccountLocationsBySiteId(
    siteId: number,
    queryParams?: GetGaAccountLocationsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdLocationsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/locations`), queryParams, signal);
  }

  static getGaAccountLocationsBySiteIdThunk = createAsyncThunk<
    GaAdLocationsResponseSchema,
    { siteId: number; queryParams?: GetGaAccountLocationsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the locations for specified site
     *
     */
    'getGaAccountLocationsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountLocationsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountLocationsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountLocationsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountLocationsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountLocationsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountLocationsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/locations');
  static getGaAccountLocationsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/locations(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountLocationsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save locations for specified site
   *
   */
  putGaAccountLocationsBySiteId(
    siteId: number,
    requestBody: GaAdLocationsRequestSchema,
    queryParams?: PutGaAccountLocationsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdLocationsResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/account/${siteId}/locations`), requestBody, queryParams, signal);
  }

  static putGaAccountLocationsBySiteIdThunk = createAsyncThunk<
    GaAdLocationsResponseSchema,
    { siteId: number; requestBody: GaAdLocationsRequestSchema; queryParams?: PutGaAccountLocationsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save locations for specified site
     *
     */
    'putGaAccountLocationsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaAdLocationsRequestSchema; queryParams?: PutGaAccountLocationsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountLocationsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountLocationsBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountLocationsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountLocationsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountLocationsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/locations');
  static putGaAccountLocationsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/locations(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountInvoiceDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get budget options based on dailyBudget and modify Text based on Budget Options
   *
   */
  getGaAccountInvoiceDataBySiteId(
    siteId: number,
    queryParams?: GetGaAccountInvoiceDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountInvoiceDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/invoiceData`), queryParams, signal);
  }

  static getGaAccountInvoiceDataBySiteIdThunk = createAsyncThunk<
    GaAccountInvoiceDataResponseSchema,
    { siteId: number; queryParams?: GetGaAccountInvoiceDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get budget options based on dailyBudget and modify Text based on Budget Options
     *
     */
    'getGaAccountInvoiceDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountInvoiceDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountInvoiceDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountInvoiceDataBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountInvoiceDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountInvoiceDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountInvoiceDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/invoiceData');
  static getGaAccountInvoiceDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/invoiceData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountPrepaidBudgetOptionsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get budget options based on dailyBudget and modify Text based on Budget Options
   *
   */
  postGaAccountPrepaidBudgetOptionsBySiteId(
    siteId: number,
    requestBody: GaAccountPrepaidOptionsRequestSchema,
    queryParams?: PostGaAccountPrepaidBudgetOptionsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountPrepaidOptionsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/prepaidBudgetOptions`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountPrepaidBudgetOptionsBySiteIdThunk = createAsyncThunk<
    GaAccountPrepaidOptionsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountPrepaidOptionsRequestSchema;
      queryParams?: PostGaAccountPrepaidBudgetOptionsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get budget options based on dailyBudget and modify Text based on Budget Options
     *
     */
    'postGaAccountPrepaidBudgetOptionsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountPrepaidOptionsRequestSchema;
        queryParams?: PostGaAccountPrepaidBudgetOptionsBySiteIdOpts;
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
        this.postGaAccountPrepaidBudgetOptionsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountPrepaidBudgetOptionsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountPrepaidBudgetOptionsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountPrepaidBudgetOptionsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountPrepaidBudgetOptionsBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account/{siteId}/prepaidBudgetOptions',
  );
  static postGaAccountPrepaidBudgetOptionsBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account/{siteId}/prepaidBudgetOptions(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountPromoDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Returns the information used in Promo Modal on Ads Onboarding
   *
   */
  getGaAccountPromoDataBySiteId(
    siteId: number,
    queryParams?: GetGaAccountPromoDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountPromoDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/promoData`), queryParams, signal);
  }

  static getGaAccountPromoDataBySiteIdThunk = createAsyncThunk<
    GaAccountPromoDataResponseSchema,
    { siteId: number; queryParams?: GetGaAccountPromoDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Returns the information used in Promo Modal on Ads Onboarding
     *
     */
    'getGaAccountPromoDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountPromoDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountPromoDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountPromoDataBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPromoDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPromoDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountPromoDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/promoData');
  static getGaAccountPromoDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/promoData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountOrderItemsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get order items for cost summary page (and force activate ads if parameter is sent).
   *
   */
  postGaAccountOrderItemsBySiteId(
    siteId: number,
    requestBody: GaAccountOrderItemsRequestSchema,
    queryParams?: PostGaAccountOrderItemsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountOrderItemsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/orderItems`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountOrderItemsBySiteIdThunk = createAsyncThunk<
    GaAccountOrderItemsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountOrderItemsRequestSchema;
      queryParams?: PostGaAccountOrderItemsBySiteIdOpts;
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
    'postGaAccountOrderItemsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountOrderItemsRequestSchema;
        queryParams?: PostGaAccountOrderItemsBySiteIdOpts;
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
        this.postGaAccountOrderItemsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountOrderItemsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountOrderItemsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountOrderItemsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountOrderItemsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/orderItems');
  static postGaAccountOrderItemsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/orderItems(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountSynchronizeCampaignsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Synchronizes GA account campaigns to both Google and Zuora.
   *
   */
  postGaAccountSynchronizeCampaignsBySiteId(
    siteId: number,
    requestBody: GaAccountSynchronizeCampaignsRequestSchema,
    queryParams: PostGaAccountSynchronizeCampaignsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/synchronizeCampaigns`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountSynchronizeCampaignsBySiteIdThunk = createAsyncThunk<
    GaAccountResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountSynchronizeCampaignsRequestSchema;
      queryParams: PostGaAccountSynchronizeCampaignsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Synchronizes GA account campaigns to both Google and Zuora.
     *
     */
    'postGaAccountSynchronizeCampaignsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountSynchronizeCampaignsRequestSchema;
        queryParams: PostGaAccountSynchronizeCampaignsBySiteIdOpts;
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
        this.postGaAccountSynchronizeCampaignsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountSynchronizeCampaignsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountSynchronizeCampaignsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountSynchronizeCampaignsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountSynchronizeCampaignsBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account/{siteId}/synchronizeCampaigns',
  );
  static postGaAccountSynchronizeCampaignsBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account/{siteId}/synchronizeCampaigns(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountBudgetBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get account budget informations
   *
   */
  getGaAccountBudgetBySiteId(
    siteId: number,
    queryParams?: GetGaAccountBudgetBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdGroupBudgetDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/budget`), queryParams, signal);
  }

  static getGaAccountBudgetBySiteIdThunk = createAsyncThunk<
    GaAdGroupBudgetDataResponseSchema,
    { siteId: number; queryParams?: GetGaAccountBudgetBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get account budget informations
     *
     */
    'getGaAccountBudgetBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountBudgetBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountBudgetBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountBudgetBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountBudgetBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountBudgetBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountBudgetBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/budget');
  static getGaAccountBudgetBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/budget(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountBudgetBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save budget and set syncronization status
   *
   */
  putGaAccountBudgetBySiteId(
    siteId: number,
    requestBody: GaAccountSaveBudgetDataSchema,
    queryParams?: PutGaAccountBudgetBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountSaveBudgetResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/account/${siteId}/budget`), requestBody, queryParams, signal);
  }

  static putGaAccountBudgetBySiteIdThunk = createAsyncThunk<
    GaAccountSaveBudgetResponseSchema,
    { siteId: number; requestBody: GaAccountSaveBudgetDataSchema; queryParams?: PutGaAccountBudgetBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save budget and set syncronization status
     *
     */
    'putGaAccountBudgetBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaAccountSaveBudgetDataSchema; queryParams?: PutGaAccountBudgetBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountBudgetBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountBudgetBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountBudgetBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountBudgetBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountBudgetBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/budget');
  static putGaAccountBudgetBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/budget(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountPaymentinfoBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get users payment info
   *
   */
  getGaAccountPaymentinfoBySiteId(
    siteId: number,
    queryParams?: GetGaAccountPaymentinfoBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountPaymentInfoResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/paymentinfo`), queryParams, signal);
  }

  static getGaAccountPaymentinfoBySiteIdThunk = createAsyncThunk<
    GaAccountPaymentInfoResponseSchema,
    { siteId: number; queryParams?: GetGaAccountPaymentinfoBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get users payment info
     *
     */
    'getGaAccountPaymentinfoBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountPaymentinfoBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountPaymentinfoBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountPaymentinfoBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPaymentinfoBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPaymentinfoBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountPaymentinfoBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/paymentinfo');
  static getGaAccountPaymentinfoBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/paymentinfo(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get the acount for specified site
   *
   */
  getGaAccountBySiteId(
    siteId: number,
    queryParams?: GetGaAccountBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}`), queryParams, signal);
  }

  static getGaAccountBySiteIdThunk = createAsyncThunk<
    GaAccountResponseSchema,
    { siteId: number; queryParams?: GetGaAccountBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the acount for specified site
     *
     */
    'getGaAccountBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}');
  static getGaAccountBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountKeywordsDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get the acount keywords for specified site
   *
   */
  getGaAccountKeywordsDataBySiteId(
    siteId: number,
    queryParams?: GetGaAccountKeywordsDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/keywordsData`), queryParams, signal);
  }

  static getGaAccountKeywordsDataBySiteIdThunk = createAsyncThunk<
    GaAccountResponseSchema,
    { siteId: number; queryParams?: GetGaAccountKeywordsDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the acount keywords for specified site
     *
     */
    'getGaAccountKeywordsDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountKeywordsDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountKeywordsDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountKeywordsDataBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountKeywordsDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/keywordsData');
  static getGaAccountKeywordsDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/keywordsData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountKeywordsDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Adds keywords to the keyword table if not found, adds the keyword to each campaign and finaly syncs the keywords to Google Account
   *
   */
  postGaAccountKeywordsDataBySiteId(
    siteId: number,
    requestBody: GaAdAccountKeywordsSchema,
    queryParams?: PostGaAccountKeywordsDataBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdAccountKeywordsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/keywordsData`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountKeywordsDataBySiteIdThunk = createAsyncThunk<
    GaAdAccountKeywordsResponseSchema,
    {
      siteId: number;
      requestBody: GaAdAccountKeywordsSchema;
      queryParams?: PostGaAccountKeywordsDataBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Adds keywords to the keyword table if not found, adds the keyword to each campaign and finaly syncs the keywords to Google Account
     *
     */
    'postGaAccountKeywordsDataBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAdAccountKeywordsSchema;
        queryParams?: PostGaAccountKeywordsDataBySiteIdOpts;
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
        this.postGaAccountKeywordsDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountKeywordsDataBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountKeywordsDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/keywordsData');
  static postGaAccountKeywordsDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/keywordsData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountCampaignEstimatesBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Returns data from cloud for campaignEstimates
   *
   */
  getGaAccountCampaignEstimatesBySiteId(
    siteId: number,
    queryParams?: GetGaAccountCampaignEstimatesBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountCampaignEstimatesResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/campaignEstimates`), queryParams, signal);
  }

  static getGaAccountCampaignEstimatesBySiteIdThunk = createAsyncThunk<
    GaAccountCampaignEstimatesResponseSchema,
    { siteId: number; queryParams?: GetGaAccountCampaignEstimatesBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Returns data from cloud for campaignEstimates
     *
     */
    'getGaAccountCampaignEstimatesBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountCampaignEstimatesBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountCampaignEstimatesBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountCampaignEstimatesBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountCampaignEstimatesBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountCampaignEstimatesBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountCampaignEstimatesBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account/{siteId}/campaignEstimates',
  );
  static getGaAccountCampaignEstimatesBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/campaignEstimates(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountSetupUserInfoBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get ads setup user info.
   *
   */
  getGaAccountSetupUserInfoBySiteId(
    siteId: number,
    queryParams?: GetGaAccountSetupUserInfoBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountAdsSetupUserInfoResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/setupUserInfo`), queryParams, signal);
  }

  static getGaAccountSetupUserInfoBySiteIdThunk = createAsyncThunk<
    GaAccountAdsSetupUserInfoResponseSchema,
    { siteId: number; queryParams?: GetGaAccountSetupUserInfoBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get ads setup user info.
     *
     */
    'getGaAccountSetupUserInfoBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountSetupUserInfoBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountSetupUserInfoBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountSetupUserInfoBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountSetupUserInfoBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountSetupUserInfoBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountSetupUserInfoBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/setupUserInfo');
  static getGaAccountSetupUserInfoBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/setupUserInfo(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountPreviewDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get ad preview data.
   *
   */
  getGaAccountPreviewDataBySiteId(
    siteId: number,
    queryParams?: GetGaAccountPreviewDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountAdPreviewDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/previewData`), queryParams, signal);
  }

  static getGaAccountPreviewDataBySiteIdThunk = createAsyncThunk<
    GaAccountAdPreviewDataResponseSchema,
    { siteId: number; queryParams?: GetGaAccountPreviewDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get ad preview data.
     *
     */
    'getGaAccountPreviewDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountPreviewDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountPreviewDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountPreviewDataBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPreviewDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPreviewDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountPreviewDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/previewData');
  static getGaAccountPreviewDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/previewData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountPackageDataBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Returns Package ads data
   *
   */
  getGaAccountPackageDataBySiteId(
    siteId: number,
    queryParams?: GetGaAccountPackageDataBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountPackageAdsDataResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account/${siteId}/packageData`), queryParams, signal);
  }

  static getGaAccountPackageDataBySiteIdThunk = createAsyncThunk<
    GaAccountPackageAdsDataResponseSchema,
    { siteId: number; queryParams?: GetGaAccountPackageDataBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Returns Package ads data
     *
     */
    'getGaAccountPackageDataBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountPackageDataBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountPackageDataBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountPackageDataBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPackageDataBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountPackageDataBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountPackageDataBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/packageData');
  static getGaAccountPackageDataBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/packageData(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountLogsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save adaccount logs in elastic
   *
   */
  putGaAccountLogsBySiteId(
    siteId: number,
    requestBody: GaAdAccountLogsRequestSchema,
    queryParams?: PutGaAccountLogsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountLogsResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/account/${siteId}/logs`), requestBody, queryParams, signal);
  }

  static putGaAccountLogsBySiteIdThunk = createAsyncThunk<
    GaAccountLogsResponseSchema,
    { siteId: number; requestBody: GaAdAccountLogsRequestSchema; queryParams?: PutGaAccountLogsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save adaccount logs in elastic
     *
     */
    'putGaAccountLogsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaAdAccountLogsRequestSchema; queryParams?: PutGaAccountLogsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountLogsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.putGaAccountLogsBySiteId(siteId, requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountLogsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountLogsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountLogsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account/{siteId}/logs');
  static putGaAccountLogsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account/{siteId}/logs(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountUpsellingInitiatedBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save upselling initiated data in user settings
   *
   */
  putGaAccountUpsellingInitiatedBySiteId(
    siteId: number,
    requestBody: GaInitiateUpsellRequestSchema,
    queryParams?: PutGaAccountUpsellingInitiatedBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaInitiateUpsellResponseSchema> {
    return this.put(
      new EndPoint(`/rest_api/v1/ga/account/${siteId}/upselling_initiated`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static putGaAccountUpsellingInitiatedBySiteIdThunk = createAsyncThunk<
    GaInitiateUpsellResponseSchema,
    {
      siteId: number;
      requestBody: GaInitiateUpsellRequestSchema;
      queryParams?: PutGaAccountUpsellingInitiatedBySiteIdOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save upselling initiated data in user settings
     *
     */
    'putGaAccountUpsellingInitiatedBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: {
        siteId: number;
        requestBody: GaInitiateUpsellRequestSchema;
        queryParams?: PutGaAccountUpsellingInitiatedBySiteIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountUpsellingInitiatedBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountUpsellingInitiatedBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountUpsellingInitiatedBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountUpsellingInitiatedBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountUpsellingInitiatedBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account/{siteId}/upselling_initiated',
  );
  static putGaAccountUpsellingInitiatedBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account/{siteId}/upselling_initiated(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountAssetsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get assets for specified site
   *
   */
  getGaAccountAssetsBySiteId(
    siteId: number,
    queryParams?: GetGaAccountAssetsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdAssetsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account_assets/${siteId}`), queryParams, signal);
  }

  static getGaAccountAssetsBySiteIdThunk = createAsyncThunk<
    GaAdAssetsResponseSchema,
    { siteId: number; queryParams?: GetGaAccountAssetsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get assets for specified site
     *
     */
    'getGaAccountAssetsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountAssetsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountAssetsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountAssetsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountAssetsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountAssetsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountAssetsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_assets/{siteId}');
  static getGaAccountAssetsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_assets/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountAssetsSaveBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Saves the user assets
   *
   */
  postGaAccountAssetsSaveBySiteId(
    siteId: number,
    requestBody: GaAdAssetsRequestSchema,
    queryParams?: PostGaAccountAssetsSaveBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdAssetsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_assets/${siteId}/save`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountAssetsSaveBySiteIdThunk = createAsyncThunk<
    GaAdAssetsResponseSchema,
    {
      siteId: number;
      requestBody: GaAdAssetsRequestSchema;
      queryParams?: PostGaAccountAssetsSaveBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Saves the user assets
     *
     */
    'postGaAccountAssetsSaveBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAdAssetsRequestSchema;
        queryParams?: PostGaAccountAssetsSaveBySiteIdOpts;
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
        this.postGaAccountAssetsSaveBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountAssetsSaveBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsSaveBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsSaveBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountAssetsSaveBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_assets/{siteId}/save');
  static postGaAccountAssetsSaveBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_assets/{siteId}/save(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountAssetsDeleteBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Deletes the user's asset
   *
   */
  postGaAccountAssetsDeleteBySiteId(
    siteId: number,
    requestBody: GaAccountAssetDeleteRequestSchema,
    queryParams?: PostGaAccountAssetsDeleteBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdAssetsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_assets/${siteId}/delete`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountAssetsDeleteBySiteIdThunk = createAsyncThunk<
    GaAdAssetsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountAssetDeleteRequestSchema;
      queryParams?: PostGaAccountAssetsDeleteBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Deletes the user's asset
     *
     */
    'postGaAccountAssetsDeleteBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountAssetDeleteRequestSchema;
        queryParams?: PostGaAccountAssetsDeleteBySiteIdOpts;
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
        this.postGaAccountAssetsDeleteBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountAssetsDeleteBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsDeleteBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsDeleteBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountAssetsDeleteBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_assets/{siteId}/delete');
  static postGaAccountAssetsDeleteBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_assets/{siteId}/delete(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountAssetsToggleStatusBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Toggle the user's asset
   *
   */
  postGaAccountAssetsToggleStatusBySiteId(
    siteId: number,
    requestBody: GaAccountAssetToggleRequestSchema,
    queryParams?: PostGaAccountAssetsToggleStatusBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdAssetsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_assets/${siteId}/toggleStatus`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountAssetsToggleStatusBySiteIdThunk = createAsyncThunk<
    GaAdAssetsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountAssetToggleRequestSchema;
      queryParams?: PostGaAccountAssetsToggleStatusBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Toggle the user's asset
     *
     */
    'postGaAccountAssetsToggleStatusBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountAssetToggleRequestSchema;
        queryParams?: PostGaAccountAssetsToggleStatusBySiteIdOpts;
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
        this.postGaAccountAssetsToggleStatusBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountAssetsToggleStatusBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsToggleStatusBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountAssetsToggleStatusBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountAssetsToggleStatusBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_assets/{siteId}/toggleStatus',
  );
  static postGaAccountAssetsToggleStatusBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_assets/{siteId}/toggleStatus(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsPerformanceBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get preformance report data for a specific date range (clicks and impressions)
   *
   */
  postGaAccountInsightsPerformanceBySiteId(
    siteId: number,
    requestBody: LineChartDataRequestSchema,
    queryParams: PostGaAccountInsightsPerformanceBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<LineChartResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/performance`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsPerformanceBySiteIdThunk = createAsyncThunk<
    LineChartResponseSchema,
    {
      siteId: number;
      requestBody: LineChartDataRequestSchema;
      queryParams: PostGaAccountInsightsPerformanceBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get preformance report data for a specific date range (clicks and impressions)
     *
     */
    'postGaAccountInsightsPerformanceBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: LineChartDataRequestSchema;
        queryParams: PostGaAccountInsightsPerformanceBySiteIdOpts;
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
        this.postGaAccountInsightsPerformanceBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsPerformanceBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsPerformanceBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsPerformanceBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsPerformanceBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_insights/{siteId}/performance',
  );
  static postGaAccountInsightsPerformanceBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_insights/{siteId}/performance(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsKeywordsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get keywords report data for a specific period
   *
   */
  postGaAccountInsightsKeywordsBySiteId(
    siteId: number,
    requestBody: TableDataRequestSchema,
    queryParams: PostGaAccountInsightsKeywordsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaInsightKeywordsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/keywords`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsKeywordsBySiteIdThunk = createAsyncThunk<
    GaInsightKeywordsResponseSchema,
    {
      siteId: number;
      requestBody: TableDataRequestSchema;
      queryParams: PostGaAccountInsightsKeywordsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get keywords report data for a specific period
     *
     */
    'postGaAccountInsightsKeywordsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: TableDataRequestSchema;
        queryParams: PostGaAccountInsightsKeywordsBySiteIdOpts;
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
        this.postGaAccountInsightsKeywordsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsKeywordsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsKeywordsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsKeywordsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsKeywordsBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_insights/{siteId}/keywords',
  );
  static postGaAccountInsightsKeywordsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_insights/{siteId}/keywords(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsTaxesBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get google coupons , corrections and digital fees report data for a specific date range
   *
   */
  postGaAccountInsightsTaxesBySiteId(
    siteId: number,
    requestBody: LineChartDataRequestSchema,
    queryParams?: PostGaAccountInsightsTaxesBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaInsightTaxesResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/taxes`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsTaxesBySiteIdThunk = createAsyncThunk<
    GaInsightTaxesResponseSchema,
    {
      siteId: number;
      requestBody: LineChartDataRequestSchema;
      queryParams?: PostGaAccountInsightsTaxesBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get google coupons , corrections and digital fees report data for a specific date range
     *
     */
    'postGaAccountInsightsTaxesBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: LineChartDataRequestSchema;
        queryParams?: PostGaAccountInsightsTaxesBySiteIdOpts;
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
        this.postGaAccountInsightsTaxesBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsTaxesBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsTaxesBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsTaxesBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsTaxesBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_insights/{siteId}/taxes');
  static postGaAccountInsightsTaxesBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_insights/{siteId}/taxes(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsBudgetHistoryBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get the budget History report data for a specific period
   *
   */
  postGaAccountInsightsBudgetHistoryBySiteId(
    siteId: number,
    requestBody: TableDataRequestSchema,
    queryParams: PostGaAccountInsightsBudgetHistoryBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaInsightBudgetHistoryResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/budgetHistory`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsBudgetHistoryBySiteIdThunk = createAsyncThunk<
    GaInsightBudgetHistoryResponseSchema,
    {
      siteId: number;
      requestBody: TableDataRequestSchema;
      queryParams: PostGaAccountInsightsBudgetHistoryBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the budget History report data for a specific period
     *
     */
    'postGaAccountInsightsBudgetHistoryBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: TableDataRequestSchema;
        queryParams: PostGaAccountInsightsBudgetHistoryBySiteIdOpts;
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
        this.postGaAccountInsightsBudgetHistoryBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsBudgetHistoryBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsBudgetHistoryBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsBudgetHistoryBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsBudgetHistoryBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_insights/{siteId}/budgetHistory',
  );
  static postGaAccountInsightsBudgetHistoryBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_insights/{siteId}/budgetHistory(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsReportsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get the acount for specified site
   *
   */
  postGaAccountInsightsReportsBySiteId(
    siteId: number,
    requestBody: TableDataRequestSchema,
    queryParams: PostGaAccountInsightsReportsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaInsightReportsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/reports`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsReportsBySiteIdThunk = createAsyncThunk<
    GaInsightReportsResponseSchema,
    {
      siteId: number;
      requestBody: TableDataRequestSchema;
      queryParams: PostGaAccountInsightsReportsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the acount for specified site
     *
     */
    'postGaAccountInsightsReportsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: TableDataRequestSchema;
        queryParams: PostGaAccountInsightsReportsBySiteIdOpts;
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
        this.postGaAccountInsightsReportsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsReportsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsReportsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsReportsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsReportsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_insights/{siteId}/reports');
  static postGaAccountInsightsReportsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_insights/{siteId}/reports(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountInsightsAdgroupsStatsBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Get the statistics for ad groups
   *
   */
  postGaAccountInsightsAdgroupsStatsBySiteId(
    siteId: number,
    requestBody: InsightsDataRequestSchema,
    queryParams?: PostGaAccountInsightsAdgroupsStatsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdgroupsStatsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_insights/${siteId}/adgroupsStats`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountInsightsAdgroupsStatsBySiteIdThunk = createAsyncThunk<
    GaAdgroupsStatsResponseSchema,
    {
      siteId: number;
      requestBody: InsightsDataRequestSchema;
      queryParams?: PostGaAccountInsightsAdgroupsStatsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the statistics for ad groups
     *
     */
    'postGaAccountInsightsAdgroupsStatsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: InsightsDataRequestSchema;
        queryParams?: PostGaAccountInsightsAdgroupsStatsBySiteIdOpts;
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
        this.postGaAccountInsightsAdgroupsStatsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountInsightsAdgroupsStatsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsAdgroupsStatsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountInsightsAdgroupsStatsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountInsightsAdgroupsStatsBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_insights/{siteId}/adgroupsStats',
  );
  static postGaAccountInsightsAdgroupsStatsBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_insights/{siteId}/adgroupsStats(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountKeywordsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Index function for ad account keywords. Returns the account keywords. Keyword type optional parameter can be added
   *
   */
  getGaAccountKeywordsBySiteId(
    siteId: number,
    queryParams: GetGaAccountKeywordsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountKeywordsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}`), queryParams, signal);
  }

  static getGaAccountKeywordsBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsResponseSchema,
    { siteId: number; queryParams: GetGaAccountKeywordsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Index function for ad account keywords. Returns the account keywords. Keyword type optional parameter can be added
     *
     */
    'getGaAccountKeywordsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetGaAccountKeywordsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountKeywordsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountKeywordsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountKeywordsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_keywords/{siteId}');
  static getGaAccountKeywordsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_keywords/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountKeywordsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Requires only keywords array, currentKeywords array is not needed
   */

  /**
   * Save function for ad account keywords. Returns a message if the keywords were successfully synced to cloud after saving in db.
   * Requires only keywords array, currentKeywords array is not needed
   */
  postGaAccountKeywordsBySiteId(
    siteId: number,
    requestBody: GaAccountKeywordsGeneralInputRequestSchema,
    queryParams?: PostGaAccountKeywordsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountKeywordsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountKeywordsBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountKeywordsGeneralInputRequestSchema;
      queryParams?: PostGaAccountKeywordsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save function for ad account keywords. Returns a message if the keywords were successfully synced to cloud after saving in db.
     * Requires only keywords array, currentKeywords array is not needed
     */
    'postGaAccountKeywordsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountKeywordsGeneralInputRequestSchema;
        queryParams?: PostGaAccountKeywordsBySiteIdOpts;
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
        this.postGaAccountKeywordsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountKeywordsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountKeywordsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_keywords/{siteId}');
  static postGaAccountKeywordsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_keywords/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountKeywordsValidateOnGoogleBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();
  /**
   * Requires only keywords array, currentKeywords array is not needed
   */

  /**
   * Validates through API call using Google Methods. Returns a message if the keyword/s is/are valid
   * Requires only keywords array, currentKeywords array is not needed
   */
  postGaAccountKeywordsValidateOnGoogleBySiteId(
    siteId: number,
    requestBody: GaAccountKeywordsGeneralInputRequestSchema,
    queryParams?: PostGaAccountKeywordsValidateOnGoogleBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountKeywordsCloudValidationResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}/validateOnGoogle`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountKeywordsValidateOnGoogleBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsCloudValidationResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountKeywordsGeneralInputRequestSchema;
      queryParams?: PostGaAccountKeywordsValidateOnGoogleBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Validates through API call using Google Methods. Returns a message if the keyword/s is/are valid
     * Requires only keywords array, currentKeywords array is not needed
     */
    'postGaAccountKeywordsValidateOnGoogleBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountKeywordsGeneralInputRequestSchema;
        queryParams?: PostGaAccountKeywordsValidateOnGoogleBySiteIdOpts;
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
        this.postGaAccountKeywordsValidateOnGoogleBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountKeywordsValidateOnGoogleBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsValidateOnGoogleBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsValidateOnGoogleBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountKeywordsValidateOnGoogleBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_keywords/{siteId}/validateOnGoogle',
  );
  static postGaAccountKeywordsValidateOnGoogleBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_keywords/{siteId}/validateOnGoogle(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountKeywordsValidateBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Used for checking character length and duplication. Requires both current keywords array as well as new keywords array
   */

  /**
   * Validates server side, using functions. No validation calls are made through API. Returns a message only if keywords are invalid.
   * Used for checking character length and duplication. Requires both current keywords array as well as new keywords array
   */
  postGaAccountKeywordsValidateBySiteId(
    siteId: number,
    requestBody: GaAccountKeywordsGeneralInputRequestSchema,
    queryParams?: PostGaAccountKeywordsValidateBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountKeywordsWebappValidationResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}/validate`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountKeywordsValidateBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsWebappValidationResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountKeywordsGeneralInputRequestSchema;
      queryParams?: PostGaAccountKeywordsValidateBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Validates server side, using functions. No validation calls are made through API. Returns a message only if keywords are invalid.
     * Used for checking character length and duplication. Requires both current keywords array as well as new keywords array
     */
    'postGaAccountKeywordsValidateBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountKeywordsGeneralInputRequestSchema;
        queryParams?: PostGaAccountKeywordsValidateBySiteIdOpts;
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
        this.postGaAccountKeywordsValidateBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountKeywordsValidateBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsValidateBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsValidateBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountKeywordsValidateBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_keywords/{siteId}/validate',
  );
  static postGaAccountKeywordsValidateBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_keywords/{siteId}/validate(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaAccountKeywordsDetailsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Returns search volume, cost per click, ranking position and score percentage of each keyword in an array
   */

  /**
   * Gets the keywords details from google. Required an array of keywords. Idealy used after validateOnGoogle
   * Returns search volume, cost per click, ranking position and score percentage of each keyword in an array
   */
  postGaAccountKeywordsDetailsBySiteId(
    siteId: number,
    requestBody: GaAccountKeywordsGeneralInputRequestSchema,
    queryParams?: PostGaAccountKeywordsDetailsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAccountKeywordsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}/details`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaAccountKeywordsDetailsBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsResponseSchema,
    {
      siteId: number;
      requestBody: GaAccountKeywordsGeneralInputRequestSchema;
      queryParams?: PostGaAccountKeywordsDetailsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Gets the keywords details from google. Required an array of keywords. Idealy used after validateOnGoogle
     * Returns search volume, cost per click, ranking position and score percentage of each keyword in an array
     */
    'postGaAccountKeywordsDetailsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAccountKeywordsGeneralInputRequestSchema;
        queryParams?: PostGaAccountKeywordsDetailsBySiteIdOpts;
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
        this.postGaAccountKeywordsDetailsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaAccountKeywordsDetailsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsDetailsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaAccountKeywordsDetailsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaAccountKeywordsDetailsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_keywords/{siteId}/details');
  static postGaAccountKeywordsDetailsBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_keywords/{siteId}/details(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountKeywordsCountPerAdgroupBySiteIdAbortManager: AbortControllersManager =
    new AbortControllersManager();

  /**
   * Function that checks if any adgroup has less than 3 keywords available or if a user has at least one adgroup.
   *
   */
  getGaAccountKeywordsCountPerAdgroupBySiteId(
    siteId: number,
    queryParams?: GetGaAccountKeywordsCountPerAdgroupBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAccountKeywordsCountPerAdgroupResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account_keywords/${siteId}/countPerAdgroup`), queryParams, signal);
  }

  static getGaAccountKeywordsCountPerAdgroupBySiteIdThunk = createAsyncThunk<
    GaAccountKeywordsCountPerAdgroupResponseSchema,
    { siteId: number; queryParams?: GetGaAccountKeywordsCountPerAdgroupBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Function that checks if any adgroup has less than 3 keywords available or if a user has at least one adgroup.
     *
     */
    'getGaAccountKeywordsCountPerAdgroupBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountKeywordsCountPerAdgroupBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountKeywordsCountPerAdgroupBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.getGaAccountKeywordsCountPerAdgroupBySiteId(siteId, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsCountPerAdgroupBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountKeywordsCountPerAdgroupBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountKeywordsCountPerAdgroupBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/account_keywords/{siteId}/countPerAdgroup',
  );
  static getGaAccountKeywordsCountPerAdgroupBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/account_keywords/{siteId}/countPerAdgroup(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountSchedulingBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get scheduling data for specified site
   *
   */
  getGaAccountSchedulingBySiteId(
    siteId: number,
    queryParams?: GetGaAccountSchedulingBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdSchedulingResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/account_scheduling/${siteId}`), queryParams, signal);
  }

  static getGaAccountSchedulingBySiteIdThunk = createAsyncThunk<
    GaAdSchedulingResponseSchema,
    { siteId: number; queryParams?: GetGaAccountSchedulingBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get scheduling data for specified site
     *
     */
    'getGaAccountSchedulingBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaAccountSchedulingBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountSchedulingBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountSchedulingBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountSchedulingBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountSchedulingBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountSchedulingBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_scheduling/{siteId}');
  static getGaAccountSchedulingBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_scheduling/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaAccountSchedulingBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Update scheduling data for specified site
   *
   */
  putGaAccountSchedulingBySiteId(
    siteId: number,
    requestBody: GaAdSchedulingRequestSchema,
    queryParams?: PutGaAccountSchedulingBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdSchedulingResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/account_scheduling/${siteId}`), requestBody, queryParams, signal);
  }

  static putGaAccountSchedulingBySiteIdThunk = createAsyncThunk<
    GaAdSchedulingResponseSchema,
    { siteId: number; requestBody: GaAdSchedulingRequestSchema; queryParams?: PutGaAccountSchedulingBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Update scheduling data for specified site
     *
     */
    'putGaAccountSchedulingBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaAdSchedulingRequestSchema; queryParams?: PutGaAccountSchedulingBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaAccountSchedulingBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaAccountSchedulingBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountSchedulingBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaAccountSchedulingBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaAccountSchedulingBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/account_scheduling/{siteId}');
  static putGaAccountSchedulingBySiteIdUrlMockRequest = '/rest_api/v1/ga/account_scheduling/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaAccountgroupsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get ad-groups by ad-account id for specific site
   *
   */
  getGaAccountgroupsBySiteId(
    siteId: number,
    queryParams: GetGaAccountgroupsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdGroupsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/accountgroups/${siteId}`), queryParams, signal);
  }

  static getGaAccountgroupsBySiteIdThunk = createAsyncThunk<
    GaAdGroupsResponseSchema,
    { siteId: number; queryParams: GetGaAccountgroupsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get ad-groups by ad-account id for specific site
     *
     */
    'getGaAccountgroupsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetGaAccountgroupsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaAccountgroupsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaAccountgroupsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountgroupsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaAccountgroupsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaAccountgroupsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/accountgroups/{siteId}');
  static getGaAccountgroupsBySiteIdUrlMockRequest = '/rest_api/v1/ga/accountgroups/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaGroupBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get group by group id for specific site
   *
   */
  getGaGroupBySiteId(
    siteId: number,
    queryParams: GetGaGroupBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaSelectedAdsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/group/${siteId}`), queryParams, signal);
  }

  static getGaGroupBySiteIdThunk = createAsyncThunk<
    GaSelectedAdsResponseSchema,
    { siteId: number; queryParams: GetGaGroupBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get group by group id for specific site
     *
     */
    'getGaGroupBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetGaGroupBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaGroupBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaGroupBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaGroupBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}');
  static getGaGroupBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaGroupBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Create ad-group
   *
   */
  postGaGroupBySiteId(
    siteId: number,
    requestBody: null,
    queryParams?: PostGaGroupBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaSelectedAdsResponseSchema> {
    return this.post(new EndPoint(`/rest_api/v1/ga/group/${siteId}`), requestBody, queryParams, signal, contentType);
  }

  static postGaGroupBySiteIdThunk = createAsyncThunk<
    GaSelectedAdsResponseSchema,
    { siteId: number; requestBody: null; queryParams?: PostGaGroupBySiteIdOpts; contentType?: 'application/json' },
    {
      rejectValue: any;
    }
  >(
    /**
     * Create ad-group
     *
     */
    'postGaGroupBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: { siteId: number; requestBody: null; queryParams?: PostGaGroupBySiteIdOpts; contentType?: 'application/json' },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.postGaGroupBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaGroupBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaGroupBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}');
  static postGaGroupBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static deleteGaGroupBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get group by group id for specific site
   *
   */
  deleteGaGroupBySiteId(
    siteId: number,
    requestBody: null,
    queryParams: DeleteGaGroupBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<any> {
    return this.delete(new EndPoint(`/rest_api/v1/ga/group/${siteId}`), requestBody, queryParams, signal);
  }

  static deleteGaGroupBySiteIdThunk = createAsyncThunk<
    any,
    { siteId: number; requestBody: null; queryParams: DeleteGaGroupBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get group by group id for specific site
     *
     */
    'deleteGaGroupBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: null; queryParams: DeleteGaGroupBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.deleteGaGroupBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.deleteGaGroupBySiteId(siteId, requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteGaGroupBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.deleteGaGroupBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static deleteGaGroupBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}');
  static deleteGaGroupBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaGroupChangestatusByGroupidBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Change adgroup statuses for specific site
   *
   */
  putGaGroupChangestatusByGroupidBySiteId(
    siteId: number,
    groupid: number,
    requestBody: GaAdStatusRequestSchema,
    queryParams?: PutGaGroupChangestatusByGroupidBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaSelectedAdsResponseSchema> {
    return this.put(
      new EndPoint(`/rest_api/v1/ga/group/${siteId}/changestatus/${groupid}`),
      requestBody,
      queryParams,
      signal,
    );
  }

  static putGaGroupChangestatusByGroupidBySiteIdThunk = createAsyncThunk<
    GaSelectedAdsResponseSchema,
    {
      siteId: number;
      groupid: number;
      requestBody: GaAdStatusRequestSchema;
      queryParams?: PutGaGroupChangestatusByGroupidBySiteIdOpts;
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Change adgroup statuses for specific site
     *
     */
    'putGaGroupChangestatusByGroupidBySiteId',
    async (
      {
        siteId,
        groupid,
        requestBody,
        queryParams,
      }: {
        siteId: number;
        groupid: number;
        requestBody: GaAdStatusRequestSchema;
        queryParams?: PutGaGroupChangestatusByGroupidBySiteIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaGroupChangestatusByGroupidBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaGroupChangestatusByGroupidBySiteId(siteId, groupid, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupChangestatusByGroupidBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupChangestatusByGroupidBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaGroupChangestatusByGroupidBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/group/{siteId}/changestatus/{groupid}',
  );
  static putGaGroupChangestatusByGroupidBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/group/{siteId}/changestatus/{groupid}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaGroupSuggestedBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get the list of suggested ads for specified site
   *
   */
  getGaGroupSuggestedBySiteId(
    siteId: number,
    queryParams: GetGaGroupSuggestedBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaSuggestedAdsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/group/${siteId}/suggested`), queryParams, signal);
  }

  static getGaGroupSuggestedBySiteIdThunk = createAsyncThunk<
    GaSuggestedAdsResponseSchema,
    { siteId: number; queryParams: GetGaGroupSuggestedBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get the list of suggested ads for specified site
     *
     */
    'getGaGroupSuggestedBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetGaGroupSuggestedBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaGroupSuggestedBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaGroupSuggestedBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupSuggestedBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupSuggestedBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaGroupSuggestedBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/suggested');
  static getGaGroupSuggestedBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/suggested(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaGroupSelectedBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Retrieve headlines & descriptions based on selected ads
   *
   */
  postGaGroupSelectedBySiteId(
    siteId: number,
    requestBody: GaSelectedAdsRequestSchema,
    queryParams: PostGaGroupSelectedBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaSelectedAdsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/group/${siteId}/selected`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaGroupSelectedBySiteIdThunk = createAsyncThunk<
    GaSelectedAdsResponseSchema,
    {
      siteId: number;
      requestBody: GaSelectedAdsRequestSchema;
      queryParams: PostGaGroupSelectedBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Retrieve headlines & descriptions based on selected ads
     *
     */
    'postGaGroupSelectedBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaSelectedAdsRequestSchema;
        queryParams: PostGaGroupSelectedBySiteIdOpts;
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
        this.postGaGroupSelectedBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaGroupSelectedBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupSelectedBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupSelectedBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaGroupSelectedBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/selected');
  static postGaGroupSelectedBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/selected(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaGroupPathsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save the paths and urls of the given ad group
   *
   */
  putGaGroupPathsBySiteId(
    siteId: number,
    requestBody: GaSavePathsRequestSchema,
    queryParams: PutGaGroupPathsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaSavePathsResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/group/${siteId}/paths`), requestBody, queryParams, signal);
  }

  static putGaGroupPathsBySiteIdThunk = createAsyncThunk<
    GaSavePathsResponseSchema,
    { siteId: number; requestBody: GaSavePathsRequestSchema; queryParams: PutGaGroupPathsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save the paths and urls of the given ad group
     *
     */
    'putGaGroupPathsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaSavePathsRequestSchema; queryParams: PutGaGroupPathsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaGroupPathsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.putGaGroupPathsBySiteId(siteId, requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupPathsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupPathsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaGroupPathsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/paths');
  static putGaGroupPathsBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/paths(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaGroupHeadlinesBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save the generated headlines based on user changes
   *
   */
  putGaGroupHeadlinesBySiteId(
    siteId: number,
    requestBody: GaUpdateHeadlinesRequestSchema,
    queryParams: PutGaGroupHeadlinesBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaUpdateHeadlinesResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/group/${siteId}/headlines`), requestBody, queryParams, signal);
  }

  static putGaGroupHeadlinesBySiteIdThunk = createAsyncThunk<
    GaUpdateHeadlinesResponseSchema,
    { siteId: number; requestBody: GaUpdateHeadlinesRequestSchema; queryParams: PutGaGroupHeadlinesBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save the generated headlines based on user changes
     *
     */
    'putGaGroupHeadlinesBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: { siteId: number; requestBody: GaUpdateHeadlinesRequestSchema; queryParams: PutGaGroupHeadlinesBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaGroupHeadlinesBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaGroupHeadlinesBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupHeadlinesBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupHeadlinesBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaGroupHeadlinesBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/headlines');
  static putGaGroupHeadlinesBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/headlines(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static putGaGroupDescriptionsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save the generated descriptions based on user changes
   *
   */
  putGaGroupDescriptionsBySiteId(
    siteId: number,
    requestBody: GaUpdateDescriptionsRequestSchema,
    queryParams: PutGaGroupDescriptionsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaUpdateDescriptionsResponseSchema> {
    return this.put(new EndPoint(`/rest_api/v1/ga/group/${siteId}/descriptions`), requestBody, queryParams, signal);
  }

  static putGaGroupDescriptionsBySiteIdThunk = createAsyncThunk<
    GaUpdateDescriptionsResponseSchema,
    { siteId: number; requestBody: GaUpdateDescriptionsRequestSchema; queryParams: PutGaGroupDescriptionsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save the generated descriptions based on user changes
     *
     */
    'putGaGroupDescriptionsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
      }: {
        siteId: number;
        requestBody: GaUpdateDescriptionsRequestSchema;
        queryParams: PutGaGroupDescriptionsBySiteIdOpts;
      },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putGaGroupDescriptionsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.putGaGroupDescriptionsBySiteId(siteId, requestBody, queryParams, signal),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupDescriptionsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putGaGroupDescriptionsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putGaGroupDescriptionsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/descriptions');
  static putGaGroupDescriptionsBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/descriptions(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaGroupKeywordsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get adGroup keywords by adGroupId for specific site
   *
   */
  getGaGroupKeywordsBySiteId(
    siteId: number,
    queryParams: GetGaGroupKeywordsBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaAdGroupKeywordsResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/group/${siteId}/keywords`), queryParams, signal);
  }

  static getGaGroupKeywordsBySiteIdThunk = createAsyncThunk<
    GaAdGroupKeywordsResponseSchema,
    { siteId: number; queryParams: GetGaGroupKeywordsBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get adGroup keywords by adGroupId for specific site
     *
     */
    'getGaGroupKeywordsBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams: GetGaGroupKeywordsBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaGroupKeywordsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaGroupKeywordsBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupKeywordsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaGroupKeywordsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaGroupKeywordsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/keywords');
  static getGaGroupKeywordsBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/keywords(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaGroupKeywordsBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Post adGroup keywords by adGroupId for specific site
   *
   */
  postGaGroupKeywordsBySiteId(
    siteId: number,
    requestBody: GaAdGroupKeywordsSchema,
    queryParams: PostGaGroupKeywordsBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaAdGroupKeywordsResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/group/${siteId}/keywords`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaGroupKeywordsBySiteIdThunk = createAsyncThunk<
    GaAdGroupKeywordsResponseSchema,
    {
      siteId: number;
      requestBody: GaAdGroupKeywordsSchema;
      queryParams: PostGaGroupKeywordsBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Post adGroup keywords by adGroupId for specific site
     *
     */
    'postGaGroupKeywordsBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaAdGroupKeywordsSchema;
        queryParams: PostGaGroupKeywordsBySiteIdOpts;
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
        this.postGaGroupKeywordsBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaGroupKeywordsBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupKeywordsBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaGroupKeywordsBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaGroupKeywordsBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/group/{siteId}/keywords');
  static postGaGroupKeywordsBySiteIdUrlMockRequest = '/rest_api/v1/ga/group/{siteId}/keywords(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static getGaPhoneconfirmationBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get phone confirmation overlay infos
   *
   */
  getGaPhoneconfirmationBySiteId(
    siteId: number,
    queryParams?: GetGaPhoneconfirmationBySiteIdOpts,
    signal?: AbortSignal,
  ): Observable<GaPhoneConfirmationResponseSchema> {
    return this.get(new EndPoint(`/rest_api/v1/ga/phoneconfirmation/${siteId}`), queryParams, signal);
  }

  static getGaPhoneconfirmationBySiteIdThunk = createAsyncThunk<
    GaPhoneConfirmationResponseSchema,
    { siteId: number; queryParams?: GetGaPhoneconfirmationBySiteIdOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Get phone confirmation overlay infos
     *
     */
    'getGaPhoneconfirmationBySiteId',
    async (
      { siteId, queryParams }: { siteId: number; queryParams?: GetGaPhoneconfirmationBySiteIdOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getGaPhoneconfirmationBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(gaStore.getGaPhoneconfirmationBySiteId(siteId, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaPhoneconfirmationBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getGaPhoneconfirmationBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getGaPhoneconfirmationBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/phoneconfirmation/{siteId}');
  static getGaPhoneconfirmationBySiteIdUrlMockRequest = '/rest_api/v1/ga/phoneconfirmation/{siteId}(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaPhoneconfirmationBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Post request to be sent the verification code
   *
   */
  postGaPhoneconfirmationBySiteId(
    siteId: number,
    requestBody: GaPhoneConfirmationSendRequestSchema,
    queryParams?: PostGaPhoneconfirmationBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaPhoneConfirmationSendResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/phoneconfirmation/${siteId}/`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaPhoneconfirmationBySiteIdThunk = createAsyncThunk<
    GaPhoneConfirmationSendResponseSchema,
    {
      siteId: number;
      requestBody: GaPhoneConfirmationSendRequestSchema;
      queryParams?: PostGaPhoneconfirmationBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Post request to be sent the verification code
     *
     */
    'postGaPhoneconfirmationBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaPhoneConfirmationSendRequestSchema;
        queryParams?: PostGaPhoneconfirmationBySiteIdOpts;
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
        this.postGaPhoneconfirmationBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaPhoneconfirmationBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaPhoneconfirmationBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaPhoneconfirmationBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaPhoneconfirmationBySiteIdUrlRegEx = new RegExp('/rest_api/v1/ga/phoneconfirmation/{siteId}/');
  static postGaPhoneconfirmationBySiteIdUrlMockRequest = '/rest_api/v1/ga/phoneconfirmation/{siteId}/(.*)';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postGaPhoneconfirmationValidateBySiteIdAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Recived code validation
   *
   */
  postGaPhoneconfirmationValidateBySiteId(
    siteId: number,
    requestBody: GaPhoneConfirmationValidateRequestSchema,
    queryParams?: PostGaPhoneconfirmationValidateBySiteIdOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<GaPhoneConfirmationValidateResponseSchema> {
    return this.post(
      new EndPoint(`/rest_api/v1/ga/phoneconfirmation/${siteId}/validate`),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postGaPhoneconfirmationValidateBySiteIdThunk = createAsyncThunk<
    GaPhoneConfirmationValidateResponseSchema,
    {
      siteId: number;
      requestBody: GaPhoneConfirmationValidateRequestSchema;
      queryParams?: PostGaPhoneconfirmationValidateBySiteIdOpts;
      contentType?: 'application/json';
    },
    {
      rejectValue: any;
    }
  >(
    /**
     * Recived code validation
     *
     */
    'postGaPhoneconfirmationValidateBySiteId',
    async (
      {
        siteId,
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: {
        siteId: number;
        requestBody: GaPhoneConfirmationValidateRequestSchema;
        queryParams?: PostGaPhoneconfirmationValidateBySiteIdOpts;
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
        this.postGaPhoneconfirmationValidateBySiteIdAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          gaStore.postGaPhoneconfirmationValidateBySiteId(siteId, requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaPhoneconfirmationValidateBySiteIdAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postGaPhoneconfirmationValidateBySiteIdAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postGaPhoneconfirmationValidateBySiteIdUrlRegEx = new RegExp(
    '/rest_api/v1/ga/phoneconfirmation/{siteId}/validate',
  );
  static postGaPhoneconfirmationValidateBySiteIdUrlMockRequest =
    '/rest_api/v1/ga/phoneconfirmation/{siteId}/validate(.*)';
}
export const gaStore = new GaStore();
