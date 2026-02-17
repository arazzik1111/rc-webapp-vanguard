/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type GetAdminUnittestsOpts = { FE_UNIQUE_ID?: string };
export type PostAdminUnittestsRunTestOpts = {
  FE_UNIQUE_ID?: string;
  /**
   * name of the file to run
   */
  fileName: string;
  /**
   * name of the test to run in file
   */
  testName?: string;
  /**
   * path of the file
   */
  moduleName?: string;
  /**
   * should this test also run coverage report
   */
  shouldRunCoverage?: boolean;
};

export class AdminStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static getAdminUnittestsAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Get list of all unittests
   *
   */
  getAdminUnittests(queryParams?: GetAdminUnittestsOpts, signal?: AbortSignal): Observable<any> {
    return this.get(new EndPoint('/rest_api/v1/admin/unittests'), queryParams, signal);
  }

  static getAdminUnittestsThunk = createAsyncThunk<
    any,
    GetAdminUnittestsOpts,
    {
      rejectValue: any;
    }
  >(
    /**
     * Get list of all unittests
     *
     */
    'getAdminUnittests',
    async (queryParams?: GetAdminUnittestsOpts, { rejectWithValue } = {} as any) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.getAdminUnittestsAbortManager._push(requestId, controller);

        const result = await firstValueFrom(adminStore.getAdminUnittests(queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAdminUnittestsAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.getAdminUnittestsAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static getAdminUnittestsUrlRegEx = new RegExp('/rest_api/v1/admin/unittests');
  static getAdminUnittestsUrlMockRequest = '/rest_api/v1/admin/unittests';

  /**
   * Manager of list of AbortControllers for the Request
   */
  static postAdminUnittestsRunTestAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Run a specific test
   *
   */
  postAdminUnittestsRunTest(
    requestBody: null,
    queryParams: PostAdminUnittestsRunTestOpts,
    signal?: AbortSignal,
    contentType?: 'application/json',
  ): Observable<any> {
    return this.post(
      new EndPoint('/rest_api/v1/admin/unittests/run_test'),
      requestBody,
      queryParams,
      signal,
      contentType,
    );
  }

  static postAdminUnittestsRunTestThunk = createAsyncThunk<
    any,
    { requestBody: null; queryParams: PostAdminUnittestsRunTestOpts; contentType?: 'application/json' },
    {
      rejectValue: any;
    }
  >(
    /**
     * Run a specific test
     *
     */
    'postAdminUnittestsRunTest',
    async (
      {
        requestBody,
        queryParams,
        contentType = 'application/json',
      }: { requestBody: null; queryParams: PostAdminUnittestsRunTestOpts; contentType?: 'application/json' },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.postAdminUnittestsRunTestAbortManager._push(requestId, controller);

        const result = await firstValueFrom(
          adminStore.postAdminUnittestsRunTest(requestBody, queryParams, signal, contentType),
        );

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.postAdminUnittestsRunTestAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.postAdminUnittestsRunTestAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static postAdminUnittestsRunTestUrlRegEx = new RegExp('/rest_api/v1/admin/unittests/run_test');
  static postAdminUnittestsRunTestUrlMockRequest = '/rest_api/v1/admin/unittests/run_test(.*)';
}
export const adminStore = new AdminStore();
