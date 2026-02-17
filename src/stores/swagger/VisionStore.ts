/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { VisionFeedFilters } from '@models/swagger/VisionFeedFilters';
import type { VisionFeedResponse } from '@models/swagger/VisionFeedResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type PostVisionListOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * Append to final json the returned internal request response
   */
  debug?: string;
  /**
   * Site id for witch to show feed for
   */
  overwriteSite?: number;
  /**
   * Force load feed without using cache
   */
  fload?: string;
  /**
   * Call mock site function
   */
  isMockCall?: string;
  /**
   *  to show a specific notification (used in hlpd tickets mainly, given by QA.).Will highlight the cloud payload in the notification accordingly.
   */
  order_id?: string;
  /**
   * From where to start loading the feed
   */
  from?: number;
  /**
   * How many notifications do we load in one go
   */
  limit?: number;
  /**
   * Used for jumpstart
   */
  page?: number;
};

export class VisionStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static postVisionListAbortManager: AbortControllersManager = new AbortControllersManager();
  /**
   * Listing vision feed for business
   */

  /**
   *
   * Listing vision feed for business
   */
  postVisionList(
    requestBody: VisionFeedFilters,
    queryParams: PostVisionListOpts,
    signal?: AbortSignal,
    contentType?: 'multipart/form-data',
  ): Observable<VisionFeedResponse> {
    return this.post(new EndPoint('/rest_api/v1/vision/list'), requestBody, queryParams, signal, contentType);
  }

  static postVisionListThunk = createAsyncThunk<
    VisionFeedResponse,
    { requestBody: VisionFeedFilters; queryParams: PostVisionListOpts; contentType?: 'multipart/form-data' },
    {
      rejectValue: any | any | any | any | any;
    }
  >(
    /**
     *
     * Listing vision feed for business
     */
    'postVisionList',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'multipart/form-data',
      }: { requestBody: VisionFeedFilters; queryParams: PostVisionListOpts; contentType?: 'multipart/form-data' },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.postVisionListAbortManager._push(requestId, controller);

        const result = await firstValueFrom(visionStore.postVisionList(requestBody, queryParams, signal, contentType));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postVisionListAbortManager._remove(requestId);

        return result;
      } catch (err: any) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postVisionListAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postVisionListUrlRegEx = new RegExp('/rest_api/v1/vision/list');
  static postVisionListUrlMockRequest = '/rest_api/v1/vision/list(.*)';
}
export const visionStore = new VisionStore();
