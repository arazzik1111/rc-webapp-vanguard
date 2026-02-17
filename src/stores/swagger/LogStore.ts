/*
 * WARNING THIS FILE IS AUTO-GENERATED DO NOT MODIFY YOUR CHANGES WILL BE OVERWRITTEN!
 */
import type { LogsRequestSchema } from '@models/swagger/LogsRequestSchema';
import type { LogsResponseSchema } from '@models/swagger/LogsResponseSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firstValueFrom, Observable } from 'rxjs';

import { EndPoint } from '../../api-config';
import { HttpStore } from '../http.store';
import { AbortControllersManager } from '../store-helpers/abort-controllers-manager';

export type PutLogOpts = {
  FE_UNIQUE_ID?: string;

  type: string;
};

export class LogStore extends HttpStore {
  /**
   * Manager of list of AbortControllers for the Request
   */
  static putLogAbortManager: AbortControllersManager = new AbortControllersManager();

  /**
   * Save logs in elastic
   *
   */
  putLog(
    requestBody: LogsRequestSchema,
    queryParams: PutLogOpts,
    signal?: AbortSignal,
  ): Observable<LogsResponseSchema> {
    return this.put(new EndPoint('/rest_api/v1/log'), requestBody, queryParams, signal);
  }

  static putLogThunk = createAsyncThunk<
    LogsResponseSchema,
    { requestBody: LogsRequestSchema; queryParams: PutLogOpts },
    {
      rejectValue: any;
    }
  >(
    /**
     * Save logs in elastic
     *
     */
    'putLog',
    async (
      { requestBody, queryParams }: { requestBody: LogsRequestSchema; queryParams: PutLogOpts },
      { rejectWithValue } = {} as any,
    ) => {
      // Generate a random request Id
      const requestId = new Date().getTime().toString();

      try {
        // Create a new Abort controller for the request
        const controller = new AbortController();

        const signal = controller.signal;
        this.putLogAbortManager._push(requestId, controller);

        const result = await firstValueFrom(logStore.putLog(requestBody, queryParams, signal));

        // After the Request is completed, remove the Abort controler from Manager, since we don't need it anymore.
        this.putLogAbortManager._remove(requestId);

        return result;
      } catch (err) {
        // In case the Request fails, remove the Abort controler from Manager, since we don't need it anymore.
        this.putLogAbortManager._remove(requestId);

        return rejectWithValue(err.response.data);
      }
    },
  );

  static putLogUrlRegEx = new RegExp('/rest_api/v1/log');
  static putLogUrlMockRequest = '/rest_api/v1/log(.*)';
}
export const logStore = new LogStore();
